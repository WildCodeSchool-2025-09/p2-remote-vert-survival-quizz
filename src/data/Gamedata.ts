// GameData.ts
import type { Character, Homepage, Room } from "../type/gameDataTypes";

// Import background and map
import ball_background from "../assets/img/narration/rooms_backgrounds/ball_room.png";
import cellar_background from "../assets/img/narration/rooms_backgrounds/cellar.png";
import cuve_background from "../assets/img/narration/rooms_backgrounds/cuve_laboratory.png";
import entrancelab_background from "../assets/img/narration/rooms_backgrounds/entrancelab.png";
import hall_background from "../assets/img/narration/rooms_backgrounds/hall.png";
import kitchen_background from "../assets/img/narration/rooms_backgrounds/kitchen.png";
import library_background from "../assets/img/narration/rooms_backgrounds/library.png";
import office_background from "../assets/img/narration/rooms_backgrounds/office_laboratory.png";
import pantry_background from "../assets/img/narration/rooms_backgrounds/pantry.png";
import storage_background from "../assets/img/narration/rooms_backgrounds/storage_room.png";
import surgery_background from "../assets/img/narration/rooms_backgrounds/surgery_laboratory.png";
import morgue_background from "../assets/img/narration/rooms_backgrounds/the_morgue.png";
import cellar_map from "../assets/img/navbar/maps/basement/room1.png";
import pantry_map from "../assets/img/navbar/maps/basement/room2.png";
import storage_map from "../assets/img/navbar/maps/basement/room3.png";
import morgue_map from "../assets/img/navbar/maps/basement/room4.png";
import hall_map from "../assets/img/navbar/maps/first_floor/room1.png";
import library_map from "../assets/img/navbar/maps/first_floor/room2.png";
import kitchen_map from "../assets/img/navbar/maps/first_floor/room3.png";
import ball_map from "../assets/img/navbar/maps/first_floor/room4.png";
import entrancelab_map from "../assets/img/navbar/maps/laboratory/room1.png";
import office_map from "../assets/img/navbar/maps/laboratory/room2.png";
import surgery_map from "../assets/img/navbar/maps/laboratory/room3.png";
import cuve_map from "../assets/img/navbar/maps/laboratory/room4.png";
import home_background from "../assets/img/start/backgrounds/main_menu.png";

// Import character images
import emeric from "../assets/img/narration/characters/emeric.png";
import jugurtha from "../assets/img/narration/characters/jugurta.png";
import lisa from "../assets/img/narration/characters/lisa.png";
import luna from "../assets/img/narration/characters/luna.png";
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
	cellarTexts,
	cuveLaboratoryTexts,
	entrancelabTexts,
	hallTexts,
	homeTexts,
	kitchenTexts,
	libraryTexts,
	morgueTexts,
	officeLaboratoryTexts,
	pantryTexts,
	storage_roomTexts,
	surgeryLaboratoryTexts,
} from "../data/narrationTexts";

export const HomepageData: Homepage[] = [
	{
		name: "HomeStart",
		number: 0,
		roles: ["narration"],
		background: home_background,
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
		mapRoom: hall_map,
		roles: ["game", "narration"],
		background: hall_background,
		narrationText: hallTexts.initial,
		readyText: hallTexts.ready,
		success: hallTexts.success,
		failure: hallTexts.failure,
	},
	{
		name: "Kitchen",
		number: 2,
		difficulty: "facile",
		mapRoom: kitchen_map,
		roles: ["game", "narration"],
		background: kitchen_background,
		narrationText: kitchenTexts.initial,
		readyText: kitchenTexts.ready,
		success: kitchenTexts.success,
		failure: kitchenTexts.failure,
	},
	{
		name: "Library",
		number: 3,
		difficulty: "facile",
		mapRoom: library_map,
		roles: ["game", "narration"],
		background: library_background,
		narrationText: libraryTexts.initial,
		readyText: libraryTexts.ready,
		success: libraryTexts.success,
		failure: libraryTexts.failure,
	},
	{
		name: "Ball",
		number: 4,
		difficulty: "facile",
		mapRoom: ball_map,
		roles: ["game", "narration"],
		background: ball_background,
		narrationText: ballTexts.initial,
		readyText: ballTexts.ready,
		success: ballTexts.success,
		failure: ballTexts.failure,
	},
	{
		name: "Cellar",
		number: 5,
		difficulty: "normal",
		mapRoom: cellar_map,
		roles: ["game", "narration"],
		background: cellar_background,
		narrationText: cellarTexts.initial,
		readyText: cellarTexts.ready,
		success: cellarTexts.success,
		failure: cellarTexts.failure,
	},
	{
		name: "Pantry",
		number: 6,
		difficulty: "normal",
		mapRoom: pantry_map,
		roles: ["game", "narration"],
		background: pantry_background,
		narrationText: pantryTexts.initial,
		readyText: pantryTexts.ready,
		success: pantryTexts.success,
		failure: pantryTexts.failure,
	},
	{
		name: "Storage",
		number: 7,
		difficulty: "normal",
		mapRoom: storage_map,
		roles: ["game", "narration"],
		background: storage_background,
		narrationText: storage_roomTexts.initial,
		readyText: storage_roomTexts.ready,
		success: storage_roomTexts.success,
		failure: storage_roomTexts.failure,
	},
	{
		name: "Morgue",
		number: 8,
		difficulty: "normal",
		mapRoom: morgue_map,
		roles: ["game", "narration"],
		background: morgue_background,
		narrationText: morgueTexts.initial,
		readyText: morgueTexts.ready,
		success: morgueTexts.success,
		failure: morgueTexts.failure,
	},
	{
		name: "Labo",
		number: 9,
		difficulty: "difficle",
		mapRoom: entrancelab_map,
		roles: ["game", "narration"],
		background: entrancelab_background,
		narrationText: entrancelabTexts.initial,
		readyText: entrancelabTexts.ready,
		success: entrancelabTexts.success,
		failure: entrancelabTexts.failure,
	},
	{
		name: "Office",
		number: 10,
		difficulty: "difficle",
		mapRoom: office_map,
		roles: ["game", "narration"],
		background: office_background,
		narrationText: officeLaboratoryTexts.initial,
		readyText: officeLaboratoryTexts.ready,
		success: officeLaboratoryTexts.success,
		failure: officeLaboratoryTexts.failure,
	},
	{
		name: "Surgery",
		number: 11,
		difficulty: "difficle",
		mapRoom: surgery_map,
		roles: ["game", "narration"],
		background: surgery_background,
		narrationText: surgeryLaboratoryTexts.initial,
		readyText: surgeryLaboratoryTexts.ready,
		success: surgeryLaboratoryTexts.success,
		failure: surgeryLaboratoryTexts.failure,
	},
	{
		name: "Cuve",
		number: 12,
		difficulty: "difficle",
		mapRoom: cuve_map,
		roles: ["game", "narration"],
		background: cuve_background,
		narrationText: cuveLaboratoryTexts.initial,
		readyText: cuveLaboratoryTexts.ready,
		success: cuveLaboratoryTexts.success,
		failure: cuveLaboratoryTexts.failure,
	},
];
export const charactersData: Character[] = [
	{
		name: "Emeric",
		image: emeric,
		logo_alive: emeric_logo_alive,
		logo_dead: emeric_logo_dead,
	},
	{
		name: "Jugurtha",
		image: jugurtha,
		logo_alive: jugurtha_logo_alive,
		logo_dead: jugurtha_logo_dead,
	},
	{
		name: "Lisa",
		image: lisa,
		logo_alive: lisa_logo_alive,
		logo_dead: lisa_logo_dead,
	},
	{
		name: "Luna",
		image: luna,
		logo_alive: luna_logo_alive,
		logo_dead: luna_logo_dead,
	},
];
