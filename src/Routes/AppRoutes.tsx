import {
  Navigate,
  Outlet,
  createHashRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import UserLoginView from "../Presenter/page/UserLogin/UserLoginView";
import Home from "../Presenter/page/Home/Home";
import Page404 from "../Presenter/components/Page404/Page404";
import { getCrew } from "../DataSource/localStorage";
import { useEffect } from "react";
import JobDetail from "../Presenter/page/JobDetailNavigation/JobDetail/JobDetail";
import JobEdit from "../Presenter/page/JobDetailNavigation/JobEdit/JobEdit";
import SignatureView from "../Presenter/page/JobDetailNavigation/Signature/SignatureView";
import JobDetailNavigation from "../Presenter/page/JobDetailNavigation/JobDetailNavigation";
import MainNavbarFacade from "../Presenter/components/MainNavbar/MainNavbarFacade";
import { Box } from "@mui/material";
import CrewList from "../Presenter/page/CrewList/CrewList";
import KilometersSetForm from "../Presenter/page/KilometersSetForm/KilometersSetForm";
import KeycloakLogin from "../Presenter/Login/KeycloakLogin";
import { useKeycloak } from "@react-keycloak/web";

// const PrivateRoute = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   console.log(location.pathname)

//   // useEffect(() => {
//   //   if (location.pathname === "/regul") return;
//   //   const crew = getCrew();
//   //   if (!crew) navigate("login");
//   // }, [navigate]);

//   return (
//     <>
//       <MainNavbarFacade />
//       <Box sx={{ padding: "16px" }}>
//         <Outlet />
//       </Box>
//     </>
//   );
// };
const PrivateRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { keycloak, initialized } = useKeycloak();

  console.log("private route rendered");

  useEffect(() => {
    if (initialized)
      if (!keycloak.authenticated) return navigate("loginKeycloak");
  }, [navigate, keycloak, initialized, location.pathname]);

  if (!initialized) return <>Chargement...</>;

  if (keycloak.authenticated)
    return (
      <>
        <MainNavbarFacade />
        <Box sx={{ padding: "16px" }}>
          <Outlet />
        </Box>
      </>
    );
  return <>Authentifiez vous pour acceder a cette page</>;
};

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/jobs/:id/*",
        element: <JobDetailNavigation />,
        children: [
          { index: true, element: <Navigate to={"detail"} replace /> },
          { path: "detail", element: <JobDetail /> },
          { path: "detailEditable", element: <JobEdit /> },
          { path: "signature", element: <SignatureView /> },
        ],
      },
      { path: "login", element: <UserLoginView /> },
      { path: "login/:crewId/:memberName", element: <UserLoginView /> },
      { path: "kilometers", element: <KilometersSetForm /> },
      { path: "regul", element: <CrewList /> },
    ],
  },
  { path: "loginKeycloak", element: <KeycloakLogin /> },
  { path: "/*", element: <Page404 /> },
]);

// export const appRouter = createHashRouter([
//   { index: true, element: <Home /> },
//   { path: "*", element: <KeycloakLogin /> },
// ]);
