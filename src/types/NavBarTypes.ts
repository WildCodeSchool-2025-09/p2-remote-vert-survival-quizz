import type { Character, Room } from "./GameDataTypes";

export interface navBarType {
	roomData: Room;
	charactersAlive: Character[];
	score: number;
}
