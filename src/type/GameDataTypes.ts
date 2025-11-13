export type RoomRole = "game" | "narration";

export interface Room {
	name: string;
	number: number;
	difficulty: string;
	mapRoom: string;
	roles: RoomRole[];
	background: string;
	narrationText: string;
	readyText: string;
}

export type Character = {
	name: string;
	image: string;
	logo_alive?: string;
	logo_dead?: string;
};

export interface Homepage {
	name: string;
	number: number;
	roles: RoomRole[];
	background: string;
}

export interface RoomNarration {
	initial: string;
	ready: string;
	success?: string;
	failure?: string;
}
export interface HomeNarration {
	title: string;
	undertitle: string;
	text1: string;
	text2: string;
	text3: string;
}
export type NarrationText = HomeNarration | RoomNarration;
