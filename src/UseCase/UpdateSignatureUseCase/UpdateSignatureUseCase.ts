import { SignatureCmd } from "../../DataSource/WebApi/Routes/SignatureRoute";
import { apiPutSignature, webApi } from "../../DataSource/api";
import { getCrew } from "../../DataSource/localStorage";
import { Signature } from "../../Domain/Signature";

export default function UpdateSignatureUseCase() {
  const execute = async (signature: SignatureCmd) => {
    try {
      webApi.signature.put(signature);
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
