export interface IMessage {
  role: string;
  content: string;
}

export interface IQuiz {
  title: string;
  description: string;
  questions: IQuestion[];
  level:string;
}

export interface IQuestion {
  question: string;
  options: object;
  correct: string;
}

