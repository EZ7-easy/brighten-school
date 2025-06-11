import { Schema, model, models } from 'mongoose';

const QuestionSchema = new Schema({
	question: { type: String, required: true },
	options: { type: [String], required: true, validate: [arrayLimit, '{PATH} must have exactly 4 items'] },
	correct: { type: String, required: true, enum: ['A', 'B', 'C', 'D'] }
});

function arrayLimit(val: string[]) {
	return val.length === 4;
}

const QuizSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		level: { type: String, required: true, enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
		questions: { type: [QuestionSchema], required: true }
	},
	{ timestamps: true }
);

export default models.Quiz || model('Quiz', QuizSchema);
