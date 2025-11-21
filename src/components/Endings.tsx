import { useState } from "react";
import { Link } from "react-router";
import { victoryTexts } from "../data/NarrationData";
import "../styles/endings.css";

function Endings({ endingScreen, score }) {
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
			const newPlayer = { name: inputText, score: score };
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
					<h1>GameOver</h1>
					<p>Score: {score} pts</p>
					<Link to="/">
						<button type="button">Rejouer</button>
					</Link>
				</article>
			)}

			{endingScreen === "victory" && (
				<article className="victory-screen">
					{victoryPhase === "victoryNarration" && (
						<>
							<h1>{victoryTexts.initial}</h1>
							<p>{victoryTexts.succes}</p>
							<button type="button" onClick={nextVictoryPhase}>
								Suivant
							</button>
						</>
					)}

					{victoryPhase === "gamerName" && (
						<>
							<input
								type="text"
								value={inputText}
								placeholder="Ajoute ton psoeudo ici..."
								onChange={(event) => setInputText(event.target.value)}
							/>
							<button
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
							{scoreBoardList.map((player) => (
								<p key={player.id}>
									{player.name}: {player.score} pts
								</p>
							))}
							<Link to="/">
								<button type="button">Rejouer</button>
							</Link>
						</>
					)}
				</article>
			)}
		</section>
	);
}

export default Endings;
