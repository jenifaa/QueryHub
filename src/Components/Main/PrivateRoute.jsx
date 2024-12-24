import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Layout/Loading";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (user && user?.email) {
    return children;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
