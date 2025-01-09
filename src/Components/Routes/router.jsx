import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Queries from "../Pages/PageRoutes/Queries";
import ErrorPage from "../ErrorPage/ErrorPage";
import RecommendationForMe from "../Pages/PageRoutes/RecommendationForMe";

import MyRecommendations from "../Pages/PageRoutes/MyRecommendations";
import MyQueries from "../Pages/PageRoutes/MyQueries";
import AddQueries from "../AddQueries";
import QueryUpdate from "../QueryUpdate";
import QueryDetails from "../QueryDetails";
import PrivateRoute from "../Main/PrivateRoute";
import Blog from "../Blog";
import AllItems from "../Pages/PageRoutes/AllItems";
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
        loader: () =>
          fetch(
            "https://assignment-11-server-seven-liard.vercel.app/queries/all"
          ),
      },
      {
        path: "recommendationForme",
        element: (
          <PrivateRoute>
            <RecommendationForMe></RecommendationForMe>
          </PrivateRoute>
        ),
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
        path: "myQueries",
        element: <MyQueries></MyQueries>,
      },
      {
        path: "myRecommendation",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "allItems",
        element: (
          <PrivateRoute>
            <AllItems></AllItems>
          </PrivateRoute>
        ),
      },
    ],
  },
  // {
  //   path: "addQueries",
  //   element: (
  //     // <AddQueries></AddQueries>

  //     <PrivateRoute>
  //       <AddQueries></AddQueries>
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: "/queries/user/:id",
    element: (
      <PrivateRoute>
        <QueryUpdate></QueryUpdate>
      </PrivateRoute>
    ),
  },
  {
    path: "/queries/:id",
    element: (
      <PrivateRoute>
        <QueryDetails></QueryDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-server-seven-liard.vercel.app/queries/user/${params.id}`
      ),
  },
  {
    path: "blog",
    element: <Blog></Blog>,
  },
]);
export default router;
