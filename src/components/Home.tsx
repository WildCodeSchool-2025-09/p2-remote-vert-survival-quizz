import { Link } from "react-router";

function Home() {
	return (
		<nav>
			<button type="button">
				<Link to="/game">Entrez</Link>
			</button>
		</nav>
	);
}

export default Home;
