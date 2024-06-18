import { UseCase } from "../UseCase";
import { JobStatusQuery } from "../../Domain/Queries/JobStatusQuery";
import { webApi } from "../../DataSource/api";
import { useParams } from "react-router-dom";
import { JobStatusCommand } from "../../Domain/Commands/JobStatusCommand";

export default function PostTimeUseCase(): UseCase {
  const { id } = useParams();

  const execute = async (steps: JobStatusQuery) => {
    if (!id) throw new Error("Pas de jobId");
    try {
      const cmd: JobStatusCommand = {
        goTime: steps.go,
        onSiteTime: steps.onSite,
        terminatedTime: steps.available,
      };
      await webApi.time.patch(cmd, id);
    } catch (error) {
      throw error;
    }
  };
  return { execute };
}
