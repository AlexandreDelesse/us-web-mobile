import { Button, Card, CardContent, Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function KeycloakLogin() {
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      keycloak.loadUserProfile();
    }
  }, [keycloak.authenticated, initialized, navigate]);

  return (
    <Card
      sx={{
        my: 2,
        maxWidth: "400px",
        position: "absolute",
        left: "50%",
        top: "30%",
        transform: "translate(-50%,-50%)",
      }}
      elevation={0}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4" textAlign="center" marginBottom={4}>
          Connexion
        </Typography>

        {keycloak.authenticated ? <LogoutButton /> : <LoginButton />}

        {/* <ErrorHandler error={error} /> */}
      </CardContent>
    </Card>
  );
}
