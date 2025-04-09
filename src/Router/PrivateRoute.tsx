import { useEffect } from "react";
import { matchPath, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getCrew } from "../DataSource/localStorage";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const acceptedPaths = ["/regul", "/logs", "logs/:logId"];
  // const isPublicPath = acceptedPaths.some((el) => el == location.pathname);
  const isPublicPath = acceptedPaths.some((path) =>
    matchPath({ path, end: false }, location.pathname)
  );

  useEffect(() => {
    if (isPublicPath) return;
    const crew = getCrew();
    if (!crew) navigate("/login", { replace: true });
  }, [navigate, location.pathname, isPublicPath]);

  return <Outlet />;
}
