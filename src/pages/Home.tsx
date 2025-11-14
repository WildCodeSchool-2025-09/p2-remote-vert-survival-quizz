import { Link } from "react-router";

function Home() {
	return (
		<section>
			<button type="button">
				<Link to="/game">Entrez</Link>
			</button>
		</section>
	);
}

export default Home;
