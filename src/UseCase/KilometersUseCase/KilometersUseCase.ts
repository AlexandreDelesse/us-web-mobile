import { webApi } from "../../DataSource/api";

const getKilometers = async (crewId: number) => {
  try {
    const kilometers = await webApi.kilometers.get(crewId);
    return kilometers;
  } catch (error) {
    throw error;
  }
};

interface kilometersData {
  crewId?: number;
  kilometers: string;
}
const setKilometers = async (params: kilometersData) => {
  try {
    if (!params.crewId) throw Error("No crew ID");
    const response = await webApi.kilometers.post(
      params.crewId,
      parseInt(params.kilometers)
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export { getKilometers, setKilometers };
