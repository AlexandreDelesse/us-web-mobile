import { Container } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { KeycloakInitOptions } from "keycloak-js";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  const { initialized, keycloak } = useKeycloak();

  // useEffect(() => {
  //   if (initialized && keycloak.authenticated)
  //     keycloak.loadUserProfile().then(() => navigate("/"));
  // }, []);

  return (
    <Container>
      <h1 className="text-center mt-5">404 Not found</h1>
      <p onClick={() => navigate("/")} className="text-center">
        Retour a la page principale
      </p>
    </Container>
  );
}
