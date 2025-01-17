import { Navigate, createHashRouter } from "react-router-dom";
import UserLoginView from "../Presenter/page/UserLogin/UserLoginView";
import Home from "../Presenter/page/Home/Home";
import Page404 from "../Presenter/components/Page404/Page404";
import JobDetail from "../Presenter/page/JobDetailNavigation/JobDetail/JobDetail";
import JobEdit from "../Presenter/page/JobDetailNavigation/JobEdit/JobEdit";
import SignatureView from "../Presenter/page/JobDetailNavigation/Signature/SignatureView";
import JobDetailNavigation from "../Presenter/page/JobDetailNavigation/JobDetailNavigation";
import CrewList from "../Presenter/page/CrewList/CrewList";
import KilometersSetForm from "../Presenter/page/KilometersSetForm/KilometersSetForm";
import PrivateRoute from "./PrivateRoute";
import CrewListContainer from "../Components/CrewList/CrewListContainer";

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

      { path: "kilometers", element: <KilometersSetForm /> },
      { path: "regul", element: <CrewListContainer /> },
    ],
  },
  { path: "login", element: <UserLoginView /> },
  { path: "login/:crewId/:memberName", element: <UserLoginView /> },
  { path: "/*", element: <Page404 /> },
]);
