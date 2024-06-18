import { AxiosInstance } from "axios";
import { CrewQuery } from "../../../Domain/Queries/CrewQuery";
import { LoginCmd } from "../../../Domain/Commands/LoginCmd";

export class LoginRoute {
  private baseApi: AxiosInstance;
  private path: string = "Login";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async get(): Promise<CrewQuery[]> {
    const axiosResponse = await this.baseApi.get(`Login`);
    return axiosResponse.data;
  }

  async post(credentials: LoginCmd) {
    const axiosResponse = await this.baseApi.patch(`Login`, credentials);
    return axiosResponse.data;
  }
}
