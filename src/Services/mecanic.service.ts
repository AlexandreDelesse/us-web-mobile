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

export { getMecanicLogsByCrewId, sendMecanicLog };
