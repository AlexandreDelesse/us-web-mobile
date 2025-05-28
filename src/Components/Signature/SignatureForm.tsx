import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { postSignature } from "../../Services/signature.service";
import ReactSignatureCanvas from "react-signature-canvas";
import { Button, Card } from "@mui/material";

export default function SignatureForm() {
  const { id } = useParams();

  const signRef = useRef<ReactSignatureCanvas | null>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["signature", id],
    mutationFn: (signature: string) => postSignature(id!, signature),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["signature", id] }),
  });

  const saveSignature = () => {
    const imgDataUrl = generateImageDataUrl();
    mutation.mutate(imgDataUrl);
  };

  const clearSignature = () => signRef.current?.clear();

  const generateImageDataUrl = () => {
    if (!signRef.current) return "";
    const trimmedCanvas = signRef.current.getTrimmedCanvas();
    return trimmedCanvas.toDataURL();
  };

  return (
    <>
      <Card className="cardCanvas">
        <ReactSignatureCanvas
          penColor="blue"
          canvasProps={{ className: "sigCanvas" }}
          ref={signRef}
          //   onEnd={onEnd}
        />
      </Card>
      <div className="mt-3">
        <Button
          variant="contained"
          color="success"
          onClick={saveSignature}
          disabled={mutation.isPending || signRef.current?.isEmpty()}
        >
          Envoyer
        </Button>
        <Button
          color="secondary"
          onClick={clearSignature}
          disabled={signRef.current?.isEmpty()}
        >
          Effacer
        </Button>
      </div>
    </>
  );
}
