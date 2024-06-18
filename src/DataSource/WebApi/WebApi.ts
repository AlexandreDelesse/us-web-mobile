import axios, { AxiosInstance } from "axios";
import { DriverRoute } from "./Routes/DriverRoute";
import { TimeRoute } from "./Routes/TimeRoute";
import { JobEditValueRoute } from "./Routes/JobEditValueRoute";
import { LoginRoute } from "./Routes/LoginRoute";
import { KilometersRoute } from "./Routes/KilometersRoute";

export class WebApi {
  private baseApi: AxiosInstance = axios.create({
    baseURL: "http://intranet.urgencesante.fr:8090/api",
    timeout: 1000,
  });

  login = new LoginRoute(this.baseApi);
  driver = new DriverRoute(this.baseApi);
  time = new TimeRoute(this.baseApi);
  jobEditValue = new JobEditValueRoute(this.baseApi);
  kilometers = new KilometersRoute(this.baseApi);
}
