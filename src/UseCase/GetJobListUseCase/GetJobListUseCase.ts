import { apiGetJobList, webApi } from "../../DataSource/api";
import { getCrew } from "../../DataSource/localStorage";

export default function GetJobListUseCase() {
  const execute = async () => {
    try {
      const crew = getCrew();
      const crewToken = crew ? crew.token : "";
      const serviceInfos = await webApi.joblist.get(crewToken);
      const jobList = await apiGetJobList(crewToken || "");
      return serviceInfos;
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
