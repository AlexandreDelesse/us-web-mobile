import { Button } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import React from "react";

export default function LogoutButton() {
  const { keycloak } = useKeycloak();

  const logout = () => {
    if (keycloak.authenticated) keycloak.logout();
  };

  return (
    <Button
      onClick={logout}
      size="medium"
      variant="contained"
      color="warning"
      // disabled={isPending}
    >
      Logout
    </Button>
  );
}
