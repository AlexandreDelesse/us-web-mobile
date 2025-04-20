import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useRequest from "../../Hooks/useRequest";
import {
  getLogFromLogManager,
  getLogManager,
} from "../../Services/mecanic.service";
import LogoLoader from "../../SharedComponents/LogoLoader";
import ErrorHandler from "../../Presenter/components/ErrorHandler/ErrorHandler";
import { Log } from "../LogManagement/Log";
import LogResume from "../LogManagement/LogResume";
import { Box, Button, Divider } from "@mui/material";
import LogActions from "../LogManagement/LogActions";
import { getAnalyseById } from "../../Services/analyse.service";
import axios from "axios";
import useLogByLogId from "../../Hooks/useLogByLogId";
import AnalyseResumeForm from "../Analyse/AnalyseResumeForm";
import SaveIcon from "@mui/icons-material/Save";
import useAnalyseById from "../../Hooks/useAnalyseById";
import { Analyse } from "../LogManagement/Analyse";
import usePostAnalyse from "../../Hooks/usePostAnalyse";

export default function LogDetailPage() {
  const { logId } = useParams();
  const location = useLocation();

  const [formData, setFormData] = useState<Analyse>({
    Actions: [],
    Analyze: "",
    AnalyzeBy: "",
    Concerning: -1,
    ImmobilizeVehicle: false,
    LogId: parseInt(logId || "-1"),
    Nature: -1,
  });

  const analyseReq = useAnalyseById(logId);
  const logReq = useLogByLogId(logId);
  const analysePost = usePostAnalyse(logId);

  useEffect(() => {
    if (!analyseReq.data) return;
    setFormData(analyseReq.data);
  }, [analyseReq.data]);

  const is404Error =
    analyseReq.isError &&
    axios.isAxiosError(analyseReq.error) &&
    analyseReq.error.response?.status === 404;

  if (logReq.isLoading || analyseReq.isLoading) return <LogoLoader />;
  if (logReq.isError && !is404Error)
    return <ErrorHandler error={logReq.error} />;

  const onFormDataChanges = (name: keyof Analyse, value: any) => {
    console.log("azeazeazeza", name, value);

    return setFormData((old) => ({ ...old, [name]: value }));
  };

  // const logDetail = request.data.find(
  //   (log: Log) => !logId || log.logId === parseInt(logId)
  // );
  // if (!logDetail) return <div>Pas de détail pour ce Log !</div>;

  const saveAnalyse = () => analysePost.mutate(formData);

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <LogResume log={logReq.log} />
      <AnalyseResumeForm analyse={formData} onChange={onFormDataChanges} />
      <LogActions />
      <Button
        onClick={saveAnalyse}
        sx={{ marginTop: 1 }}
        startIcon={<SaveIcon />}
        variant="contained"
        color="primary"
        disabled={analysePost.isPending}
      >
        Sauvegarder
      </Button>
    </Box>
  );
}
