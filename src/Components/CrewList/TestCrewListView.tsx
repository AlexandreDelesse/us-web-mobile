import React from "react";
import { ICrew } from "../../Models/CrewModel";
import { Typography } from "@mui/material";

export default function TestCrewListView({ crews }: { crews: ICrew[] }) {
  return (
    <>
      <Typography>{crews.length} Equipage/s</Typography>
      <ul>
        {crews.map((crew: ICrew) => (
          <li key={crew.crewId}>{crew.immat}</li>
        ))}
      </ul>
    </>
  );
}
