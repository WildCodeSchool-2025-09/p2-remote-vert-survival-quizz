import type { navBarType } from "../types/NavBarTypes";
import "../styles/navbar.css";

function Navbar({ roomData, charactersAlive, score }: navBarType) {
	return (
		<section className="inside-nav">
			<div className="characters-container">
				{charactersAlive.map((character) => (
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
