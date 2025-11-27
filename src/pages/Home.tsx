import { Link } from "react-router";
import { useSuccess } from "../contexts/SuccessContext";

function Home() {
	const { setSuccesses } = useSuccess();

	const successGotten = setSuccesses((prev) =>
		prev.map((success, i) =>
			i === 0 ? { ...success, gotten: true } : success,
		),
	);

	return (
		<section>
			<button type="button" onClick={successGotten}>
				<Link to="/game">Entrez</Link>
			</button>
		</section>
	);
}

export default Home;
