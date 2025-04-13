// eslint-disable @typescript-eslint/no-unsed-vars

import { NextResponse } from "next/server";
import openai from "../../../../lib/openai";
import axios from "axios";
import { toast } from "sonner";

const englishRelatedTopics = [
  "essay",
  "vocabulary",
  "grammar",
  "syntax",
  "sentence",
  "literature",
  "language",
  "writing",
  "text",
  "comprehension",
  "poetry",
  "reading",
  "study",
  "dictionary",
  // Add any other relevant keywords related to English language topics
];

function isEnglishRelated(message: string): boolean {
  // Check if the message contains any English-related keywords
  const lowercasedMessage = message.toLowerCase();
  return englishRelatedTopics.some((topic) =>
    lowercasedMessage.includes(topic)
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Check if all messages are related to English topics
    const areMessagesEnglishRelated = messages.every(
      (message: { content: string }) => isEnglishRelated(message.content)
    );

    if (!areMessagesEnglishRelated) {
      return new NextResponse(
        "Please ask only questions related to the English language, such as essay topics, vocabulary, grammar, etc.",
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo", // Switch to GPT-4 Turbo
      messages,
    });

    return NextResponse.json(response.choices[0].message.content);
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : "You can only ask me things related to English language!";
    toast.error(errorMessage);
  }
}
