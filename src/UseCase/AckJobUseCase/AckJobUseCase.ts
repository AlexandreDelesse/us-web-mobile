import { apiPatchJobList } from "../../DataSource/api";
import { AckJobCmd } from "./AckJobCmd";

export default function AckJobUseCase() {
  const execute = async (cmd: AckJobCmd) => {
    try {
      await apiPatchJobList(cmd);
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
