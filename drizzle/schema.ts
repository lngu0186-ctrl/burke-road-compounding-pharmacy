import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

// ─── Auth ────────────────────────────────────────────────────────────────────

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Conditions ──────────────────────────────────────────────────────────────

export const conditions = mysqlTable("conditions", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 128 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 8 }).notNull().default("💊"),
  category: varchar("category", { length: 128 }).notNull(),
  summary: text("summary"),
  content: text("content"),
  metaTitle: varchar("metaTitle", { length: 255 }),
  metaDesc: varchar("metaDesc", { length: 512 }),
  isActive: boolean("isActive").default(true).notNull(),
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Condition = typeof conditions.$inferSelect;
export type InsertCondition = typeof conditions.$inferInsert;

// ─── Services ────────────────────────────────────────────────────────────────

export const services = mysqlTable("services", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 128 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 8 }).notNull().default("🏥"),
  description: text("description"),
  details: text("details"), // JSON array stored as text
  imageUrl: varchar("imageUrl", { length: 512 }),
  isActive: boolean("isActive").default(true).notNull(),
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Service = typeof services.$inferSelect;
export type InsertService = typeof services.$inferInsert;

// ─── Knowledge Centre Articles ───────────────────────────────────────────────

export const articles = mysqlTable("articles", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 128 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  excerpt: text("excerpt"),
  content: text("content"),
  category: varchar("category", { length: 128 }).notNull(),
  readTimeMinutes: int("readTimeMinutes").default(3).notNull(),
  imageUrl: varchar("imageUrl", { length: 512 }),
  isPublished: boolean("isPublished").default(true).notNull(),
  publishedAt: timestamp("publishedAt").defaultNow(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Article = typeof articles.$inferSelect;
export type InsertArticle = typeof articles.$inferInsert;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  rating: int("rating").default(5).notNull(),
  text: text("text").notNull(),
  source: varchar("source", { length: 64 }).default("Google").notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

// ─── Contact Form Submissions ────────────────────────────────────────────────

export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  firstName: varchar("firstName", { length: 128 }).notNull(),
  lastName: varchar("lastName", { length: 128 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 32 }),
  enquiryType: varchar("enquiryType", { length: 64 }).default("general").notNull(),
  message: text("message").notNull(),
  isRead: boolean("isRead").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

// ─── Prescription Submissions ────────────────────────────────────────────────

export const prescriptionSubmissions = mysqlTable("prescription_submissions", {
  id: int("id").autoincrement().primaryKey(),
  // Prescriber info
  prescriberName: varchar("prescriberName", { length: 255 }).notNull(),
  prescriberNumber: varchar("prescriberNumber", { length: 64 }).notNull(),
  qualifications: varchar("qualifications", { length: 255 }),
  practiceName: varchar("practiceName", { length: 255 }),
  practicePhone: varchar("practicePhone", { length: 32 }),
  practiceEmail: varchar("practiceEmail", { length: 320 }),
  practiceAddress: text("practiceAddress"),
  // Patient info
  patientName: varchar("patientName", { length: 255 }).notNull(),
  patientDob: varchar("patientDob", { length: 16 }),
  patientPhone: varchar("patientPhone", { length: 32 }),
  patientAddress: text("patientAddress"),
  medicareNumber: varchar("medicareNumber", { length: 32 }),
  allergies: text("allergies"),
  specialInstructions: text("specialInstructions"),
  // Medications (stored as JSON)
  medications: text("medications").notNull(), // JSON array
  prescriptionDate: varchar("prescriptionDate", { length: 16 }),
  // Status
  status: mysqlEnum("status", ["pending", "processing", "completed", "cancelled"])
    .default("pending")
    .notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PrescriptionSubmission = typeof prescriptionSubmissions.$inferSelect;
export type InsertPrescriptionSubmission = typeof prescriptionSubmissions.$inferInsert;
