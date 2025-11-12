import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./styles/index.css";
import router from "./Router.tsx";

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
