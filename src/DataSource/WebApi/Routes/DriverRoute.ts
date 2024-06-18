import axios, { AxiosInstance } from "axios";
import { DriverSwapQuery } from "../../../Domain/Queries/DriverSwapQuery";

export class DriverRoute {
  private baseApi: AxiosInstance;
  private path: string = "Driver";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async get(crewId: number): Promise<DriverSwapQuery> {
    const axiosResponse = await this.baseApi.get(`Driver/${crewId}`);
    return axiosResponse.data;
  }

  async post(crewId: number, driverId: number) {
    const axiosResponse = await this.baseApi.post(
      `Driver/${crewId}`,
      driverId,
      { headers: { "Content-Type": "application/json" } }
    );
    return axiosResponse.data;
  }
}
