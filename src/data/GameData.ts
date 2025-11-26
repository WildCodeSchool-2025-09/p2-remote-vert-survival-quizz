import type { Character, Homepage, Joker, Room } from "../types/GameDataTypes";

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

import additional_time_gotten from "../assets/img/jokers/gotten/additional_time.png";
import change_difficulty_gotten from "../assets/img/jokers/gotten/change_difficulty.png";
import points_x2_gotten from "../assets/img/jokers/gotten/points_x2.png";
import shield_gotten from "../assets/img/jokers/gotten/shield.png";

import additional_time_not_gotten from "../assets/img/jokers/not_gotten/additional_time.png";
import change_difficulty_not_gotten from "../assets/img/jokers/not_gotten/change_difficulty.png";
import points_x2_not_gotten from "../assets/img/jokers/not_gotten/points_x2.png";
import shield_not_gotten from "../assets/img/jokers/not_gotten/shield.png";

import carnage_gotten from "../assets/img/success/gotten/carnage.png";
import first_death_gotten from "../assets/img/success/gotten/first_death.png";
import flex_gotten from "../assets/img/success/gotten/flex.png";
import half_way_gotten from "../assets/img/success/gotten/half_way.png";
import joker_gotten from "../assets/img/success/gotten/joker.png";
import noob_gotten from "../assets/img/success/gotten/noob.png";
import perfect_gotten from "../assets/img/success/gotten/perfect.png";
import start_gotten from "../assets/img/success/gotten/start.png";

import carnage_not_gotten from "../assets/img/success/not_gotten/carnage.png";
import first_death_not_gotten from "../assets/img/success/not_gotten/first_death.png";
import flex_not_gotten from "../assets/img/success/not_gotten/flex.png";
import half_way_not_gotten from "../assets/img/success/not_gotten/half_way.png";
import joker_not_gotten from "../assets/img/success/not_gotten/joker.png";
import noob_not_gotten from "../assets/img/success/not_gotten/noob.png";
import perfect_not_gotten from "../assets/img/success/not_gotten/perfect.png";
import start_not_gotten from "../assets/img/success/not_gotten/perfect.png";

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
} from "./NarrationData";

export const homepageData: Homepage[] = [
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

export const jokersData: Joker[] = [
	{
		id: 1,
		name: "shield",
		combo: 2,
		img_gotten: shield_gotten,
		img_not_gotten: shield_not_gotten,
		text: "Aucune perte en cas de mauvaise réponse.",
		gotten: false,
		used: false,
	},
	{
		id: 2,
		name: "change difficulty",
		combo: 4,
		img_gotten: change_difficulty_gotten,
		img_not_gotten: change_difficulty_not_gotten,
		text: "Change le niveau de difficulté de la question actuelle.",
		gotten: false,
		used: false,
	},
	{
		id: 3,
		name: "points x2",
		combo: 6,
		img_gotten: points_x2_gotten,
		img_not_gotten: points_x2_not_gotten,
		text: "Multiplie tes points obtenus par 2 pour la question actuelle.",
		gotten: false,
		used: false,
	},
	{
		id: 4,
		name: "additional time",
		combo: 8,
		img_gotten: additional_time_gotten,
		img_not_gotten: additional_time_not_gotten,
		text: "Ajoute 10 secondes de réflexion à cette question.",
		gotten: false,
		used: false,
	},
];

export const successesData = [
	{
		id: 1,
		name: "Start",
		img_gotten: start_gotten,
		img_not_gotten: start_not_gotten,
		text: "Partie lancée, que la chance soit avec toi.",
		gotten: false,
	},
	{
		id: 2,
		name: "First Death",
		img_gotten: first_death_gotten,
		img_not_gotten: first_death_not_gotten,
		text: "Il vous manque un orteil. Ca compte pas vraiment, si ?",
		gotten: false,
	},
	{
		id: 3,
		name: "Noob",
		img_gotten: noob_gotten,
		img_not_gotten: noob_not_gotten,
		text: "O bonne réponse ?! T'as speedrun la défaite..",
		gotten: false,
	},
	{
		id: 4,
		name: "First Joker",
		img_gotten: joker_gotten,
		img_not_gotten: joker_not_gotten,
		text: "Premier joker ! Essaie de pas le cramer tout de suite.",
		gotten: false,
	},
	{
		id: 5,
		name: "Half Way",
		img_gotten: half_way_gotten,
		img_not_gotten: half_way_not_gotten,
		text: "T'as survécu à la moitié ! Statistiquement, ça tiendra pas.",
		gotten: false,
	},
	{
		id: 6,
		name: "Carnage",
		img_gotten: carnage_gotten,
		img_not_gotten: carnage_not_gotten,
		text: "8 kills consécutifs ? Le chaos a un nom.",
		gotten: false,
	},
	{
		id: 7,
		name: "Flexeur",
		img_gotten: flex_gotten,
		img_not_gotten: flex_not_gotten,
		text: "Fin du jeu et 0 joker utilisé ? Juste du skill pur.",
		gotten: false,
	},
	{
		id: 8,
		name: "Perfect",
		img_gotten: perfect_gotten,
		img_not_gotten: perfect_not_gotten,
		text: "0 mort ? Ok, même les devs pensaient pas que c'était possible.",
		gotten: false,
	},
];
