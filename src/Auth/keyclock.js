import Keycloak from "keycloak-js";

let keycloakInstance = null;

const keycloakConfig = {
  realm: "mock-test",
  url: "http://localhost:8080",
  clientId: "mock-react-app",
};

const initKeycloak = () => {
  if (!keycloakInstance) keycloakInstance = new Keycloak(keycloakConfig);
  return keycloakInstance;
};

export default initKeycloak;
