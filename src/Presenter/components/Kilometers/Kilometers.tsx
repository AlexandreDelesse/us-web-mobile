import { useQuery } from "@tanstack/react-query";
import React from "react";
import { webApi } from "../../../DataSource/api";
import { getCrew } from "../../../DataSource/localStorage";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { Typography } from "@mui/material";

export default function Kilometers() {
  const crew = getCrew();

  const { error, data } = useQuery({
    queryKey: ["kilometers"],
    queryFn: () => webApi.kilometers.get(crew?.crewId),
  });
  return (
    <div>
      {data && <Typography>{data.km || "No data"}</Typography>}
      <ErrorHandler error={error} />
    </div>
  );
}
