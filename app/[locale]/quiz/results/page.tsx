import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResultsPage({ searchParams }: {
	searchParams: { score: string; total: string }
}) {
	const score = parseInt(searchParams.score);
	const total = parseInt(searchParams.total);
	const percentage = Math.round((score / total) * 100);
	
	return (
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
						></div>
					</div>
					<p className="text-lg mb-6">
						{percentage >= 70 ? 'Excellent!' :
							percentage >= 50 ? 'Good job!' :
								'Keep practicing!'}
					</p>
					<Link href="/quiz">
						<Button variant="outline" className="mr-4">Try Another Quiz</Button>
					</Link>
					<Link href="/">
						<Button>Return Home</Button>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}
