import { api } from "../Services/ApiService";

export interface ISignature {
  dateTime: string;
  data: string;
}

export class SignatureModel {
  private static instance: SignatureModel;
  private signature?: ISignature;

  public static getInstance() {
    if (!this.instance) this.instance = new SignatureModel();
    return this.instance;
  }

  async loadSignature(jobId: string) {
    try {
      this.signature = (await api.get(`Signature/${jobId}`)).data;
      return this.signature;
    } catch (error) {
      throw error;
    }
  }

  async updateSignature(jobId: string, signature: ISignature) {
    try {
      await api.put(`Signature/${jobId}`, signature);
    } catch (error) {
      throw error;
    }
  }
}
