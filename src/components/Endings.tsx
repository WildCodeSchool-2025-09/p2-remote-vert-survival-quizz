import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import medal from "../assets/img/ending/scores/medals/gold.png";
import { useCharacter } from "../contexts/CharacterContext";
import { victoryTexts } from "../data/NarrationData";
import "../styles/endings.css";
import "../styles/success.css";
import "../styles/notification.css";
import { useSuccess } from "../contexts/SuccessContext";
import type { Joker } from "../types/GameDataTypes";
import Notification from "./Notification";
import Success from "./Success";

type EndingScreenType = "gameOver" | "victory" | null;

interface EndingScreenProps {
	endingScreen: EndingScreenType;
	score: number[];
	jokers: Joker[];
	setScore: React.Dispatch<React.SetStateAction<number[]>>;
}

function Endings({ endingScreen, score, jokers, setScore }: EndingScreenProps) {
	const [victoryPhase, setVictoryPhase] = useState("victoryScreen");
	const [inputText, setInputText] = useState<string>("");
	const [scoreBoardList, setScoreBoardList] = useState([
		{ id: 1, name: "NoobDemonSlayer", score: 100, rank: 1 },
		{ id: 2, name: "The clever one", score: 70, rank: 2 },
		{ id: 3, name: "El Jug", score: 50, rank: 3 },
		{ id: 4, name: "AlithyaMoon", score: 45, rank: 4 },
	]);

	const { characters, setCharacters } = useCharacter();
	const { setSuccesses } = useSuccess();

	useEffect(() => {
		if (jokers.every((joker) => !joker.used) && score.length === 12) {
			setSuccesses((prev) =>
				prev.map((success, i) =>
					i === 6 ? { ...success, gotten: true } : success,
				),
			);
		}
	}, [jokers, score, setSuccesses]);

	useEffect(() => {
		if (
			characters.every((character) => character.isAlive) &&
			score.length === 12
		) {
			setSuccesses((prev) =>
				prev.map((success, i) =>
					i === 7 ? { ...success, gotten: true } : success,
				),
			);
		}
	}, [characters, score, setSuccesses]);

	useEffect(() => {
		if (
			score.length === 4 &&
			score.slice(0, 4).every((element) => element === 0)
		) {
			setSuccesses((prev) =>
				prev.map((success, i) =>
					i === 2 ? { ...success, gotten: true } : success,
				),
			);
		}
	}, [score, setSuccesses]);

	const resetGame = () => {
		setCharacters((prev) =>
			prev.map((character) => ({ ...character, isAlive: true })),
		);
		setSuccesses((prev) =>
			prev.map((success) => ({ ...success, gotten: false })),
		);
		setScore([]);
	};

	const nextVictoryPhase = () => {
		if (victoryPhase === "victoryScreen") setVictoryPhase("victoryNarration");
		else if (victoryPhase === "victoryNarration") setVictoryPhase("gamerName");
		else if (victoryPhase === "gamerName") {
			const newPlayer = {
				id: Date.now(),
				name: inputText,
				score:
					score.length === 12 && score.every((number) => number > 0)
						? score.reduce((acc, currentValue) => acc + currentValue, 0) + 50
						: score.reduce((acc, currentValue) => acc + currentValue, 0),
			};

			const updatedScoreBoard = [...scoreBoardList, newPlayer]
				.sort((a, b) => b.score - a.score)
				.map((player, index) => ({ ...player, rank: index + 1 }));
			setScoreBoardList(updatedScoreBoard);
			setVictoryPhase("scoreBoard");
		}
	};

	const createConfetti = useCallback(() => {
		const wrapper = document.querySelector(".confetti-wrapper");
		if (!wrapper) return;

		const confettiPiece = document.createElement("div");
		confettiPiece.classList.add("confetti-piece");

		const colors = [
			"#f2d74e",
			"#4042ecff",
			"#ff9a91",
			"#01945eff",
			"#dcedc1",
			"#d0ff00ff",
		];
		confettiPiece.style.backgroundColor =
			colors[Math.floor(Math.random() * colors.length)];
		confettiPiece.style.left = `${Math.random() * 100}%`;

		const size = Math.random() * 15 + 10;
		confettiPiece.style.width = `${size}px`;
		confettiPiece.style.height = `${size}px`;

		const animationDuration = Math.random() * 6 + 6;
		confettiPiece.style.animationDuration = `${animationDuration}s`;
		confettiPiece.style.animationDelay = `${Math.random() * -3}s`;

		confettiPiece.addEventListener("animationend", () => {
			confettiPiece.remove();
		});

		wrapper.appendChild(confettiPiece);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(createConfetti, 300);
		return () => clearInterval(intervalId);
	}, [createConfetti]);

	return (
		<section>
			{endingScreen === "gameOver" && (
				<article className="gameover-screen">
					<Notification />
					<div className="gameover-box">
						<div className="gameover-success-box">
							<Success />
						</div>
						<h1 className="gameover-title">Game Over</h1>
						<p className="gameover-score">
							Score :{" "}
							{score.reduce((acc, currentValue) => acc + currentValue, 0)} pts
						</p>
						<Link to="/">
							<button
								className="gameover-button"
								type="button"
								onClick={resetGame}
							>
								Rejouer
							</button>
						</Link>
					</div>
				</article>
			)}

			{endingScreen === "victory" && (
				<article className="victory-screen">
					{victoryPhase === "victoryScreen" && (
						<>
							<div className="confetti-wrapper"> </div>
							<div className="victory-screen-box">
								<button
									className="victory-next"
									type="button"
									onClick={nextVictoryPhase}
								>
									Suivant
								</button>
								<h1 className="victory-title">{victoryTexts.initial}</h1>
								<Notification />
								<div className="box-characters-ending">
									{characters
										.filter((character) => character.isAlive)
										.map((character) => (
											<img
												className="character-animation"
												key={character.id}
												src={character.image}
												alt={character.name}
											/>
										))}
								</div>
							</div>
						</>
					)}

					{victoryPhase === "victoryNarration" && (
						<div className="victory-narration-box">
							<p className="victory-narration">{victoryTexts.succes}</p>
							<button
								className="victory-button"
								type="button"
								onClick={nextVictoryPhase}
							>
								Suivant
							</button>
						</div>
					)}

					{victoryPhase === "gamerName" && (
						<div className="game-name-box">
							<div className="victory-input-box">
								<img
									className="victory-input-logo"
									src={medal}
									alt="Logo medal"
								/>
								<input
									className="victory-input"
									type="text"
									value={inputText}
									placeholder="Ajoute ton pseudo ici..."
									onChange={(event) => setInputText(event.target.value)}
								/>
							</div>
							<button
								className="victory-input-button"
								type="button"
								onClick={nextVictoryPhase}
								disabled={!inputText}
							>
								Suivant
							</button>
						</div>
					)}

					{victoryPhase === "scoreBoard" && (
						<div className="score-board-box">
							<div className="gameover-success-box">
								<Success />
							</div>
							<div className="victory-scoreboard">
								<h3 className="victory-title-scoreboard">Classement</h3>
								<div className="victory-scoreboard-box">
									{scoreBoardList.map((player) => (
										<div className="victory-score" key={player.id}>
											<span className={`rank-${player.rank}`}>.</span>
											<span>{player.name}</span>
											<span>{player.score} pts</span>
										</div>
									))}
								</div>
							</div>
							<Link to="/">
								<button
									className="victory-retry"
									type="button"
									onClick={resetGame}
								>
									Rejouer
								</button>
							</Link>
						</div>
					)}
				</article>
			)}
		</section>
	);
}

export default Endings;
