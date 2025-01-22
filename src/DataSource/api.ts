import axios, { AxiosError } from "axios";
import { LoginCmd } from "../UseCase/LoginUseCase/LoginCmd";
import { Crew } from "../Domain/Crew";
import { AckJobCmd } from "../UseCase/AckJobUseCase/AckJobCmd";
import { JobDetail } from "../Domain/JobDetail";
import { FieldInfos } from "../Domain/FormStructure";
import { DriverSwapQuery } from "../Domain/Queries/DriverSwapQuery";
import { Signature } from "../Domain/Signature";
import { WebApi } from "./WebApi/WebApi";

const HOST =
  process.env.REACT_APP_API_URL || "https://intranet.urgencesante.fr";
const PORT = process.env.REACT_APP_API_PORT || 8090;
const BASE_ROUTE = process.env.REACT_APP_API_BASE_ROTUE || "/api/";

const BASE_URL = `${HOST}:${PORT}${BASE_ROUTE}`;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

const apiPostLogin = async (credentials: LoginCmd): Promise<Crew> => {
  credentials.vehicle = "";
  const axiosResponse = await api.post("Login", credentials);
  return axiosResponse.data;
};

const apiGetJobList = async (gCrewToken: string) => {
  const axiosResponse = await api.get(`JobList/${gCrewToken}`);
  return axiosResponse.data;
};

const apiPatchJobList = async (body: AckJobCmd) => {
  return (await api.patch("JobList", body)).data;
};

const apiGetJobDetail = async (gJobId: string): Promise<JobDetail> => {
  const axiosResponse = await api.get(`JobDetail/${gJobId}`);
  return axiosResponse.data;
};

const apiGetFormStructure = async (gJobId: string): Promise<FieldInfos[]> => {
  return (await api.get(`FormStructure/${gJobId}`)).data;
};

const apiGetSignature = async (gJobId: string): Promise<Signature> => {
  const axiosResponse = await api.get(`Signature/${gJobId}`);
  return axiosResponse.data;
};

const apiPutSignature = async (signature: any) => {
  const axiosResponse = await api.put("Signature", signature);
  return axiosResponse.data;
};

const apiPutJobEditValue = async (
  jobEditValueCmd: { name: string; value: string }[],
  gJobId: string
) => {
  const axiosResponse = await api.put("JobEditValue", jobEditValueCmd, {
    params: { gJobId },
  });
  return axiosResponse.data;
};

const apiGetDriver = async (crewId: number): Promise<DriverSwapQuery> => {
  const axiosResponse = await api.get(`Driver/${crewId}`);
  return axiosResponse.data;
};

const apiPostDriver = async (crewId: string, driverId: string) => {
  const axiosResponse = await api.post(`Driver/${crewId}`, driverId);
};

const webApi = new WebApi();

export {
  apiPostLogin,
  apiGetJobList,
  apiPatchJobList,
  apiGetJobDetail,
  apiGetFormStructure,
  apiGetSignature,
  apiPutSignature,
  apiPutJobEditValue,
  apiGetDriver,
  apiPostDriver,
  webApi,
};
