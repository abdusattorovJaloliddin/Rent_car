import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CardInfo from "./CardInfo";
import { lazy, Suspense } from "react";

const Favorites = lazy(() => import("../src/Favorites"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cardinfo/:id",
    element: <CardInfo />,
  },
  {
    path: "favorites",
    element: (
      <Suspense fallback={<div>Yuklanmoqda...</div>}>
        <Favorites />
      </Suspense>
    ),
  },
]);
