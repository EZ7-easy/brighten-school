"use server";
import type { IQuiz } from "@/app.types";
import Quiz from "@/database/quiz.model";
import { connectToDatabase } from "@/lib/mongoose";
import { Types } from "mongoose";

export const createQuiz = async (data: IQuiz) => {
  try {
    await connectToDatabase();
    await Quiz.create({ ...data });
  } catch (error) {
    throw new Error("Failed to create quiz");
  }
};

export const getQuiz = async () => {
  try {
    await connectToDatabase();
    return await Quiz.find();
  } catch (error) {
    throw new Error("Failed to fetch quiz");
  }
};

export const getOneQuiz = async (id: string) => {
  try {
    await connectToDatabase();
    const quiz = await Quiz.findById(id);
    return JSON.parse(JSON.stringify(quiz));
  } catch (error) {
    throw new Error("Failed to fetch quiz");
  }
};

export const deleteQuiz = async (id: string) => {
  try {
    await connectToDatabase();
    await Quiz.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete quiz");
  }
};

export const updateQuiz = async (id: string, data: Partial<IQuiz>) => {
  try {
    await connectToDatabase();

    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid quiz ID");
    }

    await Quiz.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update quiz");
  }
};

export const getQuizById = async (id: string) => {
  try {
    await connectToDatabase();
    const quiz = await Quiz.findById(id).lean();
    return JSON.parse(JSON.stringify(quiz));
  } catch (err) {
    console.error(err);
    return null;
  }
};
