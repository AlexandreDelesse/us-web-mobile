import { SignatureCmd } from "../DataSource/WebApi/Routes/SignatureRoute";
import { api } from "./api.service";

const getSignature = async (gJobId: string) => {
  try {
    const req = await api.get(`Signature/${gJobId}`);
    return req.data;
  } catch (error) {
    throw error;
  }
};

const postSignature = async (gJobId: string, signature: string) => {
  try {
    const req = await api.put(`Signature/${gJobId}`, { Data: signature });
    return req.data;
  } catch (error) {
    throw error;
  }
};

export { getSignature, postSignature };
