import type {
	Character,
	Homepage,
	Room,
	victoryScreenData,
} from "../types/GameDataTypes";

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
	victoryTexts,
} from "./NarrationData";

export const HomepageData: Homepage[] = [
	{
		name: "HomeStart",
		number: 0,
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
		narrationText: cuveLaboratoryTexts.initial,
		readyText: cuveLaboratoryTexts.ready,
		success: cuveLaboratoryTexts.success,
		failure: cuveLaboratoryTexts.failure,
	},
];
export const charactersData: Character[] = [
	{
		id: 1,
		name: "Luna",
		image: luna,
		logo_alive: luna_logo_alive,
		logo_dead: luna_logo_dead,
		isAlive: true,
	},
	{
		id: 2,
		name: "Emeric",
		image: emeric,
		logo_alive: emeric_logo_alive,
		logo_dead: emeric_logo_dead,
		isAlive: true,
	},
	{
		id: 3,
		name: "Lisa",
		image: lisa,
		logo_alive: lisa_logo_alive,
		logo_dead: lisa_logo_dead,
		isAlive: true,
	},
	{
		id: 4,
		name: "Jugurtha",
		image: jugurtha,
		logo_alive: jugurtha_logo_alive,
		logo_dead: jugurtha_logo_dead,
		isAlive: true,
	},
];
export const VictoryNarrationData: victoryScreenData[] = [
	{
		name: "victoryscreen",
		number: 14,
		initial: victoryTexts.initial,
		succes: victoryTexts.succes,
	},
];
