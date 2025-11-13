import { useEffect, useState } from "react";

function Game() {
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		setLoading(true);

		const apiUrl = import.meta.env.VITE_API_URL;
		const formatQuestions = (data) => {
			return data.quizzes.map((question) => {
				const goodAnswer = question.answer;
				const badAnswers = question.badAnswers;
				const allAnswers = [goodAnswer, ...badAnswers].sort(
					() => Math.random() - 0.5,
				);

				return {
					question: question.question,
					correct: goodAnswer,
					answers: allAnswers,
					level: question.difficulty,
				};
			});
		};

		const fetchByDifficulty = (difficulty) => {
			return fetch(`${apiUrl}?difficulty=${difficulty}`)
				.then((response) => response.json())
				.then((data) => {
					const formatted = formatQuestions(data).filter(
						(question) => question.level === difficulty,
					);
					return formatted.slice(0, 4);
				});
		};

		Promise.all([
			fetchByDifficulty("facile"),
			fetchByDifficulty("normal"),
			fetchByDifficulty("difficile"),
		])
			.then(([facile, normal, difficile]) => {
				const combined = [...facile, ...normal, ...difficile];
				setQuestions(combined);
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
			<h2>{questions[current].question}</h2>
			<button type="button" onClick={() => setCurrent(current + 1)}>
				suivant
			</button>
		</>
	);
}

export default Game;
