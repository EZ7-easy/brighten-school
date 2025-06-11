'use server'
import type { IQuiz } from '@/app.types'
import Quiz from '@/database/quiz.model'
import { connectToDatabase } from '@/lib/mongoose'

export const createQuiz = async (data:IQuiz,)=>{
	try {
		await connectToDatabase()
		await Quiz.create({...data})
	}catch (error) {
		throw new Error('Failed to create quiz')
	}
}

export const getQuiz = async ()=>  {
	try {
		await connectToDatabase()
		return await Quiz.find()
	} catch (error) {
		throw new Error('Failed to fetch quiz')
	}
}

export const getOneQuiz = async (id: string) => {
	try {
		await connectToDatabase()
		const quiz = await Quiz.findById(id)
		return JSON.parse(JSON.stringify(quiz))
	} catch (error) {
		throw new Error('Failed to fetch quiz')
	}
}
