import axios from "axios";
import { toCamelCaseKeys } from "../Utils/caseTransform";

// DEFINITION DES DONNEES DE LA REQUETE
const HOST =
  process.env.REACT_APP_API_URL || "https://intranet.urgencesante.fr";
const PORT = process.env.REACT_APP_API_PORT || 8090;
const BASE_ROUTE = process.env.REACT_APP_API_BASE_ROTUE || "/api/";
const BASE_URL = `${HOST}:${PORT}${BASE_ROUTE}`;
const URL = `${HOST}:${PORT}`;

const api = axios.create({ baseURL: BASE_URL });
const apiWithoutBase = axios.create({baseURL: URL})

// L'API A CHANGE ET RENVOIE LES ATTRIBUTS EN PASCAL CASE, INTERCEPTOR PLUTOT QUE DE TOUT CHANGER A LA MAIN.
api.interceptors.response.use(
  (response) => {
    // Transformer les données reçues
    response.data = toCamelCaseKeys(response.data);
    return response;
  },
  (error) => {
    // Gérer les erreurs ici aussi si besoin
    return Promise.reject(error);
  }
);

// apiWithoutBase.interceptors.response.use(
//   (response) => {
//     // Transformer les données reçues
//     response.data = toCamelCaseKeys(response.data);
//     return response;
//   },
//   (error) => {
//     // Gérer les erreurs ici aussi si besoin
//     return Promise.reject(error);
//   }
// );

export { api, apiWithoutBase };
