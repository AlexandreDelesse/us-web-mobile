import { Navigate, createHashRouter } from "react-router-dom";
import UserLoginView from "../Presenter/page/UserLogin/UserLoginView";
import Home from "../Presenter/page/Home/Home";
import Page404 from "../Presenter/components/Page404/Page404";
import JobDetail from "../Presenter/page/JobDetailNavigation/JobDetail/JobDetail";
import JobEdit from "../Presenter/page/JobDetailNavigation/JobEdit/JobEdit";
import JobDetailNavigation from "../Presenter/page/JobDetailNavigation/JobDetailNavigation";
import KilometersSetForm from "../Presenter/page/KilometersSetForm/KilometersSetForm";
import CrewListContainer from "../Components/CrewList/CrewListContainer";
import SignatureContainer from "../Components/Signature/SignatureContainer";
import MainPage from "../Components/Pages/MainPage";
import MissionsPage from "../Components/Pages/MissionsPage";
import MecanicLogs from "../Components/Mecanic/MecanicLogs";
import VersionDisplayerView from "../Presenter/components/VersionDisplayer/VersionDisplayerView";
import Signature from "../Components/Signature/Signature";
import WelcomePage from "../Components/Pages/WelcomePage";

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <MissionsPage />,
          },
          { path: "/vehicle", element: <MecanicLogs /> },
        ],
      },

      {
        path: "/jobs/:id/*",
        element: <JobDetailNavigation />,
        children: [
          { index: true, element: <Navigate to={"detail"} replace /> },
          { path: "detail", element: <JobDetail /> },
          { path: "detailEditable", element: <JobEdit /> },
          { path: "signature", element: <Signature /> },
        ],
      },

      { path: "kilometers", element: <KilometersSetForm /> },
      { path: "regul", element: <CrewListContainer /> },
    ],
  },
  {
    path: "login",
    element: (
      <>
        <UserLoginView /> <VersionDisplayerView cornerBottom={true} />
      </>
    ),
  },
  {
    path: "login/:crewId/:memberName",
    element: (
      <>
        <UserLoginView /> <VersionDisplayerView cornerBottom={true} />
      </>
    ),
  },
  { path: "/welcome", element: <WelcomePage /> },
  { path: "/*", element: <Page404 /> },
]);
