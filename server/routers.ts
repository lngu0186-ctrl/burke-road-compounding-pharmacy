import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import {
  getAllConditions,
  getConditionBySlug,
  getAllServices,
  getServiceBySlug,
  getAllArticles,
  getArticleBySlug,
  getAllTestimonials,
  createContactSubmission,
  getAllContactSubmissions,
  createPrescriptionSubmission,
  getAllPrescriptionSubmissions,
} from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  conditions: router({
    list: publicProcedure.query(async () => getAllConditions()),
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => getConditionBySlug(input.slug)),
  }),

  services: router({
    list: publicProcedure.query(async () => getAllServices()),
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => getServiceBySlug(input.slug)),
  }),

  articles: router({
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }))
      .query(async ({ input }) => getAllArticles(input.category)),
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => getArticleBySlug(input.slug)),
  }),

  testimonials: router({
    list: publicProcedure.query(async () => getAllTestimonials()),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1),
          lastName: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          enquiryType: z.string().default("general"),
          message: z.string().min(10),
        })
      )
      .mutation(async ({ input }) => {
        await createContactSubmission(input);
        await notifyOwner({
          title: `New contact enquiry from ${input.firstName} ${input.lastName}`,
          content: `**Type:** ${input.enquiryType}\n**Email:** ${input.email}\n**Phone:** ${input.phone ?? "Not provided"}\n\n${input.message}`,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") return [];
      return getAllContactSubmissions();
    }),
  }),

  prescriptions: router({
    submit: publicProcedure
      .input(
        z.object({
          prescriberName: z.string().min(1),
          prescriberNumber: z.string().min(1),
          qualifications: z.string().optional(),
          practiceName: z.string().optional(),
          practicePhone: z.string().optional(),
          practiceEmail: z.string().optional(),
          practiceAddress: z.string().optional(),
          patientName: z.string().min(1),
          patientDob: z.string().optional(),
          patientPhone: z.string().optional(),
          patientAddress: z.string().optional(),
          medicareNumber: z.string().optional(),
          allergies: z.string().optional(),
          specialInstructions: z.string().optional(),
          medications: z.string().min(2),
          prescriptionDate: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createPrescriptionSubmission(input);
        await notifyOwner({
          title: `New prescription from Dr. ${input.prescriberName} for ${input.patientName}`,
          content: `**Prescriber:** ${input.prescriberName} (${input.prescriberNumber})\n**Patient:** ${input.patientName}\n**Practice:** ${input.practiceName ?? "N/A"}\n**Date:** ${input.prescriptionDate ?? "Not specified"}`,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") return [];
      return getAllPrescriptionSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
