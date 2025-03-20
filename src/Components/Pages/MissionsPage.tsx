import { Box } from "@mui/material";
import React from "react";
import SwitchButton from "../../Presenter/components/SwitchButton/SwitchButton";
import DriverSwapView from "../../Presenter/components/DriverSwap/views/DriverSwapView";
import JobList from "../../Presenter/components/JobList/JobList";

export default function MissionsPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flex: 1, gap: 1, width: "100%" }}>
        <SwitchButton />
        <DriverSwapView />
      </Box>

      <JobList />
    </Box>
  );
}
