import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./styles/index.css";
import router from "./Router.tsx";
import { CharacterProvider } from "./contexts/CharacterContext.tsx";
import { SuccessProvider } from "./contexts/SuccessContext.tsx";

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(
		<CharacterProvider>
			<SuccessProvider>
				<RouterProvider router={router} />
			</SuccessProvider>
		</CharacterProvider>,
	);
}
