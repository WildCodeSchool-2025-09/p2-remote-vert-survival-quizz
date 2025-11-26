import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { charactersData } from "../data/GameData";
import type { Character } from "../types/GameDataTypes";

type CharacterContextType = {
	characters: Character[];
	setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
};

const CharacterContext = createContext<CharacterContextType>({
	characters: [],
	setCharacters: () => {},
});

export function CharacterProvider({ children }: { children: ReactNode }) {
	const [characters, setCharacters] = useState<Character[]>(charactersData);

	return (
		<CharacterContext.Provider value={{ characters, setCharacters }}>
			{children}
		</CharacterContext.Provider>
	);
}

export const useCharacter = () => {
	return useContext(CharacterContext);
};
