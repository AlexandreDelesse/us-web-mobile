import axios, { AxiosInstance } from "axios";
import { DriverSwapQuery } from "../../../Domain/Queries/DriverSwapQuery";

export interface JobEditValue {
  attributName: string;
  attributValue: string;
}

export class JobEditValueRoute {
  private baseApi: AxiosInstance;
  private path: string = "JobEditValue";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async get(jobId: string): Promise<{ name: string; value: any }[]> {
    const axiosResponse = await this.baseApi.get(`JobEdit/${jobId}`);
    return axiosResponse.data;
  }

  async patch(gJobId: string, data: JobEditValue[]) {
    const axiosResponse = await this.baseApi.patch(`JobEdit/${gJobId}`, data);
    return axiosResponse.data;
  }
}
