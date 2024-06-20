import axios, { AxiosInstance } from "axios";
import { DriverSwapQuery } from "../../../Domain/Queries/DriverSwapQuery";
import { Signature } from "../../../Domain/Signature";

export interface SignatureCmd {
  signature: Signature;
  jobId: string | undefined;
}
export class SignatureRoute {
  private baseApi: AxiosInstance;
  private path: string = "Driver";

  constructor(axiosInstance: AxiosInstance) {
    this.baseApi = axiosInstance;
  }

  async put(params: SignatureCmd) {
    console.log(params.jobId)
    const axiosResponse = await this.baseApi.put(
      `/Signature/${params.jobId}`,
      params.signature
    );
    return axiosResponse.data;
  }
}
