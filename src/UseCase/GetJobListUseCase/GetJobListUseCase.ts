import { apiGetJobList } from "../../DataSource/api";
import { getCrew } from "../../DataSource/localStorage";

export default function GetJobListUseCase() {
  const execute = async () => {
    try {
      const crew = getCrew();
      const crewToken = crew ? crew.token : "";
      const jobList = await apiGetJobList(crewToken || "");
      return jobList;
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
