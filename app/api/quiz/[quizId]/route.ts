import { getOneQuiz } from '@/actions/quizAction'
import { NextResponse } from 'next/server';

export async function GET(
	request: Request,
	{ params }: { params: { quizId: string } }
) {
	try {
		const quiz = await getOneQuiz(params.quizId);
		if (!quiz) {
			return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
		}
		return NextResponse.json(quiz);
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ error: 'Failed to fetch quiz' },
			{ status: 500 }
		);
	}
}
