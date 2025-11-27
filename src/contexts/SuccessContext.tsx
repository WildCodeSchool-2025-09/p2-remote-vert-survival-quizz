import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { successesData } from "../data/GameData";

const SuccessContext = createContext({
	successes: [],
	setSuccesses: () => {},
	notifications: [],
	setNotifications: () => {},
});

export function SuccessProvider({ children }: { children: ReactNode }) {
	const [successes, setSuccesses] = useState(successesData);
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		successes.forEach((success, i) => {
			const id = Date.now();

			if (success.gotten && !success.notified) {
				setNotifications((prev) => [
					...prev,
					{ id, img: success.img_gotten, text: success.text },
				]);
				setSuccesses((prev) => {
					const updatedSuccesses = [...prev];
					updatedSuccesses[i] = { ...success, notified: true };
					return updatedSuccesses;
				});
				setTimeout(() => {
					setNotifications((prev) =>
						prev.filter((notification) => notification.id !== id),
					);
				}, 4000);
			}
		});
	}, [successes]);

	return (
		<SuccessContext.Provider
			value={{ successes, setSuccesses, notifications, setNotifications }}
		>
			{children}
		</SuccessContext.Provider>
	);
}

export const useSuccess = () => {
	return useContext(SuccessContext);
};
