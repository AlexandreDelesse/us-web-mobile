import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactSignatureCanvas from "react-signature-canvas";
import GetSignatureUseCase from "../../../../UseCase/GetSignatureUseCase/GetSignatureUseCase";
import UpdateSignatureUseCase from "../../../../UseCase/UpdateSignatureUseCase/UpdateSignatureUseCase";
import { SignatureCmd } from "../../../../DataSource/WebApi/Routes/SignatureRoute";
import { apiGetSignature, webApi } from "../../../../DataSource/api";
import { AxiosError } from "axios";

export default function SignatureViewModel() {
  const { id } = useParams();

  const [signature, setSignature] = useState("");
  const [signedAt, setSignedAt] = useState("");
  const [signRef, setSignRef] = useState<ReactSignatureCanvas | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const [refresh, setRefresh] = useState(false);

  const getDisplayDateAndTime = (
    isoDate: string
  ): { displayDate: string; displayTime: string } => {
    if (!isoDate) return { displayDate: "", displayTime: "" };
    const date = new Date(isoDate);
    if (!date) return { displayDate: "", displayTime: "" };

    return {
      displayDate: date.toLocaleDateString(),
      displayTime: date.toLocaleTimeString(),
    };
  };

  useEffect(() => {
    if (!id) return;
    setIsloading(true);
    apiGetSignature(id)
      .then((data) => {
        setSignature(data.data);
        setSignedAt(data.dateTime);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof AxiosError)
          if (err.response?.status === 404) {
            setSignature("");
            setSignedAt("");
          } else setError(err);
        else setError(err);
        setIsloading(false);
      });
  }, [refresh]);

  const saveSignature = async () => {
    if (!id) return;
    const imgDataUrl = generateImageDataUrl();
    const now = new Date();
    const isoDate = now.toISOString();
    try {
      await webApi.signature.put({
        jobId: id,
        signature: { data: imgDataUrl, dateTime: isoDate },
      });
      setRefresh(!refresh);
    } catch (error) {}
  };

  const generateImageDataUrl = () => {
    if (!signRef) return "";
    const trimmedCanvas = signRef.getTrimmedCanvas();
    return trimmedCanvas.toDataURL();
  };

  const clearSignature = () => {
    if (!signRef) return;
    signRef.clear();
  };

  const { displayDate, displayTime } = getDisplayDateAndTime(signedAt);

  return {
    signature,
    setSignRef,
    saveSignature,
    clearSignature,
    error,
    isLoading,
    displayDate,
    displayTime,
  };
}
