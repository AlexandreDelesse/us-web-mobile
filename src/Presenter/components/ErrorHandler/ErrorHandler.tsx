import { Alert } from "@mui/material";
import { AxiosError } from "axios";
import React from "react";

interface ErrorHandlerProps {
  error: Error | AxiosError | null;
  withoutStyle?: boolean;
}
export default function ErrorHandler(props: ErrorHandlerProps) {
  const { error, withoutStyle } = props;

  if (!error) return null;
  if (!withoutStyle)
    return (
      <Alert sx={{ marginY: 2 }} severity="warning">
        {error.message}
      </Alert>
    );

  return <div>{error.message}</div>;
}
