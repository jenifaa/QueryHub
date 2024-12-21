
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Queries from "../Pages/PageRoutes/Queries";
import ErrorPage from "../ErrorPage/ErrorPage";
import RecomendationForMe from "../Pages/PageRoutes/RecomendationForMe";
import MyQuesries from "../Pages/PageRoutes/MyQuesries";
import MyRecommendations from "../Pages/PageRoutes/MyRecommendations";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'queries',
          element: <Queries></Queries>
        },
        {
          path: 'recommendationForme',
          element: <RecomendationForMe></RecomendationForMe>
        },
        {
          path: 'myQueries',
          element: <MyQuesries></MyQuesries>
        },
        {
          path: 'myRecommendation',
          element: <MyRecommendations></MyRecommendations>
        },
    ]
  },
]);
export default router;