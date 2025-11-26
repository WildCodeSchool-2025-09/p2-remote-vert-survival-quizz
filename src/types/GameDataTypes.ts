export interface RoomType {
	room: Room;
}

export interface Room {
	name: string;
	number: number;
	difficulty: string;
	mapRoom: string;
	narrationText: string;
	readyText: string;
	success: string;
	failure: string;
}

export interface CharacterType {
	character: Character[];
}

export interface Character {
	id: number;
	name: string;
	image: string;
	logo_alive?: string;
	logo_dead?: string;
	isAlive: boolean;
}

export interface Joker {
	id: number;
	name: string;
	combo: number;
	img_gotten: string;
	img_not_gotten: string;
	text: string;
	gotten: boolean;
	used: boolean;
}

export interface HomeType {
	room: Homepage;
}

export interface Homepage {
	name: string;
	number: number;
	title: string;
	undertitle: string;
	text1: string;
	text2: string;
	text3: string;
}

export interface RoomNarration {
	initial: string;
	ready: string;
	success: string;
	failure: string;
}

export interface HomeNarration {
	title: string;
	undertitle: string;
	text1: string;
	text2: string;
	text3: string;
}

export interface NarrationText {
	text: HomeNarration | RoomNarration;
}
