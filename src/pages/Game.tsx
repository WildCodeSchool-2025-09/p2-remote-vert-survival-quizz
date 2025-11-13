import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { roomsData } from "../data/Gamedata";
import "../styles/game.css";
import "../styles/navbar.css";

function Game() {
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentRoom, setCurrentRoom] = useState(1);
	const [gamePhase, setGamePhase] = useState("narration");

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

	const currentNarration = roomsData.find(
		(narration) => narration.number === currentRoom,
	);
	const currentQuestion = questions[currentRoom - 1];

	const buttonContinue = () => {
		if (gamePhase === "narration") setGamePhase("ready");
		else if (gamePhase === "ready") setGamePhase("question");
	};

	const buttonNextRoom = () => {
		if (currentRoom < roomsData.length) {
			setCurrentRoom(currentRoom + 1);
			setGamePhase("narration");
		} else {
			alert("Fin du jeu en construction !");
		}
	};

	const backgroundCurrentRoom = {
		backgroundImage: `url(${currentNarration.background})`,
	};

	return (
		<section className="background-room" style={backgroundCurrentRoom}>
			<nav className="navbar">
				<Navbar roomData={currentNarration} />
			</nav>
			{gamePhase === "narration" && (
				<article className="narration-phase">
					<p className="box-narration">{currentNarration?.narrationText}</p>
					<button
						className="button-next"
						type="button"
						onClick={buttonContinue}
					>
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
					<button
						className="button-next"
						type="button"
						onClick={buttonContinue}
					>
						GO !
					</button>
				</article>
			)}

			{gamePhase === "question" && (
				<article className="narration-question">
					<h1 className="box-question">{currentQuestion.question}</h1>
					<button
						className="button-next"
						type="button"
						onClick={buttonNextRoom}
					>
						Salle suivante
					</button>
				</article>
			)}
		</section>
	);
}

export default Game;
