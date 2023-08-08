import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <HomePage /> },
]);

export default router;
