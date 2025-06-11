import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from 'next/navigation'

interface ResultsPageProps {
	params: {
		quizId: string;
	};
	searchParams: {
		score?: string;
		total?: string;
	};
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
	// 1. Validate and parse parameters safely
	const score = Number(searchParams.score) || 0
	const total = Number(searchParams.total) || 1 // Prevent division by zero
	
	// 2. Handle invalid cases
	if (isNaN(score) || isNaN(total) || total === 0) {
		redirect('/quiz') // Redirect to quiz list if invalid
	}
	
	// 3. Calculate result
	const percentage = Math.round((score / total) * 100)
	const resultMessage = percentage >= 70 ? 'Excellent!' :
		percentage >= 50 ? 'Good job!' :
			'Keep practicing!'
	
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto py-8 max-w-md">
				<Card>
					<CardHeader>
						<CardTitle className="text-center">Quiz Results</CardTitle>
					</CardHeader>
					<CardContent className="text-center">
						<div className="text-5xl font-bold mb-6">
							{score}/{total}
						</div>
						<div className="w-full bg-gray-200 rounded-full h-4 mb-6">
							<div
								className={`h-4 rounded-full ${
									percentage >= 70 ? 'bg-green-500' :
										percentage >= 50 ? 'bg-yellow-500' :
											'bg-red-500'
								}`}
								style={{ width: `${percentage}%` }}
							/>
						</div>
						<p className="text-lg mb-6">{resultMessage}</p>
						<div className="flex justify-center gap-4">
							<Link href="/quiz">
								<Button variant="outline">Try Another Quiz</Button>
							</Link>
							<Link href="/">
								<Button>Return Home</Button>
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
