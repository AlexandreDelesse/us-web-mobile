import { UseCase } from "../UseCase";
import { webApi } from "../../DataSource/api";
import { useParams } from "react-router-dom";
import { JobStatusQuery } from "../../Domain/Queries/JobStatusQuery";

export default function GetTimeUseCase(): UseCase<JobStatusQuery> {
  const { id } = useParams();

  const setZoulouToIsoDate = (el: string | null) => {
    if (!el) return null;
    return el.charAt(el.length - 1) !== "Z" ? el + "Z" : el;
  };

  const execute = async () => {
    try {
      if (!id) throw new Error("Pas de jobId");
      const time = await webApi.time.get(id);
      const timeZoulou: JobStatusQuery = {
        available: setZoulouToIsoDate(time.available),
        go: setZoulouToIsoDate(time.go),
        onSite: setZoulouToIsoDate(time.onSite),
      };
      return timeZoulou;
    } catch (error) {
      throw error;
    }
  };
  return { execute };
}
