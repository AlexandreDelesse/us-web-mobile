import React from "react";
import useAnalyseById from "../../Hooks/useAnalyseById";
import { useParams } from "react-router-dom";
import LogoLoader from "../../SharedComponents/LogoLoader";
import ErrorHandler from "../../Presenter/components/ErrorHandler/ErrorHandler";
import AnalyseDisplay from "./AnalyseDisplay";

export default function Analyse() {
  const { logId } = useParams();

  const analyseReq = useAnalyseById(logId);

  if (analyseReq.isLoading) return <LogoLoader />;
  if (analyseReq.isError) {
    if (analyseReq.error.response?.status === 404)
      return <div>Affichage du formulaire</div>;
    return <ErrorHandler error={analyseReq.error} />;
  }
  return <AnalyseDisplay analyse={analyseReq.data} />;
}
