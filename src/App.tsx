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
import UserLoginView from "./Presenter/page/UserLogin/UserLoginView";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Routes/AppRoutes";
import FilterContext from "./Contexts/FilterContext";
import MainNavbarFacade from "./Presenter/components/MainNavbar/MainNavbarFacade";

const queryClient = new QueryClient();

function App() {
  const [shouldShowJobTerminated, toggleShowJobterminated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContext.Provider
        value={{ shouldShowJobTerminated, toggleShowJobterminated }}
      >
        <RouterProvider router={appRouter} />
      </FilterContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
