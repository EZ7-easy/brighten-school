import { getQuiz } from "@/actions/quizAction";
import { Button } from "@/components/ui/button";
import DeleteButton from "./DeleteButton";

interface Quiz {
  _id: string;
  title: string;
  questions: any[];
}
import Link from "next/link";

export default async function GetQuiz() {
  const quizzes: Quiz[] = await getQuiz();

  return (
    <div className="w-full space-y-3">
      {quizzes.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center py-7">
          <img
            src="/not-found.svg" // <-- Use your actual image path here (or use a public URL)
            alt="Not Found"
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

      {quizzes.map((quiz) => (
        <div
          key={quiz._id}
          className="justify-between flex border rounded-xl p-5"
        >
          <div>
            <div className="gap-1 flex">
              <h1 className="font-medium">Topic:</h1>
              <p>{quiz.title}</p>
            </div>
            <span className="text-sm text-gray-500">
              Questions: {quiz.questions.length}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={`/admin/${quiz._id}/edit`}>
              <Button variant="outline">Edit</Button>
            </Link>
            <DeleteButton id={quiz._id.toString()} />
          </div>
        </div>
      ))}
    </div>
  );
}
