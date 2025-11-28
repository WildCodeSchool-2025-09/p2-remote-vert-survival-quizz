import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { successesData } from "../data/GameData";
import type { SuccessesData } from "../types/GameDataTypes";

type SuccessContextType = {
	successes: SuccessesData[];
	setSuccesses: React.Dispatch<React.SetStateAction<SuccessesData[]>>;
	notifications: Notifications[];
	setNotifications: React.Dispatch<React.SetStateAction<Notifications[]>>;
};

interface Notifications {
	id: number;
	img: string;
	text: string;
	name: string;
}

const SuccessContext = createContext<SuccessContextType>({
	successes: [],
	setSuccesses: () => {},
	notifications: [],
	setNotifications: () => {},
});

export function SuccessProvider({ children }: { children: ReactNode }) {
	const [successes, setSuccesses] = useState(successesData);
	const [notifications, setNotifications] = useState<Notifications[]>([]);

	useEffect(() => {
		successes.forEach((success, i) => {
			const id = Date.now();

			if (success.gotten && !success.notified) {
				setNotifications((prev) => [
					...prev,
					{
						id,
						img: success.img_gotten,
						text: success.text,
						name: success.name,
					},
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
