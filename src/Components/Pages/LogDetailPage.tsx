import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import LogoLoader from "../../SharedComponents/LogoLoader";
import ErrorHandler from "../../Presenter/components/ErrorHandler/ErrorHandler";
import LogResume from "../LogManagement/LogResume";
import { Box } from "@mui/material";

import useLogByLogId from "../../Hooks/useLogByLogId";
import Analyse from "../Analyse/Analyse";
import BackButton from "../../Presenter/components/BackButton/BackButton";

export default function LogDetailPage() {
  const { logId } = useParams();
  const location = useLocation();

  const logReq = useLogByLogId(logId);

  if (logReq.isLoading) return <LogoLoader />;
  if (logReq.isError) return <ErrorHandler error={logReq.error} />;

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <BackButton label="Retour aux incidents" />
      <LogResume log={logReq.log} />
      <Analyse />
    </Box>
  );
}
