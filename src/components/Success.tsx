import trophy from "../assets/img/success/success_trophy.png";
import { successesData } from "../data/GameData";
import "../styles/success.css";

function Success() {
	return (
		<article className="box-success">
			<img className="trophy" src={trophy} alt="Success Trophy" />
			{successesData.map((success) => (
				<div key={success.id} className="success-list">
					<img src={success.img_not_gotten} alt={success.name} />
					<p>{success.text}</p>
				</div>
			))}
		</article>
	);
}

export default Success;
