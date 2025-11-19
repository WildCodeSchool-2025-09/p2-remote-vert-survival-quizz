import type { Room } from "../types/GameDataTypes";
import "../styles/navbar.css";
import { useCharacter } from "../contexts/CharacterContext";

interface navBarType {
	roomData: Room;
	score: number;
}

function Navbar({ roomData, score }: navBarType) {
	const { characters } = useCharacter();

	return (
		<section className="inside-nav">
			<div className="characters-container">
				{characters.map((character) => (
					<img
						key={character.id}
						src={character.isAlive ? character.logo_alive : character.logo_dead}
						alt={character.name}
						className="character-logo-sprite"
					/>
				))}
			</div>

			<div className="container-right">
				<p className="score">{score} pts</p>
				<img
					src={roomData.mapRoom}
					alt={roomData.name}
					className="navbar-map"
				/>
			</div>
		</section>
	);
}

export default Navbar;
