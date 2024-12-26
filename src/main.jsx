import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  
  RouterProvider,
} from "react-router-dom";
import router from "./Components/Routes/router";
import AuthProvider from "./Components/Main/AuthProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
   <AuthProvider>
      <RouterProvider router={router} />
     
      <ToastContainer />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
