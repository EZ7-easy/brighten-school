import { getQuiz } from "@/actions/quizAction";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: any[];
  level: string;
}

export default async function QuizListPage() {
  const quizzes: Quiz[] = await getQuiz();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose a Quiz</h1>
      {quizzes.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-7">
          <Image
            src="/not-found.svg" // <-- Use your actual image path here (or use a public URL)
            alt="Not Found"
            width={55}
            height={55}
            className="w-55 h-55 mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No Quizzes Found
          </h2>
          <p className="text-gray-500 max-w-md">
            It seems there are no quizzes available yet. You can add a new quiz
            to get started.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Questions: {quiz.questions.length}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    ["A1", "A2"].includes(quiz.level)
                      ? "bg-green-100 text-green-800"
                      : ["B1", "B2"].includes(quiz.level)
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {quiz.level}
                </span>
              </div>
              <Link href={`/quiz/${quiz._id}`}>
                <Button className="w-full">Start Quiz</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
