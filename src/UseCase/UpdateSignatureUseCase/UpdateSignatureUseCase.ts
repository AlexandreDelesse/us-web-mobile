import { apiPutSignature } from "../../DataSource/api";
import { Signature } from "../../Domain/Signature";

export default function UpdateSignatureUseCase() {
  const execute = async (signature: Signature) => {
    try {
      apiPutSignature(signature);
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
