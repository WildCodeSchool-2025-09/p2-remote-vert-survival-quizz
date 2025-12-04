import { useEffect, useState } from "react";
import { Link } from "react-router";
import text3Sound from "../assets/sounds/Grincement de porte.mp3";
import RainEffect from "../components/RainEffect";
import { useAudio } from "../contexts/AudioContext";
import { useSuccess } from "../contexts/SuccessContext";
import { homeTexts } from "../data/NarrationData";
import styles from "../styles/Home.module.css";

function Home() {
	const { muted, setMuted, toggleMute, volume, setVolume } = useAudio();

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
		}

		if (homeNarration === homeTexts.text2) {
			setHomeNarration(homeTexts.text3);
			setReadyToPlay(true);
		}
	};

	const { setSuccesses } = useSuccess();

	const successGotten = () => {
		setSuccesses((prev) =>
			prev.map((success, i) =>
				i === 0 ? { ...success, gotten: true } : success,
			),
		);
		setMuted(true);
	};

	return (
		<main
			className={`${styles["home-main"]} ${
				homeNarration === homeTexts.text3 ? styles.phase3 : ""
			}`}
		>
			<RainEffect />

			<div className={styles["box-audio"]}>
				<button
					type="button"
					className={styles["mute-btn"]}
					onClick={toggleMute}
				>
					{muted ? "🔇" : "🔊"}
				</button>
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={volume}
					onChange={(e) => setVolume(Number(e.target.value))}
					className={styles["volume-slider"]}
				/>
			</div>

			{/* Notation crochets obligatoire à cause des tirets */}
			<div className={styles["homepage-main-content"]}>
				{showIntro && (
					<>
						<h1 className={styles["homepage-main-content-h1"]}>React Evil</h1>
						<p>
							Entre dans l'univers de ce survival Quiz. Arriveras-tu à sortir en
							un seul morceau de ce manoir ?
						</p>

						<button
							type="button"
							className={styles["start-home-button"]}
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
					<div className={styles["narration-home-box"]}>
						<p
							className={`${styles["narration-text-home"]} ${
								homeNarration === homeTexts.text3 ? styles["main-text3"] : ""
							}`}
						>
							{homeNarration}
						</p>

						{homeNarration !== homeTexts.text3 && (
							<button
								type="button"
								className={styles["next-narration-home"]}
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
							className={styles["enter-button"]}
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
