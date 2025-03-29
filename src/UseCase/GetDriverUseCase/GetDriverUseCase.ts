import { UseCase } from "../UseCase";
import { DriverSwapQuery } from "../../Domain/Queries/DriverSwapQuery";
import { apiGetDriver } from "../../DataSource/api";
import { getCrew } from "../../DataSource/localStorage";

export default function GetDriverUseCase(): UseCase<DriverSwapQuery, any> {
  const execute = async () => {
    try {
      const crew = getCrew();
      console.log(crew);
      if (!crew) throw new Error("Veuillez vous connecter !");
      const response = await apiGetDriver(crew.crewId);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return { execute };
}
