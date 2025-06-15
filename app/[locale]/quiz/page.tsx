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
    <div className="container mx-auto px-4 md:px-6 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#1a1a1a]">
        Choose a Quiz
      </h1>

      {quizzes.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16">
          <Image
            src="/not-found.svg"
            alt="Not Found"
            width={180}
            height={180}
            className="mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No Quizzes Found
          </h2>
          <p className="text-gray-500 max-w-md">
            There are currently no quizzes available. Be the first to create
            one!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card
              key={quiz._id}
              className="hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <CardHeader>
                <CardTitle className="text-xl truncate">{quiz.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <span>Questions: {quiz.questions.length}</span>
                  <span
                    className={`px-2 py-1 rounded-full font-medium text-xs ${
                      ["A1", "A2"].includes(quiz.level)
                        ? "bg-green-100 text-green-700"
                        : ["B1", "B2"].includes(quiz.level)
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {quiz.level}
                  </span>
                </div>
                <Link href={`/quiz/${quiz._id}`} passHref>
                  <Button className="w-full" variant="default">
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
