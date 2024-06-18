import { apiPutSignature, webApi } from "../../DataSource/api";
import { Signature } from "../../Domain/Signature";

export default function GetCrewListUsecase() {
  const execute = async () => {
    try {
      const response = await webApi.login.get();
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
