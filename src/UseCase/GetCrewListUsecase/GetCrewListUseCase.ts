import { webApi } from "../../DataSource/api";

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
