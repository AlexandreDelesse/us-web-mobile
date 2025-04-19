import React from "react";
import useLogManager from "./useLogManager";
import { Log } from "../Components/LogManagement/Log";

export default function useLogByLogId(id: string | undefined) {
  const { data: logs, isLoading, isError, error } = useLogManager();

  const log = id
    ? logs?.find((log: Log) => log.logId === parseInt(id))
    : undefined;

  return {
    log,
    isLoading,
    isError,
    error,
  };
}
