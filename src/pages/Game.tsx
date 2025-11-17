import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { roomsData } from "../data/GameData";
import "../styles/game.css";
import "../styles/navbar.css";
import type {
	DataType,
	FormatQuestionsType,
	QuestionType,
} from "../types/gameTypes";

function Game() {
	const [questions, setQuestions] = useState<FormatQuestionsType[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentRoom, setCurrentRoom] = useState(1);
	const [gamePhase, setGamePhase] = useState("narration");

	useEffect(() => {
		setLoading(true);

		const apiUrl = import.meta.env.VITE_API_URL;

		const formatQuestions = (apiData: DataType) => {
			return apiData.quizzes.map((question: QuestionType) => {
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

		const fetchByDifficulty = (difficulty: string) => {
			return fetch(`${apiUrl}?difficulty=${difficulty}`)
				.then((response) => response.json())
				.then((apiData) => {
					const formatted = formatQuestions(apiData).filter(
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

	const currentNarration = roomsData.find(
		(narration) => narration.number === currentRoom,
	);

	const currentQuestion = questions[currentRoom - 1];

	const nextPhase = () => {
		if (gamePhase === "narration") setGamePhase("ready");
		else if (gamePhase === "ready") setGamePhase("question");
	};

	const nextRoom = () => {
		if (currentRoom < roomsData.length) {
			setCurrentRoom(currentRoom + 1);
			setGamePhase("narration");
		} else {
			alert("Fin du jeu en construction !");
		}
	};

	if (!currentNarration) return <p>Salle introuvable</p>;

	return (
		<section className={`background-room ${currentNarration.name}`}>
			<nav className="navbar">
				<Navbar roomData={currentNarration} />
			</nav>
			{gamePhase === "narration" && (
				<article className="narration-phase">
					<p className="box-narration">{currentNarration?.narrationText}</p>
					<button className="button-next" type="button" onClick={nextPhase}>
						Suivant
					</button>
				</article>
			)}

			{gamePhase === "ready" && (
				<article className="narration-phase">
					<p className="box-narration">
						ATTENTION DEFENDS TOI !<br />
						{currentNarration?.readyText}
					</p>
					<button className="button-next" type="button" onClick={nextPhase}>
						GO !
					</button>
				</article>
			)}

			{gamePhase === "question" && (
				<article className="narration-question">
					<h1 className="box-question">{currentQuestion.question}</h1>
					<button className="button-next-room" type="button" onClick={nextRoom}>
						Salle suivante
					</button>
				</article>
			)}
		</section>
	);
}

export default Game;
