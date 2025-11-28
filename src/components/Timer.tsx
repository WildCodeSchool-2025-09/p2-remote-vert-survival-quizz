import { useEffect, useState } from "react";
import "../styles/Timer.css";
import heartsound from "../assets/sound/coeur_battant_progressif.wav";
import type { Joker } from "../types/GameDataTypes";

const timebar = Array.from({ length: 15 }, (_, i) => i);
const timebarJoker = Array.from({ length: 25 }, (_, i) => i);

interface TimerProps {
	onTimeUp: () => void;
	toggleSound: () => void;
	soundEnabled: boolean;
	jokers: Joker[];
	selectedAnswer: string | null;
}

function Timer({
	onTimeUp,
	toggleSound,
	soundEnabled,
	jokers,
	selectedAnswer,
}: TimerProps) {
	const [player] = useState(new Audio(heartsound));
	const [time, setTime] = useState(15);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((currentTime) => {
				if (currentTime > 0) {
					return currentTime - 1;
				}
				return 0;
			});
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (jokers[3].used && jokers[3].gotten) {
			setTime((time) => time + 10);
		}
	}, [jokers[3].used, jokers[3].gotten]);

	useEffect(() => {
		if (time === 0) {
			player.pause();
			player.currentTime = 0;
			onTimeUp();
		} else if (!soundEnabled || selectedAnswer !== null) {
			player.pause();
		} else if (time === 5 && soundEnabled) player.play();
	}, [time, onTimeUp, soundEnabled, player, selectedAnswer]);

	return (
		<div className="timer-container">
			<button
				type="button"
				className="button-sound-heart"
				onClick={() => toggleSound()}
			>
				{soundEnabled ? "🔊" : "🔇"}
			</button>

			{jokers[3].used && jokers[3].gotten
				? timebarJoker.map((bar) => {
						const classTimebar = bar < time ? "timebar" : "timebar-red";
						return (
							<div key={bar} className={classTimebar}>
								{" "}
							</div>
						);
					})
				: timebar.map((bar) => {
						const classTimebar = bar < time ? "timebar" : "timebar-red";
						return (
							<div key={bar} className={classTimebar}>
								{" "}
							</div>
						);
					})}
		</div>
	);
}

export default Timer;
