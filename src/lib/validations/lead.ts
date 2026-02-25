import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(200),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Le téléphone doit contenir au moins 8 caractères").max(20),
  message: z.string().max(2000).optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const leadApiSchema = leadFormSchema.extend({
  source: z.string().optional(),
});

export type LeadApiBody = z.infer<typeof leadApiSchema>;
