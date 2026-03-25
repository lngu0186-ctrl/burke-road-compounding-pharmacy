import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database module so tests run without a real DB connection
vi.mock("./db", () => ({
  getDb: vi.fn().mockResolvedValue(null),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
  getAllConditions: vi.fn().mockResolvedValue([
    { id: 1, slug: "hormone-therapy", title: "Hormone Therapy", summary: "BHRT and related", icon: "⚖️", category: "Endocrinology", isActive: true, sortOrder: 0, createdAt: new Date(), updatedAt: new Date() },
  ]),
  getConditionBySlug: vi.fn().mockResolvedValue(null),
  getAllServices: vi.fn().mockResolvedValue([
    { id: 1, slug: "pbs", title: "PBS Dispensing", description: "Subsidised prescriptions", icon: "💊", isActive: true, sortOrder: 0, createdAt: new Date(), updatedAt: new Date() },
  ]),
  getServiceBySlug: vi.fn().mockResolvedValue(null),
  getAllArticles: vi.fn().mockResolvedValue([
    { id: 1, slug: "bhrt-overview", title: "Understanding BHRT", excerpt: "An overview", content: null, category: "Hormone Therapy", readTimeMinutes: 5, imageUrl: null, isPublished: true, publishedAt: new Date(), createdAt: new Date(), updatedAt: new Date() },
  ]),
  getArticleBySlug: vi.fn().mockResolvedValue(null),
  getAllTestimonials: vi.fn().mockResolvedValue([
    { id: 1, name: "Sarah M.", rating: 5, text: "Excellent service", role: "Patient", isActive: true, sortOrder: 0, createdAt: new Date(), updatedAt: new Date() },
  ]),
  createContactSubmission: vi.fn().mockResolvedValue({ id: 1 }),
  createPrescriptionSubmission: vi.fn().mockResolvedValue({ id: 1 }),
  getAllContactSubmissions: vi.fn().mockResolvedValue([]),
  getAllPrescriptionSubmissions: vi.fn().mockResolvedValue([]),
}));

function makeCtx(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("pharmacy.conditions.list", () => {
  it("returns a list of conditions", async () => {
    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.conditions.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("slug");
    expect(result[0]).toHaveProperty("title");
  });
});

describe("pharmacy.services.list", () => {
  it("returns a list of services", async () => {
    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.services.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("title");
  });
});

describe("pharmacy.articles.list", () => {
  it("returns articles without a category filter", async () => {
    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.articles.list({});
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("slug");
  });
});

describe("pharmacy.testimonials.list", () => {
  it("returns active testimonials", async () => {
    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.testimonials.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("rating");
  });
});

describe("pharmacy.contact.submit", () => {
  it("accepts a valid contact submission", async () => {
    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.contact.submit({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "0400000000",
      enquiryType: "general",
      message: "Hello, I have a question about compounding.",
    });
    expect(result).toHaveProperty("success", true);
  });
});

describe("pharmacy.prescriptions.submit", () => {
  it("accepts a valid prescription submission", async () => {
    const caller = appRouter.createCaller(makeCtx());
    const result = await caller.prescriptions.submit({
      prescriberName: "Dr. John Doe",
      prescriberNumber: "MED12345",
      qualifications: "MBBS",
      practiceName: "City Medical",
      practicePhone: "0398765432",
      practiceEmail: "dr@citymedical.com.au",
      practiceAddress: "1 Collins St Melbourne",
      patientName: "Alice Brown",
      patientDob: "1980-01-01",
      patientPhone: "0411111111",
      patientAddress: "10 Park St Camberwell",
      medicareNumber: "1234567890",
      allergies: "Penicillin",
      specialInstructions: "Fragrance-free",
      medications: JSON.stringify([{ activeIngredient: "Progesterone 100mg", dosageForm: "capsule" }]),
      prescriptionDate: "2026-03-25",
    });
    expect(result).toHaveProperty("success", true);
  });
});

describe("auth.logout", () => {
  it("clears the session cookie and reports success", async () => {
    const clearedCookies: { name: string; options: Record<string, unknown> }[] = [];
    const ctx: TrpcContext = {
      user: null,
      req: { protocol: "https", headers: {} } as TrpcContext["req"],
      res: {
        clearCookie: (name: string, options: Record<string, unknown>) => {
          clearedCookies.push({ name, options });
        },
      } as unknown as TrpcContext["res"],
    };
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.logout();
    expect(result).toEqual({ success: true });
  });
});
