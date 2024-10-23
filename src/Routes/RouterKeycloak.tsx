import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import {
  HashRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import { appRouter } from "./AppRoutes";
import Home from "../Presenter/page/Home/Home";
import keycloak from "../Auth/keyclock";
import MainNavbarFacade from "../Presenter/components/MainNavbar/MainNavbarFacade";
import { Box } from "@mui/material";
import KeycloakLogin from "../Presenter/Login/KeycloakLogin";
import Page404 from "../Presenter/components/Page404/Page404";
import CrewList from "../Presenter/page/CrewList/CrewList";

export default function RouterKeycloak() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) return <>Chargement...</>;

  return (
    <HashRouter>
      <MainNavbarFacade />
      <Box sx={{ padding: "16px" }}>
        <Routes>
          <Route
            path="/"
            element={
              keycloak.authenticated ? <Home /> : <Navigate to="/login" />
            }
          />
          <Route
            path="regul"
            element={
              keycloak.authenticated ? <CrewList /> : <Navigate to="/login" />
            }
          />
          <Route path="login" element={<KeycloakLogin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Box>
    </HashRouter>
  );
}
