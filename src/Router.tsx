import { createBrowserRouter } from "react-router";
import App from "./App";
import Game from "./components/Game";
import Home from "./components/Home";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/game",
				element: <Game />,
			},
		],
	},
]);

export default router;
