import { AxiosInstance } from "axios";
import { JobStatusQuery } from "../../../Domain/Queries/JobStatusQuery";
import { JobStatusCommand } from "../../../Domain/Commands/JobStatusCommand";

export class TimeRoute {
  private baseApi: AxiosInstance;
  private path: string = "Time";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async get(gJobId: string): Promise<JobStatusQuery> {
    const axiosResponse = await this.baseApi.get(`Time/${gJobId}`);
    return axiosResponse.data;
  }

  async patch(steps: JobStatusCommand, gJobId: string) {
    const axiosResponse = await this.baseApi.patch(`Time/${gJobId}`, steps);
    return axiosResponse.data;
  }
}
