import { useState } from "react";
import type { Character, Room } from "../types/GameDataTypes";
import "../styles/navbar.css";

type NavbarProps = {
	roomData: Room;
	charactersData: Character[];
};

function Navbar({ roomData, charactersData }: NavbarProps) {
	/*const [charactersInRoom, setCharactersInRoom] = useState(charactersData);

	const charactersToDisplay = charactersInRoom.map((characterInRoom) => {
		const fullData = charactersData.find(
			(character) => character.name === characterInRoom.name,
		);

		let logoUrl;
		if (characterInRoom.isAlive) {
			logoUrl = fullData ? fullData.logo_alive : "";
		} else {
			logoUrl = fullData ? fullData.logo_dead : "";
		}

		return {
			name: characterInRoom.name,
			logo: logoUrl,
		};
	});*/

	return (
		<section className="inside-nav">
			{/*<div className="characters-container">
				{charactersToDisplay.map((character) => (
					<img
						key={character.name}
						src={character.logo}
						alt={character.name}
						className="character-logo-sprite"
					/>
				))}
			</div>*/}

			<img src={roomData.mapRoom} alt={roomData.name} className="navbar-map" />
		</section>
	);
}

export default Navbar;
