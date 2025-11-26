import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import medal from "../assets/img/ending/scores/medals/gold.png";
import { useCharacter } from "../contexts/CharacterContext";
import { victoryTexts } from "../data/NarrationData";
import "../styles/endings.css";

type EndingScreenType = "gameOver" | "victory" | null;

interface EndingScreenProps {
	endingScreen: EndingScreenType;
	score: number[];
}

function Endings({ endingScreen, score }: EndingScreenProps) {
	const [victoryPhase, setVictoryPhase] = useState("victoryScreen");
	const [inputText, setInputText] = useState<string>("");
	const [scoreBoardList, setScoreBoardList] = useState([
		{ id: 1, name: "NoobDemonSlayer", score: 100, rank: 1 },
		{ id: 2, name: "The clever one", score: 70, rank: 2 },
		{ id: 3, name: "El Jug", score: 50, rank: 3 },
		{ id: 4, name: "AlithyaMoon", score: 45, rank: 4 },
	]);

	const { characters } = useCharacter();

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
					<h1 className="gameover-title">Game Over</h1>
					<p className="gameover-score">
						Score : {score.reduce((acc, currentValue) => acc + currentValue, 0)}{" "}
						pts
					</p>
					<Link to="/">
						<button className="gameover-button" type="button">
							Rejouer
						</button>
					</Link>
				</article>
			)}

			{endingScreen === "victory" && (
				<article className="victory-screen">
					{victoryPhase === "victoryScreen" && (
						<>
							<div className="confetti-wrapper"> </div>
							<h1 className="victory-title">{victoryTexts.initial}</h1>
							<button
								className="victory-next"
								type="button"
								onClick={nextVictoryPhase}
							>
								Suivant
							</button>
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
						</>
					)}

					{victoryPhase === "victoryNarration" && (
						<>
							<p className="victory-narration">{victoryTexts.succes}</p>
							<button
								className="victory-button"
								type="button"
								onClick={nextVictoryPhase}
							>
								Suivant
							</button>
						</>
					)}

					{victoryPhase === "gamerName" && (
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
						<>
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
								<button className="victory-retry" type="button">
									Rejouer
								</button>
							</Link>
						</>
					)}
				</article>
			)}
		</section>
	);
}

export default Endings;
