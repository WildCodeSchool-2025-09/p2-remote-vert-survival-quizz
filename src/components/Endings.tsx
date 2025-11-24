import { useState } from "react";
import { Link } from "react-router";
import { victoryTexts } from "../data/NarrationData";
import "../styles/endings.css";

type EndingScreenType = "gameOver" | "victory";

interface EndingScreenProps {
	endingScreen: EndingScreenType;
	score: number;
}

function Endings({ endingScreen, score }: EndingScreenProps) {
	const [victoryPhase, setVictoryPhase] = useState("victoryNarration");
	const [currentScore, setCurrentScore] = useState(0);
	const [inputText, setInputText] = useState<string>("");
	const [scoreBoardList, setScoreBoardList] = useState([
		{ id: 1, name: "NoobDemonSlayer", score: 60 },
		{ id: 2, name: "The clever one", score: 55 },
		{ id: 3, name: "El Jug", score: 50 },
		{ id: 4, name: "AlithyaMoon", score: 45 },
	]);
	const nextVictoryPhase = () => {
		if (victoryPhase === "victoryNarration") setVictoryPhase("gamerName");
		else if (victoryPhase === "gamerName") {
			const newPlayer = { id: Date.now(), name: inputText, score: score };
			const updatedScoreBoard = [...scoreBoardList, newPlayer].sort(
				(a, b) => b.score - a.score,
			);
			setScoreBoardList(updatedScoreBoard);
			setVictoryPhase("scoreBoard");
		} else if (victoryPhase === "scoreBoard") {
			if (currentScore < scoreBoardList.length - 1) {
				setCurrentScore(currentScore + 1);
			}
		}
	};

	return (
		<section>
			{endingScreen === "gameOver" && (
				<article className="gameover-screen">
					<h1 className="gameover-title">Game Over</h1>
					<p className="gameover-score">Score : {score} pts</p>
					<Link to="/">
						<button className="gameover-button" type="button">
							Rejouer
						</button>
					</Link>
				</article>
			)}

			{endingScreen === "victory" && (
				<article className="victory-screen">
					{victoryPhase === "victoryNarration" && (
						<>
							<h1 className="victory-title">{victoryTexts.initial}</h1>
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
						<>
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
						</>
					)}

					{victoryPhase === "scoreBoard" && (
						<>
							<div className="victory-scoreboard">
								<h3 className="victory-title-scoreboard">Classement</h3>
								<div className="victory-scoreboard-box">
									{scoreBoardList.map((player) => (
										<div className="victory-names-scores" key={player.id}>
											<span>{player.name}: </span>
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
