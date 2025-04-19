import { Log } from "../Components/LogManagement/Log";
import { api } from "./api.service";

const getMecanicLogsByCrewId = async (crewId: number) => {
  try {
    const mecanicLogs = await api.get(`MecanicLog/${crewId}`);
    return mecanicLogs.data;
  } catch (error) {
    return [];
  }
};

const sendMecanicLog = async (crewId: number, constat: string) => {
  try {
    const request = await api.put("MecanicLog", { crewId, constat });
    return request.data;
  } catch (error) {
    throw error;
  }
};

const getLogManager = async (): Promise<Log[]> => {
  try {
    const request = await api.get("LogManager");
    return request.data;
  } catch (error) {
    throw error;
  }
};

const getLogFromLogManager = async (id: string | null) => {
  try {
    if (!id) throw new Error("l'ID n'existe pas.");

    const req = await getLogManager();
    return req.find((el) => el.logId === parseInt(id));
  } catch (error) {
    throw error;
  }
};

export {
  getMecanicLogsByCrewId,
  sendMecanicLog,
  getLogManager,
  getLogFromLogManager,
};
