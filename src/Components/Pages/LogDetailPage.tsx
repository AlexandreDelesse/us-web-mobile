import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useRequest from "../../Hooks/useRequest";
import { getLogManager } from "../../Services/mecanic.service";
import LogoLoader from "../../SharedComponents/LogoLoader";
import ErrorHandler from "../../Presenter/components/ErrorHandler/ErrorHandler";
import { Log } from "../LogManagement/Log";
import LogResume from "../LogManagement/LogResume";
import { Box, Divider } from "@mui/material";
import LogActions from "../LogManagement/LogActions";

export default function LogDetailPage() {
  const { logId } = useParams();
  const location = useLocation();

  const request = useRequest(["logManager"], getLogManager);

  if (request.isLoading) return <LogoLoader />;
  if (request.isError) return <ErrorHandler error={request.error} />;

  const logDetail = request.data.find(
    (log: Log) => !logId || log.logId === parseInt(logId)
  );

  if (!logDetail)
    return (
      <div>
        Pas de détail pour ce Log, si c'est une erreur faite la remonter !
      </div>
    );
  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <LogResume log={logDetail} />
      <LogActions />
    </Box>
  );
}
