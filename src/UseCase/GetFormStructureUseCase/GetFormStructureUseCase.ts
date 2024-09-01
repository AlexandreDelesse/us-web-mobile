import { useParams } from "react-router-dom";
import { apiGetFormStructure } from "../../DataSource/api";
import { FieldInfos } from "../../Domain/FormStructure";

export default function GetFormStructureUseCase() {
  const { id } = useParams();

  // const getValue = (list: { name: string; value: any }[], name: string) => {
  //   const field = list.find((f) => f.name === name);
  //   if (field) return field.value;
  //   else return "";
  // };

  const execute = async (): Promise<FieldInfos[]> => {
    try {
      if (!id) throw new Error("Aucun id");

      const formStructure = await apiGetFormStructure(id);
      return formStructure;
    } catch (error) {
      throw error;
    }
  };
  return { execute };
}
