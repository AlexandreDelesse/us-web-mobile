import { apiPutJobEditValue } from "../../DataSource/api";
import { JobEditValueCmd } from "./JobEditValueCmd";

export default function UpdateJobEditValueUseCase() {
  const execute = async (
    jobEditValueCmd: JobEditValueCmd[],
    gJobId: string
  ) => {
    await apiPutJobEditValue(jobEditValueCmd, gJobId);
  };
  return { execute };
}
