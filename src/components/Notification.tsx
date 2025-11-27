import { useSuccess } from "../contexts/SuccessContext";
import "../styles/notification.css";

export default function Notification() {
	const { notifications } = useSuccess();

	return (
		<div className={notifications.length > 0 && "box-notification"}>
			{notifications.map((notification) => (
				<>
					<img
						key={notification.id}
						src={notification.img}
						alt={notification.name}
					/>
					<p key={notification.id}>{notification.text}</p>
				</>
			))}
		</div>
	);
}
