import { Navigate, createHashRouter } from "react-router-dom";
import UserLoginView from "../Presenter/page/UserLogin/UserLoginView";
import Home from "../Presenter/page/Home/Home";
import Page404 from "../Presenter/components/Page404/Page404";
import JobDetail from "../Presenter/page/JobDetailNavigation/JobDetail/JobDetail";
import JobEdit from "../Presenter/page/JobDetailNavigation/JobEdit/JobEdit";
import JobDetailNavigation from "../Presenter/page/JobDetailNavigation/JobDetailNavigation";
import KilometersSetForm from "../Presenter/page/KilometersSetForm/KilometersSetForm";
import PrivateRoute from "./PrivateRoute";
import CrewListContainer from "../Components/CrewList/CrewListContainer";
import SignatureContainer from "../Components/Signature/SignatureContainer";

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
          { path: "signature", element: <SignatureContainer /> },
        ],
      },

      { path: "kilometers", element: <KilometersSetForm /> },
      { path: "regul", element: <CrewListContainer /> },
    ],
  },
  { path: "login", element: <UserLoginView /> },
  { path: "login/:crewId/:memberName", element: <UserLoginView /> },
  { path: "/*", element: <Page404 /> },
]);
