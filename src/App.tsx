import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginUseCase from "./UseCase/LoginUseCase/LoginUseCase";
import Home from "./Presenter/page/Home/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import FilterContext from "./Contexts/FilterContext";
import { FieldInfos } from "./Domain/FormStructure";
import JobEditFormContext from "./Contexts/JobEditFormContext";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import RouterKeycloak from "./Routes/RouterKeycloak";
import { KeycloakInitOptions } from "keycloak-js";
import keycloak from "./Auth/keyclock";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainNavbarFacade from "./Presenter/components/MainNavbar/MainNavbarFacade";
import initKeycloak from "./Auth/keyclock";
const queryClient = new QueryClient();

function App() {
  const [shouldShowJobTerminated, toggleShowJobterminated] = useState(false);
  const [fields, setFields] = useState<FieldInfos[]>([]);

  const eventLogger = (event: any, error: any) => {
    console.log("onKeycloakEvent", event, error);
  };

  const tokenLogger = (tokens: any) => {
    console.log("onKeycloakTokens", tokens);
  };

  const keycloakInstance = initKeycloak();

  const keyCloakInitOptions: KeycloakInitOptions = {};

  return (
    <ReactKeycloakProvider
      authClient={keycloakInstance}
      onEvent={eventLogger}
      onTokens={tokenLogger}
      LoadingComponent={<>Loading component...</>}
      initOptions={{ onload: "check-sso" }}
    >
      <QueryClientProvider client={queryClient}>
        <JobEditFormContext.Provider value={{ fields, setFields }}>
          <FilterContext.Provider
            value={{ shouldShowJobTerminated, toggleShowJobterminated }}
          >
            <RouterKeycloak />
          </FilterContext.Provider>
        </JobEditFormContext.Provider>
      </QueryClientProvider>
    </ReactKeycloakProvider>
  );
}

export default App;
