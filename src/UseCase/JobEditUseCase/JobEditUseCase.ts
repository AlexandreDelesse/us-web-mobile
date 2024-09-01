import { useParams } from "react-router-dom";
import { webApi } from "../../DataSource/api";

export default function JobEditUseCase() {
  const { id } = useParams();

  const getJobEdit = async () => {
    try {
      if (!id) throw Error("Aucun JobId valide");
      const editValues = await webApi.jobEditValue.get(id);
      return editValues;
    } catch (error) {
      throw error;
    }
  };

  const patchJobEdit = async (data: any[]) => {
    try {
      if (!id) throw Error("Aucun Id valide");
      let editValues = data.map((el) => ({
        attributName: el.name,
        attributValue: el.value,
      }));
      const patchResponse = await webApi.jobEditValue.patch(id, editValues);
      return patchResponse;
    } catch (error) {
      throw error;
    }
  };

  return { getJobEdit, patchJobEdit };
}
