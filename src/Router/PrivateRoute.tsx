import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getCrew } from "../DataSource/localStorage";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const acceptedPaths = ["/regul", "/administration"];

  useEffect(() => {
    if (acceptedPaths.some((el) => el.includes(location.pathname))) return;
    const crew = getCrew();
    if (!crew) navigate("/login", { replace: true });
  }, [navigate, location.pathname]);

  return <Outlet />;
}
