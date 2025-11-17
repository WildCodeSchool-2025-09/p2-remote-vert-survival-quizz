export interface DataType {
	quizzes: QuestionType[];
}

export interface QuestionType {
	question: string;
	answer: string;
	badAnswers: string[];
	difficulty: string;
}

export interface FormatQuestionsType {
	question: string;
	correct: string;
	answers: string[];
	level: string;
}
