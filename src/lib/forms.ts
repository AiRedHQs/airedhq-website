import { z } from "zod";

import { budgetRanges, inquiryTypes, projectTypes } from "@/data/contact";

export const emailSchema = z.string().trim().email();

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: emailSchema,
  company: z.string().trim().min(2, "Enter your company name."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  inquiryType: z.enum(inquiryTypes),
  projectType: z.enum(projectTypes),
  budget: z.enum(budgetRanges),
  message: z
    .string()
    .trim()
    .min(20, "Share a little more context so we can respond well."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function parseFormValue<TSchema extends z.ZodType>(
  schema: TSchema,
  value: unknown,
): z.infer<TSchema> {
  return schema.parse(value);
}
