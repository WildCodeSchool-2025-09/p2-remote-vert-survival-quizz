import { Outlet } from "react-router";
import "./styles/App.css";
import { AudioProvider } from "../src/contexts/AudioContext";

function App() {
	return (
		<AudioProvider>
			<main>
				<Outlet />
			</main>
		</AudioProvider>
	);
}

export default App;
