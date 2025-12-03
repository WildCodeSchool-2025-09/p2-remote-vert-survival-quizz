import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../styles/Home.css";
import text3Sound from "../assets/sounds/Grincement de porte.mp3";
import RainEffect from "../components/RainEffect";
import { useAudio } from "../contexts/AudioContext";
import { useSuccess } from "../contexts/SuccessContext";
import { homeTexts } from "../data/NarrationData";

function Home() {
	const { muted, toggleMute, volume, setVolume } = useAudio();

	const [showIntro, setShowIntro] = useState(true);
	const [homeNarration, setHomeNarration] = useState(homeTexts.text1);
	const [showNarration, setShowNarration] = useState(false);
	const [readyToPlay, setReadyToPlay] = useState(false);

	useEffect(() => {
		if (homeNarration === homeTexts.text3) {
			const audio = new Audio(text3Sound);
			audio.play().catch(() => {});
		}
	}, [homeNarration]);

	const nextNarration = () => {
		if (homeNarration === homeTexts.text1) {
			setHomeNarration(homeTexts.text2);
			return;
		}

		if (homeNarration === homeTexts.text2) {
			setHomeNarration(homeTexts.text3);
			setReadyToPlay(true);
			return;
		}
	};

	const { setSuccesses } = useSuccess();

	const successGotten = () => {
		setSuccesses((prev) =>
			prev.map((success, i) =>
				i === 0 ? { ...success, gotten: true } : success,
			),
		);
	};

	return (
		<main
			className={`home-main ${
				homeNarration === homeTexts.text3 ? "phase3" : ""
			}`}
		>
			<RainEffect />

			<div className="box-audio">
				<button type="button" className="mute-btn" onClick={toggleMute}>
					{muted ? "🔇" : "🔊"}
				</button>
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={volume}
					onChange={(e) => setVolume(Number(e.target.value))}
					className="volume-slider"
				/>
			</div>

			<div className="homepage-main-content">
				{showIntro && (
					<>
						<h1>React Evil</h1>
						<p>
							Entre dans l'univers de ce survival Quiz. Arriveras-tu à sortir en
							un seul morceau de ce manoir ?
						</p>

						<button
							type="button"
							className="start-home-button"
							onClick={() => {
								setShowIntro(false);
								setShowNarration(true);
							}}
						>
							Start
						</button>
					</>
				)}

				{showNarration && !showIntro && (
					<div className="narration-home-box">
						<p
							className={`narration-text-home ${
								homeNarration === homeTexts.text3 ? "main-text3" : ""
							}`}
						>
							{homeNarration}
						</p>

						{homeNarration !== homeTexts.text3 && (
							<button
								type="button"
								className="next-narration-home"
								onClick={nextNarration}
							>
								Suivant
							</button>
						)}
					</div>
				)}

				{readyToPlay && (
					<Link to="/game">
						<button
							type="button"
							className="enter-button"
							onClick={successGotten}
						>
							Entrer
						</button>
					</Link>
				)}
			</div>
		</main>
	);
}

export default Home;
