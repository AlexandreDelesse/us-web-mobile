import axios, { AxiosInstance } from "axios";
import { DriverRoute } from "./Routes/DriverRoute";
import { TimeRoute } from "./Routes/TimeRoute";
import { JobEditValueRoute } from "./Routes/JobEditValueRoute";
import { LoginRoute } from "./Routes/LoginRoute";
import { KilometersRoute } from "./Routes/KilometersRoute";
import { SignatureRoute } from "./Routes/SignatureRoute";
import { JoblistRoute } from "./Routes/JoblistRoute";

const HOST =
  process.env.REACT_APP_API_URL || "https://intranet.urgencesante.fr";
const PORT = process.env.REACT_APP_API_PORT || 8090;
const BASE_ROUTE = process.env.REACT_APP_API_BASE_ROTUE || "/api/";

const BASE_URL = `${HOST}:${PORT}${BASE_ROUTE}`;

export class WebApi {
  private baseApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
  });

  login = new LoginRoute(this.baseApi);
  driver = new DriverRoute(this.baseApi);
  time = new TimeRoute(this.baseApi);
  jobEditValue = new JobEditValueRoute(this.baseApi);
  kilometers = new KilometersRoute(this.baseApi);
  signature = new SignatureRoute(this.baseApi);
  joblist = new JoblistRoute(this.baseApi);
}
