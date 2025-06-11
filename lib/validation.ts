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
  options: z.array(z.string().min(1, "Option is required")).length(4),
  correct: z.string().regex(/^[A-D]$/, "Must be A, B, C, or D"),
});

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(5, "Description is required"),
  level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  questions: z.array(questionSchema).min(1),
});

export const quizSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  questions: z.array(
    z.object({
      question: z.string().min(1),
      options: z
        .array(z.string().min(1))
        .length(4, "Each question must have 4 options"),
      correct: z.enum(["A", "B", "C", "D"]),
    })
  ),
});
