import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginContext, LoginProvider } from "../context/LoginContext.js";
import { useContext } from "react";
import { PrivateRoutes } from "./PrivateRoutes.js";
import { LoginScreen } from "../components/LoginScreen/LoginScreen.js";
import { PublicRoutes } from "./PublicRoutes.js";
import { Footer } from "../components/Footer/Footer.js";
import { Header } from "../components/Header/Header.js";

export const AppRouter = () => {
  const { user } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Header />
      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}

      <Footer />
    </BrowserRouter>
  );
};
