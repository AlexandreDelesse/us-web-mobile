import { SignatureCmd } from "../../DataSource/WebApi/Routes/SignatureRoute";
import { webApi } from "../../DataSource/api";

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
