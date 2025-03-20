import React, { useEffect, useState } from "react";
import { getMecanicLogs } from "../../Services/MecanicService";
import { useParams } from "react-router-dom";
import { getCrew } from "../../DataSource/localStorage";
import { MecanicLog } from "./MecanicLog";
import { Alert, AlertTitle, Box, Card, Typography } from "@mui/material";

export default function MecanicLogs() {
  const [mecanicLogs, setMecanicLogs] = useState<MecanicLog[]>([]);
  const crew = getCrew();

  useEffect(() => {
    if (!crew) return;
    getMecanicLogs(crew.crewId).then((data) => setMecanicLogs(data));
  }, []);

  const mecanicLogList = (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {mecanicLogs.map((mecanicLog) => (
        <Alert severity={getLogStatus(mecanicLog.statut)} key={mecanicLog.id}>
          <AlertTitle>
            {new Date(mecanicLog.declaredDate).toLocaleDateString()}
          </AlertTitle>
          {mecanicLog.constat}
        </Alert>
      ))}
    </Box>
  );

  return (
    <Box>
      <Typography sx={{ my: 1 }}>Problèmes signalés</Typography>
      {mecanicLogList}
    </Box>
  );
}

const getLogStatus = (logStatus: string) => {
  switch (logStatus) {
    case "Nouveaux":
      return "warning";
    default:
      return "info";
  }
};
