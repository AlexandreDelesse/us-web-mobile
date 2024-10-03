import axios, { AxiosInstance } from "axios";
import { ShortJob } from "../../../Domain/ShortJob";
import { Instruction } from "../../../Domain/Instruction";

export interface ServiceInformations {
  jobList: ShortJob[];
  instructionList: Instruction[];
}

export class JoblistRoute {
  private baseApi: AxiosInstance;
  private path: string = "JobList";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  // async get(gCrewToken: string): Promise<ServiceInformations> {
  //   const axiosResponse = await this.baseApi.get(`JobList/${gCrewToken}`);
  //   const serviceInfos = {
  //     joblist: axiosResponse.data,
  //     instructions: axiosResponse.data.filter(
  //       (el: ShortJob, i: number) => i < 2
  //     ),
  //   };
  //   return serviceInfos;
  // }

    async get(intCrewId: number): Promise<ServiceInformations> {
      const axiosResponse = await this.baseApi.get(`JobList/${intCrewId}`);
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
