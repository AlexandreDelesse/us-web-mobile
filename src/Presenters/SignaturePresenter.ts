import { AxiosError } from "axios";
import { ISignature, SignatureModel } from "../Models/SignatureModel";
import ReactSignatureCanvas from "react-signature-canvas";

export interface ISignatureView {
  updateSignature: (signature: SignatureViewDTO | null) => any;
  showError: (error: Error | AxiosError | null) => any;
  setLoading: (loading: boolean) => any;
  setEmpty: (isEmpty: boolean) => any;
}

export interface SignatureViewDTO {
  data: string;
  signedAt: string;
  signedOn: string;
}

export class SignaturePresenter {
  private model = SignatureModel.getInstance();
  private view;

  constructor(view: ISignatureView) {
    this.view = view;
  }

  async init(jobId: string) {
    try {
      this.view.setLoading(true);
      const signature = await this.model.loadSignature(jobId);
      this.updateView(signature);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError || error instanceof Error)
        this.view.showError(error);
      else this.view.showError(new Error("Unknown error occured"));
    } finally {
      this.view.setLoading(false);
    }
  }

  updateView(signature: ISignature | undefined) {
    if (!signature) this.view.updateSignature(null);
    else {
      this.view.updateSignature(
        this.formatSignature(
          signature.data,
          new Date(signature.dateTime).toLocaleTimeString(),
          new Date(signature.dateTime).toLocaleDateString()
        )
      );
    }
  }

  formatSignature(data: string, signedAt: string, signedOn: string) {
    return {
      data,
      signedAt,
      signedOn,
    };
  }

  async saveSignature(
    signRef: ReactSignatureCanvas | null,
    jobId: string | undefined
  ) {
    if (!signRef || !jobId) return;
    try {
      const data = signRef.getTrimmedCanvas().toDataURL();
      const dateTime = new Date().toISOString();
      await this.model.updateSignature(jobId, { data, dateTime });
      this.init(jobId);
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error)
        this.view.showError(error);
      else this.view.showError(new Error("Unknown error occured"));
    }
  }

  clearSignature(signRef: ReactSignatureCanvas | null) {
    if (!signRef) return;
    signRef.clear();
    this.view.setEmpty(true);
  }
}
