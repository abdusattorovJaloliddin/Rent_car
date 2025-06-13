import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CardInfo from "./CardInfo";
import Favorites from "./Favorites";

export const Router = createBrowserRouter([
   {
     path: '/',
    element: <App/>,
   },
   {
    path: '/cardinfo/:id',
    element: <CardInfo/>
   },
   {
      path: 'favorites',
      element: <Favorites/>
   }
])