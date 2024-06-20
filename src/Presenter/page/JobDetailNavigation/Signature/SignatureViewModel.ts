import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactSignatureCanvas from "react-signature-canvas";
import GetSignatureUseCase from "../../../../UseCase/GetSignatureUseCase/GetSignatureUseCase";
import UpdateSignatureUseCase from "../../../../UseCase/UpdateSignatureUseCase/UpdateSignatureUseCase";
import { Signature } from "../../../../Domain/Signature";
import { SignatureCmd } from "../../../../DataSource/WebApi/Routes/SignatureRoute";

export default function SignatureViewModel() {
  const getSignatureUseCase = GetSignatureUseCase();
  const updateSignatureUseCase = UpdateSignatureUseCase();
  const { id } = useParams();

  const [signature, setSignature] = useState("");
  const [signedAt, setSignedAt] = useState("");
  const [signRef, setSignRef] = useState<ReactSignatureCanvas | null>(null);

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

  const { data, isLoading, error } = useQuery({
    queryKey: ["signature", id],
    queryFn: () => getSignatureUseCase.execute(id || ""),
  });

  const { mutate } = useMutation({
    mutationFn: (signCmd: SignatureCmd) =>
      updateSignatureUseCase.execute(signCmd),
  });

  useEffect(() => {
    if (!data) return;
    setSignature(data.data);
    setSignedAt(data.dateTime);
  }, [data]);

  const saveSignature = () => {
    if (!id) return;
    const imgDataUrl = generateImageDataUrl();
    const now = new Date();
    const isoDate = now.toISOString();
    mutate({ jobId: id, signature: { data: imgDataUrl, dateTime: isoDate } });
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
