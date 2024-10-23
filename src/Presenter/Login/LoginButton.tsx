import { Button } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import React from "react";

export default function LoginButton() {
  const { keycloak } = useKeycloak();

  const login = () => {
    if (!keycloak.authenticated) keycloak.login();
  };

  return (
    <Button
      onClick={login}
      size="medium"
      variant="contained"
      color="primary"
      // disabled={isPending}
    >
      Login
    </Button>
  );
}
