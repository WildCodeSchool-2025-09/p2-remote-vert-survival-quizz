/*import { useEffect, useState } from "react";
import normalImage from "../assets/img/start/backgrounds/main_menu.png";
import flashImage from "../assets/img/start/backgrounds/main_menu_flash.png";
import blurImage from "../assets/img/start/backgrounds/main-menu-blur.png";
import "../styles/Home.css";

const ThunderEffect = () => {
	const [stage, setStage] = useState<"normal" | "flash" | "blur">("normal");
	const [flashVisible, setFlashVisible] = useState(false);

	useEffect(() => {
		const triggerThunder = () => {
			setFlashVisible(true);
			setTimeout(() => setFlashVisible(false), 200);

			// Enchaînement visuel
			setTimeout(() => setStage("flash"), 200);
			setTimeout(() => setStage("blur"), 400);
			setTimeout(() => setStage("normal"), 800);
		};

		const interval = setInterval(() => {
			if (Math.random() < 0.3) triggerThunder();
		}, 3500);

		return () => clearInterval(interval);
	}, []);

	const getImage = () => {
		switch (stage) {
			case "flash":
				return flashImage;
			case "blur":
				return blurImage;
			default:
				return normalImage;
		}
	};

	return (
		<div className="thunder-wrapper">
			<img src={getImage()} alt="background" className="thunder-image" />
			{flashVisible && <div className="flash-overlay" />}
		</div>
	);
};

export default ThunderEffect;*/
