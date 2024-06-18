import { Typography } from "@mui/material";
import React from "react";
import { Patient } from "../../../../../Domain/Patient";

interface PatientDisplayNameProps {
  patient?: Patient;
}

export default function PatientDisplayName(props: PatientDisplayNameProps) {
  const { patient } = props;

  if (!patient) return <div>No Patient</div>;

  return (
    <div>
      <Typography className="my-3" variant="h5">
        {patient.completeName}
      </Typography>
    </div>
  );
}
