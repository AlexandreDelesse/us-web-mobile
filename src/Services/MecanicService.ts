import { api } from "./ApiService";

const getMecanicLogs = async (crewId: number) => {
  try {
    const mecanicLogs = await api.get(`MecanicLog/${crewId}`);
    return mecanicLogs.data;
  } catch (error) {
    return [];
  }
};

export { getMecanicLogs };
