import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { jokersData, roomsData } from "../data/GameData";
import "../styles/game.css";
import "../styles/navbar.css";
import { useCharacter } from "../contexts/CharacterContext";
import type { Joker } from "../types/GameDataTypes";
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
	const [score, setScore] = useState<number[]>([]);
	const [jokers, setJokers] = useState<Joker[]>(jokersData);
	const [selectedJoker, setSelectedJoker] = useState<Joker | null>(null);

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
		if (gamePhase === "narration") {
			if (jokers.some((joker) => joker.gotten)) {
				setGamePhase("chooseJoker");
			} else {
				setGamePhase("ready");
			}
		} else if (gamePhase === "chooseJoker") setGamePhase("ready");
		else if (gamePhase === "ready") setGamePhase("question");
		else if (gamePhase === "question") setGamePhase("answer");
	};

	const nextRoom = () => {
		if (currentRoom < roomsData.length) {
			setCurrentRoom(currentRoom + 1);
			setGamePhase("narration");
			setSelectedAnswer(null);
			setJokers((prev) =>
				prev.map((joker) =>
					selectedJoker && joker.id === selectedJoker.id
						? { ...joker, gotten: false }
						: joker,
				),
			);
			setSelectedJoker(null);
		} else {
			alert("Fin du jeu en construction !");
		}
	};

	const answers = (answer: string) => {
		setSelectedAnswer(answer);

		if (!easyQuestion) return <p>Aucune question facile trouvée</p>;

		if (
			answer ===
			(jokers[1].used && jokers[1].gotten
				? easyQuestion.correct
				: currentQuestion.correct)
		) {
			if (currentQuestion.level === "facile") {
				if (jokers[2].used && jokers[2].gotten) {
					score.push(10);
				} else {
					score.push(5);
				}
			}
			if (currentQuestion.level === "normal") {
				if (jokers[2].used && jokers[2].gotten) {
					score.push(20);
				} else {
					score.push(10);
				}
			}
			if (currentQuestion.level === "difficile") {
				if (jokers[2].used && jokers[2].gotten) {
					score.push(30);
				} else {
					score.push(15);
				}
			}
		} else {
			score.push(0);
			setCharacters((prev) => {
				const characters = prev.filter((character) => character.isAlive);
				if (characters.length === 0) return prev;
				const lastCharacter = characters[characters.length - 1].id;

				return prev.map((character) =>
					character.id === lastCharacter &&
					!(jokers[0].used && jokers[0].gotten)
						? { ...character, isAlive: false }
						: character,
				);
			});
		}

		setScore(score);

		const goodAnswerCombo: number[] = [];
		let currentGoodAnswerCombo = 0;

		for (let i = 0; i < score.length; i++) {
			const pts = score[i];
			if (pts > 0) {
				currentGoodAnswerCombo++;
			} else if (currentGoodAnswerCombo > 0) {
				goodAnswerCombo.push(currentGoodAnswerCombo);
				currentGoodAnswerCombo = 0;
			}
		}

		if (currentGoodAnswerCombo > 0)
			goodAnswerCombo.push(currentGoodAnswerCombo);

		const unlockableCombos = [2, 4, 6, 8];
		const combosWon: number[] = [];

		for (let i = 0; i < goodAnswerCombo.length; i++) {
			const currentComboLength = goodAnswerCombo[i];
			for (let j = 0; j < unlockableCombos.length; j++) {
				const requiredCombo = unlockableCombos[j];
				if (currentComboLength >= requiredCombo) {
					combosWon.push(requiredCombo);
				}
			}
		}

		setJokers((prev) =>
			prev.map((joker) =>
				combosWon.includes(joker.combo) && !joker.used
					? { ...joker, gotten: true }
					: joker,
			),
		);

		setTimeout(() => {
			setGamePhase("answer");
		}, 1000);
	};

	const validationUseJoker = () => {
		if (!selectedJoker) return;
		setGamePhase("ready");
		setJokers((prev) =>
			prev.map((joker) =>
				joker.id === selectedJoker.id ? { ...joker, used: true } : joker,
			),
		);
	};

	const easyQuestion = questions.find(
		(question) => question.level === "facile",
	);

	if (!currentNarration) return <p>Salle introuvable</p>;
	if (!easyQuestion) return <p>Aucune question facile trouvée</p>;

	return (
		<section className={`background-room ${currentNarration.name}`}>
			<nav className="navbar">
				<Navbar
					roomData={currentNarration}
					score={score}
					selectedJoker={selectedJoker}
				/>
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
						<p className="box-narration">{currentNarration?.narrationText}</p>
						<button className="button-next" type="button" onClick={nextPhase}>
							Suivant
						</button>
					</article>
				)}

				{gamePhase === "chooseJoker" && (
					<article className="narration-phase">
						<div className="box-narration joker">
							<p>
								Est-ce que tu veux utiliser un joker ?<br />
								(Clique sur un joker pour pouvoir l’utiliser !)
							</p>
							<div className="jokers-box">
								{jokers.map((joker) => (
									<>
										<button
											className="button-joker"
											key={joker.id}
											type="button"
											onClick={() => {
												setGamePhase("jokerValidation");
												setSelectedJoker(joker);
											}}
											disabled={!joker.gotten || (joker.gotten && joker.used)}
										>
											<img
												src={
													joker.gotten && !joker.used
														? joker.img_gotten
														: joker.img_not_gotten
												}
												alt={joker.name}
												className="image-joker"
											/>
										</button>
										<div key={joker.id} className="info-wrapper">
											<p
												key={joker.id}
												className="infobulle"
												data-joker-id={joker.id}
											>
												{" "}
												i{" "}
											</p>
											<p className="info-text"> {joker.text}</p>
										</div>
									</>
								))}
							</div>
						</div>
						<button className="button-next" type="button" onClick={nextPhase}>
							Passer
						</button>
					</article>
				)}

				{gamePhase === "jokerValidation" && (
					<article className="narration-phase">
						<p className="box-narration box-selected-joker joker">
							Es-tu sûr de vouloir utiliser ce joker ?
							{selectedJoker && (
								<img
									className="selected-joker"
									src={selectedJoker.img_gotten}
									alt={selectedJoker.name}
								/>
							)}
						</p>
						<div className="box-oui-non">
							<button
								type="button"
								className="yes"
								onClick={validationUseJoker}
							>
								OUI
							</button>
							<button
								type="button"
								className="no"
								onClick={() => {
									setGamePhase("chooseJoker");
									setSelectedJoker(null);
								}}
							>
								NON
							</button>
						</div>
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
						<h1 className="box-question">
							{jokers[1].used && jokers[1].gotten
								? easyQuestion.question
								: currentQuestion.question}
						</h1>
						<div className="box-answers">
							{(jokers[1].used && jokers[1].gotten
								? easyQuestion.answers
								: currentQuestion.answers
							).map((answer) => (
								<button
									className={`button-answers ${
										selectedAnswer === null
											? "answer-default"
											: answer ===
													(jokers[1].used && jokers[1].gotten
														? easyQuestion.correct
														: currentQuestion.correct)
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
							{selectedAnswer ===
							(jokers[1].used && jokers[1].gotten
								? easyQuestion.correct
								: currentQuestion.correct)
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
	);
}

export default Game;
