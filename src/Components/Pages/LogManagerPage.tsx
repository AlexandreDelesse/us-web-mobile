import { Box, Typography } from "@mui/material";
import React from "react";
import LogManager from "../LogManagement/LogManager";
import LogManagerDataTable from "../LogManagement/LogManagerDataTable";

export default function LogManagerPage() {
  return (
    <Box sx={{ padding: 2, height: "90%" }}>
      <Typography marginY={1} variant="h6">
        Incidents sur les véhicules
      </Typography>

      <LogManagerDataTable />
    </Box>
  );
}
