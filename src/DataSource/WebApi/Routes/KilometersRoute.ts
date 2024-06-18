import axios, { AxiosInstance } from "axios";
import { DriverSwapQuery } from "../../../Domain/Queries/DriverSwapQuery";

interface km {
  hasKm: boolean;
  km: number;
}

export class KilometersRoute {
  private baseApi: AxiosInstance;
  private path: string = "Driver";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async get(crewId: number | undefined): Promise<km> {
    const axiosResponse = await this.baseApi.get(`Kilometers/${crewId}`);
    return axiosResponse.data;
  }

  async post(crewId: number, kilometers: number) {
    const axiosResponse = await this.baseApi.post(
      `Kilometers/${crewId}`,
      kilometers,
      { headers: { "Content-Type": "application/json" } }
    );
    return axiosResponse.data;
  }
}
