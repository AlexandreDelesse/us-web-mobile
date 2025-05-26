import axios, { AxiosInstance } from "axios";
import { DriverRoute } from "./Routes/DriverRoute";
import { TimeRoute } from "./Routes/TimeRoute";
import { JobEditValueRoute } from "./Routes/JobEditValueRoute";
import { LoginRoute } from "./Routes/LoginRoute";
import { KilometersRoute } from "./Routes/KilometersRoute";
import { SignatureRoute } from "./Routes/SignatureRoute";
import { JoblistRoute } from "./Routes/JoblistRoute";
import { api } from "../../Services/api.service";

export class WebApi {
  private baseApi: AxiosInstance = api;

  login = new LoginRoute(this.baseApi);
  driver = new DriverRoute(this.baseApi);
  time = new TimeRoute(this.baseApi);
  jobEditValue = new JobEditValueRoute(this.baseApi);
  kilometers = new KilometersRoute(this.baseApi);
  signature = new SignatureRoute(this.baseApi);
  joblist = new JoblistRoute(this.baseApi);
}
