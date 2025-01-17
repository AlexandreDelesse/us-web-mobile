import axios from "axios";

const HOST = "https://intranet.urgencesante.fr";
const PORT = 8090;
const BASE_ROUTE = "/api/";

const BASE_URL = `${HOST}:${PORT}${BASE_ROUTE}`;

const api = axios.create({ baseURL: BASE_URL });

export { api };
