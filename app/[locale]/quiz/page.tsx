import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quizzes = [
	{
		id: "1",
		title: "Test for Beginner",
		description: "Test your basic english knowledge",
		questions: 10,
		difficulty: "Beginner"
	},
	{
		id: "2",
		title: "Intermediate test",
		description: "Challenging language concepts",
		questions: 15,
		difficulty: "Intermediate"
	},
	{
		id: "3",
		title: "Master of English",
		description: "If you think you are an expert, try this one",
		questions: 12,
		difficulty: "Master"
	}
];

export default function QuizPage() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Choose a Quiz</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{quizzes.map((quiz) => (
					<Card key={quiz.id} className="hover:shadow-lg transition-shadow">
						<CardHeader>
							<CardTitle>{quiz.title}</CardTitle>
							<CardDescription>{quiz.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex justify-between items-center mb-4">
								<span className="text-sm text-gray-500">Questions: {quiz.questions}</span>
								<span className={`px-2 py-1 rounded text-xs ${
									quiz.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
										quiz.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
											"bg-red-100 text-red-800"
								}`}>
                  {quiz.difficulty}
                </span>
							</div>
							<Link href={`/quiz/${quiz.id}`}>
								<Button className="w-full">Start Quiz</Button>
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
