import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getCrew } from "../DataSource/localStorage";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/regul") return;
    const crew = getCrew();
    if (!crew) navigate("/login", { replace: true });
  }, [navigate, location.pathname]);

  return <Outlet />;
}
