import { useParams } from "react-router-dom";
import { apiGetFormStructure, webApi } from "../../DataSource/api";
import { FieldInfos } from "../../Domain/FormStructure";

export default function GetFormStructureUseCase() {
  const { id } = useParams();

  const getValue = (list: { name: string; value: any }[], name: string) => {
    const field = list.find((f) => f.name === name);
    if (field) return field.value;
    else return "";
  };

  const execute = async (): Promise<FieldInfos[]> => {
    try {
      if (!id) throw new Error("Aucun id");

      const formStructure = await apiGetFormStructure(id);
      const jobEditValues = await webApi.jobEditValue.get(id);
      return formStructure.map((el) => ({
        ...el,
        value: getValue(jobEditValues, el.name),
      }));
    } catch (error) {
      throw error;
    }
  };
  return { execute };
}
