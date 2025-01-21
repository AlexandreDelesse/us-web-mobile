import { Button, Card } from "@mui/material";
import React from "react";
import ReactSignatureCanvas from "react-signature-canvas";

interface SignatureFormViewProps {
  signRef: React.MutableRefObject<ReactSignatureCanvas | null>;
  onSave: () => any;
  onClear: () => any;
  onEnd: () => any;
  disableButtons: boolean;
}
export default function SignatureFormView(props: SignatureFormViewProps) {
  const { signRef, onClear, onSave, onEnd, disableButtons } = props;
  return (
    <>
      <Card className="cardCanvas">
        <ReactSignatureCanvas
          penColor="blue"
          canvasProps={{ className: "sigCanvas" }}
          ref={signRef}
          onEnd={onEnd}
        />
      </Card>
      <div className="mt-3">
        <Button
          variant="contained"
          color="success"
          onClick={onSave}
          disabled={disableButtons}
        >
          Envoyer
        </Button>
        <Button color="secondary" onClick={onClear} disabled={disableButtons}>
          Effacer
        </Button>
      </div>
    </>
  );
}
