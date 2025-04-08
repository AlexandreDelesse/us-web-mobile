import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getCrew } from "../DataSource/localStorage";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const acceptedPaths = ["/regul", "/administration"];
  const isPublicPath = acceptedPaths.some((el) => el == location.pathname);

  useEffect(() => {
    console.log("checking public path : ", isPublicPath);
    if (isPublicPath) return;
    const crew = getCrew();
    console.log("checking crew in privateRoute", crew);
    if (!crew) navigate("/login", { replace: true });
  }, [navigate, location.pathname, isPublicPath]);

  return <Outlet />;
}
