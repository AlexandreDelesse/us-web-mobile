import React, { ReactNode } from "react";
import { Log } from "./Log";
import { Box, TextField, Typography } from "@mui/material";
import DateDisplayer from "../Shared/DateDisplayer";
import { Label } from "@mui/icons-material";
import { Analyse } from "./Analyse";

interface LogResumeProps {
  log: Log;
}
export default function LogResume(props: LogResumeProps) {
  const { log } = props;

  return (
    <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: "whitesmoke" }}>
      <Typography marginY={1} variant="h6">
        Résumé de la déclaration
      </Typography>
      {DataPresenter("Véhicule", log.immatriculation)}
      {DataPresenter("Date", <DateDisplayer value={log.constatDate} />)}
      {DataPresenter("Ambulancier", "Not implemented - No Crew Model")}
      {DataPresenter("Description", log.constat)}
    </Box>
  );
}

const DataPresenter = (label: string, value: string | number | ReactNode) => {
  return (
    <Box display="flex" gap={1}>
      <Typography fontWeight={600}>{label}</Typography>

      <Typography variant="body1">: {value}</Typography>
    </Box>
  );
};
