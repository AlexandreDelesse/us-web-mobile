import { getCrew } from "../../DataSource/localStorage";
import { webApi } from "../../DataSource/api";
import { UseCase } from "../UseCase";

export default function UpdateDriverUseCase(): UseCase<any, number> {
  const execute = async (driverId: number | undefined) => {
    try {
      const crew = getCrew();
      if (!crew) throw new Error("Veuillez vous connecter !");
      if (!driverId)
        throw new Error(
          "Une erreur est survenue lors de la selection du chauffeur"
        );
      const response = await webApi.driver.post(crew.crewId, driverId);
      return response;
    } catch (error) {
      throw error;
    }
  };
  return { execute };
}
