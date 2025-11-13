import type { Room } from "../type/GameDataTypes";
import "../styles/navbar.css";

type NavbarProps = {
	roomData: Room;
};

function Navbar({ roomData }: NavbarProps) {
	return (
		<div className="inside-nav">
			<img src={roomData.mapRoom} alt={roomData.name} className="navbar-map" />
		</div>
	);
}

export default Navbar;
