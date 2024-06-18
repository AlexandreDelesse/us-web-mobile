import React from "react";
import SignatureViewModel from "./SignatureViewModel";
import ReactSignatureCanvas from "react-signature-canvas";
import "./signature.css";

import { Box, Button, Card, Typography } from "@mui/material";
import ErrorHandler from "../../../components/ErrorHandler/ErrorHandler";

export default function SignatureView() {
  const viewModel = SignatureViewModel();
  const {
    signature,
    setSignRef,
    saveSignature,
    clearSignature,
    error,
    isLoading,
    displayDate,
    displayTime,
  } = viewModel;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorHandler error={error} />;

  if (signature)
    return (
      <>
        <Box
          sx={{ backgroundImage: `url(${signature})` }}
          className="mt-3 imgContainer"
        />
        <Typography sx={{ marginTop: 4 }}>
          Signé le {displayDate} à {displayTime}
        </Typography>
      </>
    );

  return (
    <>
      <Card className="cardCanvas">
        <ReactSignatureCanvas
          penColor="blue"
          canvasProps={{ className: "sigCanvas" }}
          ref={(data) => setSignRef(data)}
        />
      </Card>
      <div className="mt-3">
        <Button variant="contained" color="success" onClick={saveSignature}>
          Envoyer
        </Button>
        <Button color="secondary" onClick={clearSignature}>
          Effacer
        </Button>
      </div>
    </>
  );
}
