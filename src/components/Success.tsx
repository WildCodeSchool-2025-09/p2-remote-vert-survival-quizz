import trophy from "../assets/img/success/success_trophy.png";
import { useSuccess } from "../contexts/SuccessContext";
import "../styles/success.css";

function Success() {
	const { successes } = useSuccess();

	return (
		<article className="box-success">
			<img className="trophy" src={trophy} alt="Success Trophy" />
			{successes.map((success) => (
				<div key={success.id} className="success-list">
					<img
						src={success.gotten ? success.img_gotten : success.img_not_gotten}
						alt={success.name}
					/>
					<p>{success.text}</p>
				</div>
			))}
		</article>
	);
}

export default Success;
