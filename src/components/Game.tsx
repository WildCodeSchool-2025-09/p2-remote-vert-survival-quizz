import { useEffect, useState } from "react";

function Game() {
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		fetch(import.meta.env.VITE_API_URL)
			.then((response) => response.json())
			.then((data) => {
				const formatted = data.quizzes.map((question) => {
					const goodAnswer = question.answer;
					const badAnswers = question.badAnswers;
					const allAnswers = [goodAnswer, ...badAnswers];
					const shuffled = allAnswers.sort(() => Math.random() - 0.5);

					return {
						question: question.question,
						correct: goodAnswer,
						answers: shuffled,
					};
				});
				setQuestions(formatted);
			})
			.catch((error) => {
				console.error("Erreur API :", error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Chargement…</p>;

	return (
		<>
			{questions.map((question) => (
				<div key={question.id}>
					<h2>{question.question}</h2>
				</div>
			))}
		</>
	);
}

export default Game;
