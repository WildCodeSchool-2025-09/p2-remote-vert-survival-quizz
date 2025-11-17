import type { navBarType } from "../types/navBarTypes";
import "../styles/navbar.css";

function Navbar({ roomData }: navBarType) {
	return (
		<div className="inside-nav">
			<img src={roomData.mapRoom} alt={roomData.name} className="navbar-map" />
		</div>
	);
}

export default Navbar;
