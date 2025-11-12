import { useState } from "react";

function Quiz() {
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);

	fetch(import.meta.env.VITE_API_URL, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			const formatted = data.data.map((question) => {
				const answers = question.answers.map((answer) => answer.title);
				const correctAnswer = question.answers.find(
					(answer) => answer.isValid,
				).title;
				const shuffled = [...answers].sort(() => Math.random() - 0.5);
				return {
					question: question.title,
					correct: correctAnswer,
					answers: shuffled,
				};
			});
			setQuestions(formatted);
			setLoading(false);
		});
}

export default Quiz;
