import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Queries from "../Pages/PageRoutes/Queries";
import ErrorPage from "../ErrorPage/ErrorPage";
import RecomendationForMe from "../Pages/PageRoutes/RecomendationForMe";

import MyRecommendations from "../Pages/PageRoutes/MyRecommendations";
import MyQueries from "../Pages/PageRoutes/MyQueries";
import AddQueries from "../AddQueries";
import QueryUpdate from "../QueryUpdate";
import QueryDetails from "../QueryDetails";
import PrivateRoute from "../Main/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "queries",
        element: <Queries></Queries>,
      },
      {
        path: "recommendationForme",
        element: <RecomendationForMe></RecomendationForMe>,
      },
      {
        path: "myQueries",
        element: <MyQueries></MyQueries>,
        // loader: () => fetch(`http://localhost:5000/queries/user/?email=${email}`),
      },
      {
        path: "myRecommendation",
        element: <MyRecommendations></MyRecommendations>,
      },
    ],
  },
  {
    path: "addQueries",
    element: (
      // <AddQueries></AddQueries>

      <PrivateRoute>
        <AddQueries></AddQueries>
      </PrivateRoute>
    ),
  },
  {
    path: "queryUpdate",
    element: <QueryUpdate></QueryUpdate>,
  },
  {
    path: "/queries/:id",
    element: <QueryDetails></QueryDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/queries/user/${params.id}`)
  },
]);
export default router;
