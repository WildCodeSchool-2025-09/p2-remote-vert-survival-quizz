export interface DataType {
	quizzes: QuestionType[];
}

export interface QuestionType {
	question: string;
	answer: string;
	badAnswers: string[];
	difficulty: string;
}

export interface FormatQuestions {
	question: string;
	correct: string;
	answers: string[];
	level: string;
}
