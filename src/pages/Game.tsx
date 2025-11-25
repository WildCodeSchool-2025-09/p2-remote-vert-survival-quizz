import { useEffect, useState } from "react";
import Endings from "../components/Endings";
import Navbar from "../components/Navbar";
import { roomsData } from "../data/Gamedata";
import "../styles/game.css";
import "../styles/navbar.css";
import { useCharacter } from "../contexts/CharacterContext";
import type {
	DataType,
	FormatQuestionsType,
	QuestionType,
} from "../types/GameTypes";

function Game() {
	const [questions, setQuestions] = useState<FormatQuestionsType[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentRoom, setCurrentRoom] = useState(1);
	const [gamePhase, setGamePhase] = useState("narration");
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [score, setScore] = useState(0);
	const [endingScreen, setEndingScreen] = useState<
		"gameOver" | "victory" | null
	>(null);

	const { characters, setCharacters } = useCharacter();

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
		else if (gamePhase === "question") setGamePhase("answer");
	};

	const nextRoom = () => {
		if (currentRoom < roomsData.length) {
			setCurrentRoom(currentRoom + 1);
			setGamePhase("narration");
			setSelectedAnswer(null);
		} else {
			setGamePhase("ending");
			setEndingScreen("victory");
		}
	};

	const answers = (answer: string) => {
		setSelectedAnswer(answer);

		if (answer === currentQuestion.correct) {
			if (currentQuestion.level === "facile") {
				setScore(score + 5);
			}
			if (currentQuestion.level === "normal") {
				setScore(score + 10);
			}
			if (currentQuestion.level === "difficile") {
				setScore(score + 15);
			}
			setTimeout(() => {
				setGamePhase("answer");
			}, 1500);
		} else {
			setCharacters((prev) => {
				const characterAlive = prev.filter((character) => character.isAlive);
				if (characterAlive.length === 0) return prev;

				const lastCharacter = characterAlive[characterAlive.length - 1].id;

				const updatedCharStatut = prev.map((character) =>
					character.id === lastCharacter
						? { ...character, isAlive: false }
						: character,
				);

				const allCharactersDead = updatedCharStatut.every(
					(character) => !character.isAlive,
				);

				setTimeout(() => {
					if (allCharactersDead) {
						setGamePhase("ending");
						setEndingScreen("gameOver");
					} else {
						setGamePhase("answer");
					}
				}, 1500);

				return updatedCharStatut;
			});
		}
	};

	if (!currentNarration) return <p>Salle introuvable</p>;

	return (
		<>
			{gamePhase === "ending" ? (
				<Endings endingScreen={endingScreen} score={score} />
			) : (
				<section className={`background-room ${currentNarration.name}`}>
					<nav className="navbar">
						<Navbar roomData={currentNarration} score={score} />
					</nav>

					<div className="game-screen">
						<div className="box-characters">
							{characters
								.filter((character) => character.isAlive)
								.map((character) => (
									<img
										className="character"
										key={character.id}
										src={character.image}
										alt={character.name}
									/>
								))}
						</div>

						{gamePhase === "narration" && (
							<article className="narration-phase">
								<p className="box-narration">
									{currentNarration?.narrationText}
								</p>
								<button
									className="button-next"
									type="button"
									onClick={nextPhase}
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
									onClick={nextPhase}
								>
									GO !
								</button>
							</article>
						)}

						{gamePhase === "question" && (
							<article className="narration-question">
								<h1 className="box-question">{currentQuestion.question}</h1>
								<div className="box-answers">
									{currentQuestion.answers.map((answer) => (
										<button
											className={`button-answers ${
												selectedAnswer === null
													? "answer-default"
													: answer === currentQuestion.correct
														? "correct-answer"
														: "wrong-answer"
											}`}
											type="button"
											key={answer}
											onClick={() => answers(answer)}
											disabled={selectedAnswer !== null}
										>
											{answer}
										</button>
									))}
								</div>
							</article>
						)}

						{gamePhase === "answer" && (
							<article className="narration-phase">
								<p className="box-narration">
									{selectedAnswer === currentQuestion.correct
										? currentNarration.success
										: currentNarration.failure}
								</p>
								<button
									className="button-next-room"
									type="button"
									onClick={nextRoom}
								>
									Salle suivante
								</button>
							</article>
						)}
					</div>
				</section>
			)}
		</>
	);
}

export default Game;
