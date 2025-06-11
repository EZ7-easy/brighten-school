import { getQuiz } from "@/actions/quizAction"
import { Button } from "@/components/ui/button"
import DeleteButton from "./DeleteButton"

interface Quiz{
    _id: string
	title: string
    questions: any[]
}


export default async function GetQuiz() {
  const quizzes: Quiz[] = await getQuiz()

  return (
    <div className="w-full space-y-3">
        {quizzes.length === 0 && (<div> nothing happended </div>)}
        {quizzes.map((quiz) => (
            <div key={quiz._id} className="justify-between flex border rounded-xl p-5">
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
                    <Button variant="outline">Edit</Button>
                    <DeleteButton id={quiz._id.toString()} />
                </div>
            </div>
        ))}
    </div>
  )
}