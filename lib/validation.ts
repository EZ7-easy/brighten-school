import { z } from "zod";

export const prompSchema = z.object({
  prompt: z.string().min(4),
});

export const contactSchema = z.object({
  name: z.string().min(3),
  tel: z.string().min(9).max(13),
  level: z.string(),
});
