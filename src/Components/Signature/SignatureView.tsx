import React from "react";
import "./signature.css";
import { SignatureViewDTO } from "../../Presenters/SignaturePresenter";
import { Box, Typography } from "@mui/material";

export interface SignatureViewProps {
  signature: SignatureViewDTO;
}

export default function SignatureView(props: SignatureViewProps) {
  const { signature } = props;
  return (
    <>
      <Box
        sx={{ backgroundImage: `url(${signature.data})` }}
        className="mt-3 imgContainer"
      />
      <Typography sx={{ marginTop: 4 }}>
        Signé le {signature.signedOn} à {signature.signedAt}
      </Typography>
    </>
  );
}
