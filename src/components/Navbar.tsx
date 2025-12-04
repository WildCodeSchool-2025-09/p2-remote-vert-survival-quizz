import type { Joker, Room } from "../types/GameDataTypes";
import "../styles/navbar.css";
import { useCharacter } from "../contexts/CharacterContext";

interface navBarType {
	roomData: Room;
	score: number[];
	selectedJoker: Joker | null;
}

function Navbar({ roomData, score, selectedJoker }: navBarType) {
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

			<div className="joker-score-map">
				{selectedJoker && (
					<img
						className="navbar-joker"
						src={selectedJoker.img_gotten}
						alt={selectedJoker.name}
					/>
				)}

				<div className="container-right">
					<p className="score">
						{score.length === 12 && score.every((number) => number > 0)
							? score.reduce((acc, currentValue) => acc + currentValue, 0) + 50
							: score.reduce((acc, currentValue) => acc + currentValue, 0)}{" "}
						pts
					</p>
					<img
						src={roomData.mapRoom}
						alt={roomData.name}
						className="navbar-map"
					/>
				</div>
			</div>
		</section>
	);
}

export default Navbar;
