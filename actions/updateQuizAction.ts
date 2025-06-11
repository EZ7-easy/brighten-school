"use server";

import { quizSchema } from "@/lib/validation";
import { updateQuiz } from "./quizAction";

export async function updateQuizAction(prevState: any, formData: FormData) {
  try {
    const title = String(formData.get("title") ?? "");
    const description = String(formData.get("description") ?? "");
    const level = String(formData.get("level") ?? "");
    const questionCount = Number(formData.get("questionCount") ?? 0);
    const quizId = String(formData.get("quizId") ?? "");

    if (!quizId) {
      return { message: "Quiz ID is required." };
    }

    const questions: {
      question: string;
      options: [string, string, string, string];
      correct: string;
    }[] = [];

    for (let i = 0; i < questionCount; i++) {
      const question = String(formData.get(`question-${i}`) ?? "");
      const options = [
        String(formData.get(`option-${i}-0`) ?? ""),
        String(formData.get(`option-${i}-1`) ?? ""),
        String(formData.get(`option-${i}-2`) ?? ""),
        String(formData.get(`option-${i}-3`) ?? ""),
      ] as [string, string, string, string];

      const correct = String(formData.get(`correct-${i}`) ?? "");

      questions.push({ question, options, correct });
    }

    // Validate with Zod
    const result = quizSchema.safeParse({
      title,
      description,
      level,
      questions,
    });

    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Invalid input";
      return { message: firstError };
    }

    // Update DB
    await updateQuiz(quizId, result.data);

    return { message: "Quiz updated successfully" };
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong." };
  }
}
