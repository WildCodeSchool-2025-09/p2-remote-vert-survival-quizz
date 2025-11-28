import { useEffect, useRef } from "react";
import "../styles/Home.css";

const RainEffect = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const createRaindrop = () => {
			const drop = document.createElement("div");
			drop.className = "raindrop";

			drop.style.left = `${Math.random() * 100}vw`;

			drop.style.animationDuration = `${1 + Math.random() * 2}s`;

			drop.style.height = `${10 + Math.random() * 30}px`;

			drop.style.setProperty("--drift", `${Math.random() * 40 - 20}px`);

			container.appendChild(drop);

			drop.addEventListener("animationend", () => drop.remove());
		};

		const interval = setInterval(createRaindrop, 50);

		return () => {
			clearInterval(interval);
			container.innerHTML = "";
		};
	}, []);

	return <div ref={containerRef} className="rain-container" />;
};

export default RainEffect;
