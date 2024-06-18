import { apiGetJobDetail } from "../../DataSource/api";

export default function GetJobDetailUseCase() {
  const execute = async (gJobId: string | undefined) => {
    try {
      if (!gJobId) return;
      const jobDetail = await apiGetJobDetail(gJobId);
      return jobDetail;
    } catch (error) {
      throw error;
    }
  };
  return { execute };
}
