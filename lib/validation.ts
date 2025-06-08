import { z } from "zod";

export const prompSchema = z.object({
  prompt: z.string().min(4),
});

export const contactSchema = z.object({
  name: z.string().min(3),
  tel: z.string().min(9).max(13),
  level: z.string(),
});

export const questionSchema = z.object({
  question: z.string().min(1, "Question is required"),
  options: z
    .array(z.string().min(1, "Option is required"))
    .length(4, "Must have 4 options"),
  correct: z.enum(["A", "B", "C", "D"], {
    required_error: "Select a correct answer",
  }),
});

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  questions: z.array(questionSchema),
});