import axios from "axios";

const HOST =
  process.env.REACT_APP_API_URL || "https://intranet.urgencesante.fr";
const PORT = process.env.REACT_APP_API_PORT || 8090;
const BASE_ROUTE = process.env.REACT_APP_API_BASE_ROTUE || "/api/";

const BASE_URL = `${HOST}:${PORT}${BASE_ROUTE}`;

const api = axios.create({ baseURL: BASE_URL });

export { api };
