import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import App from "./App.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/reservation",
        element: <ReservationPage />,
      }
    ]
  }
])

export default router;