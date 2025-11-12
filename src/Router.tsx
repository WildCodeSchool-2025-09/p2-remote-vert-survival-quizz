import { createBrowserRouter } from "react-router";
import App from "./App";

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
			{
				path: "/ending",
				element: <Ending />,
			},
			{
				path: "/scores",
				element: <Scores />,
			},
		],
	},
]);

export default router;
