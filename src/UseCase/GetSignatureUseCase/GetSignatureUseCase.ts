import { useParams } from "react-router-dom";
import { apiGetSignature } from "../../DataSource/api";
import { Signature } from "../../Domain/Signature";
import { UseCase } from "../UseCase";
import { AxiosError } from "axios";
import { STATUS_CODES } from "http";
import { Code } from "@mui/icons-material";

export default function GetSignatureUseCase(): UseCase<Signature, any> {
  const { id } = useParams();
  const execute = async () => {
    try {
      if (!id)
        throw new Error("Impossible de récuperer le jobId depuis cette page");
      const signature = await apiGetSignature(id);
      return signature;
    } catch (error) {
      if (error instanceof AxiosError)
        if (
          error.response?.status === 400 &&
          error.response.data.includes("Pas de signature")
        )
          return { dateTime: "", data: "" };
        else throw error;
      else throw error;
    }
  };

  return { execute };
}

//TODO: Créer un composant DateTime display qui gererait l'affichage de la date et de l'heure a partir d'une date (ex: isoString => 'le xx/xx/xxxx à xxhxx')
