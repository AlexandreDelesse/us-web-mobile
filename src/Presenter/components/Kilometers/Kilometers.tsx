import { useQuery } from "@tanstack/react-query";
import React from "react";
import { webApi } from "../../../DataSource/api";
import { getCrew } from "../../../DataSource/localStorage";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { Typography } from "@mui/material";

export default function Kilometers() {
  const crew = getCrew();

  const { error, isPending, data } = useQuery({
    queryKey: ["kilometers"],
    queryFn: () => webApi.kilometers.get(crew?.crewId),
  });
  if (isPending)
    return <Typography>Récupération du dernier kilometrage</Typography>;

  if (error) return <Typography>Une erreur est survenue</Typography>;

  return (
    <div>
      {data && <Typography>{data.km}</Typography>}
      <ErrorHandler error={error} />
    </div>
  );
}
