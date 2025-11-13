// GameData.ts
import type { Character, Homepage, Room } from "../type/GameDataTypes";

// Import background and map
import ballImg from "../assets/img/narration/rooms_backgrounds/ball_room.png";
import hallImg from "../assets/img/narration/rooms_backgrounds/hall.png";
import kitchenImg from "../assets/img/narration/rooms_backgrounds/kitchen.png";
import libraryImg from "../assets/img/narration/rooms_backgrounds/library.png";
import maphall from "../assets/img/navbar/maps/first_floor/room1.png";
import maplibrary from "../assets/img/navbar/maps/first_floor/room2.png";
import mapkitchen from "../assets/img/navbar/maps/first_floor/room3.png";
import mapball from "../assets/img/navbar/maps/first_floor/room4.png";
import homestartImg from "../assets/img/start/backgrounds/main_menu.png";

// Import character images
import emericImg from "../assets/img/narration/characters/emeric.png";
import jugurthaImg from "../assets/img/narration/characters/jugurta.png";
import lisaImg from "../assets/img/narration/characters/lisa.png";
import lunaImg from "../assets/img/narration/characters/luna.png";
import emeric_logo_alive from "../assets/img/navbar/characters/alive/em.png";
import jugurtha_logo_alive from "../assets/img/navbar/characters/alive/jug.png";
import lisa_logo_alive from "../assets/img/navbar/characters/alive/lisa.png";
import luna_logo_alive from "../assets/img/navbar/characters/alive/luna.png";
import emeric_logo_dead from "../assets/img/navbar/characters/dead/em.png";
import jugurtha_logo_dead from "../assets/img/navbar/characters/dead/jug.png";
import lisa_logo_dead from "../assets/img/navbar/characters/dead/lisa.png";
import luna_logo_dead from "../assets/img/navbar/characters/dead/luna.png";

// Import narration texts
import {
	ballTexts,
	hallTexts,
	homeTexts,
	kitchenTexts,
	libraryTexts,
} from "../data/narrationTexts";

export const HomepageData: Homepage[] = [
	{
		name: "HomeStart",
		number: 0,
		roles: ["narration"],
		background: homestartImg,
		title: homeTexts.title,
		undertitle: homeTexts.undertitle,
		text1: homeTexts.text1,
		text2: homeTexts.text2,
		text3: homeTexts.text3,
	},
];

export const roomsData: Room[] = [
	{
		name: "Hall",
		number: 1,
		difficulty: "facile",
		mapRoom: maphall,
		roles: ["game", "narration"],
		background: hallImg,
		narrationText: hallTexts.initial,
		readyText: hallTexts.ready,
	},
	{
		name: "Kitchen",
		number: 2,
		difficulty: "facile",
		mapRoom: mapkitchen,
		roles: ["game", "narration"],
		background: kitchenImg,
		narrationText: kitchenTexts.initial,
		readyText: kitchenTexts.ready,
		success: kitchenTexts.success,
		failure: kitchenTexts.failure,
	},
	{
		name: "Library",
		number: 3,
		difficulty: "facile",
		mapRoom: maplibrary,
		roles: ["game", "narration"],
		background: libraryImg,
		narrationText: libraryTexts.initial,
		readyText: libraryTexts.ready,
		success: libraryTexts.success,
		failure: libraryTexts.failure,
	},
	{
		name: "Ball",
		number: 4,
		difficulty: "facile",
		mapRoom: mapball,
		roles: ["game", "narration"],
		background: ballImg,
		narrationText: ballTexts.initial,
		readyText: ballTexts.ready,
		success: ballTexts.success,
		failure: ballTexts.failure,
	},
];
export const charactersData: Character[] = [
	{
		name: "Emeric",
		image: emericImg,
		logo_alive: emeric_logo_alive,
		logo_dead: emeric_logo_dead,
	},
	{
		name: "Jugurtha",
		image: jugurthaImg,
		logo_alive: jugurtha_logo_alive,
		logo_dead: jugurtha_logo_dead,
	},
	{
		name: "Lisa",
		image: lisaImg,
		logo_alive: lisa_logo_alive,
		logo_dead: lisa_logo_dead,
	},
	{
		name: "Luna",
		image: lunaImg,
		logo_alive: luna_logo_alive,
		logo_dead: luna_logo_dead,
	},
];
