import { apiGetJobList, webApi } from "../../DataSource/api";
import { getCrew } from "../../DataSource/localStorage";

export default function GetJobListUseCase() {
  const execute = async () => {
    try {
      const crew = getCrew();
      const crewId = crew ? crew.crewId : 0;
      const serviceInfos = await webApi.joblist.get(crewId);
      return serviceInfos;
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
