import { and, asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  InsertContactSubmission,
  InsertPrescriptionSubmission,
  articles,
  conditions,
  contactSubmissions,
  prescriptionSubmissions,
  services,
  testimonials,
  users,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ─── Conditions ──────────────────────────────────────────────────────────────

export async function getAllConditions() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(conditions).where(eq(conditions.isActive, true)).orderBy(asc(conditions.sortOrder));
}

export async function getConditionBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(conditions).where(and(eq(conditions.slug, slug), eq(conditions.isActive, true))).limit(1);
  return result[0] ?? undefined;
}

// ─── Services ────────────────────────────────────────────────────────────────

export async function getAllServices() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(services).where(eq(services.isActive, true)).orderBy(asc(services.sortOrder));
}

export async function getServiceBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(services).where(and(eq(services.slug, slug), eq(services.isActive, true))).limit(1);
  return result[0] ?? undefined;
}

// ─── Articles ────────────────────────────────────────────────────────────────

export async function getAllArticles(category?: string) {
  const db = await getDb();
  if (!db) return [];
  if (category) {
    return db.select().from(articles).where(and(eq(articles.isPublished, true), eq(articles.category, category))).orderBy(asc(articles.publishedAt));
  }
  return db.select().from(articles).where(eq(articles.isPublished, true)).orderBy(asc(articles.publishedAt));
}

export async function getArticleBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(articles).where(and(eq(articles.slug, slug), eq(articles.isPublished, true))).limit(1);
  return result[0] ?? undefined;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getAllTestimonials() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(testimonials).where(eq(testimonials.isActive, true)).orderBy(asc(testimonials.sortOrder));
}

// ─── Contact Submissions ─────────────────────────────────────────────────────

export async function createContactSubmission(data: InsertContactSubmission) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(contactSubmissions).values(data);
}

export async function getAllContactSubmissions() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contactSubmissions).orderBy(asc(contactSubmissions.createdAt));
}

// ─── Prescription Submissions ────────────────────────────────────────────────

export async function createPrescriptionSubmission(data: InsertPrescriptionSubmission) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(prescriptionSubmissions).values(data);
}

export async function getAllPrescriptionSubmissions() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(prescriptionSubmissions).orderBy(asc(prescriptionSubmissions.createdAt));
}
