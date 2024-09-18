import { AxiosInstance } from "axios";
import { JobStatusQuery } from "../../../Domain/Queries/JobStatusQuery";
import { JobStatusCommand } from "../../../Domain/Commands/JobStatusCommand";

export interface JobStatusGetResponse {
  available: string | null;
  go: string | null;
  onSite: string | null;
}

export class TimeRoute {
  private baseApi: AxiosInstance;
  private path: string = "Time";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async get(gJobId: string): Promise<JobStatusGetResponse> {
    const axiosResponse = await this.baseApi.get(`Time/${gJobId}`);
    return axiosResponse.data;
  }

  async patch(steps: JobStatusCommand, gJobId: string) {
    const axiosResponse = await this.baseApi.patch(`Time/${gJobId}`, steps);
    return axiosResponse.data;
  }
}
