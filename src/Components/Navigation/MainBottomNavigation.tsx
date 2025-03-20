import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";
import { useNavigate } from "react-router-dom";

export default function MainBottomNavigation() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  const onChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
    const link = getTabLink(newValue);
    navigate(link);
  };

  return (
    <Paper
      sx={{
        zIndex: 1000,
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        gridRow: 2,
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={onChange}>
        <BottomNavigationAction label="Missions" icon={<AssignmentIcon />} />
        <BottomNavigationAction label="Véhicule" icon={<TaxiAlertIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

const getTabLink = (tabIndex: number) => {
  switch (tabIndex) {
    case 0:
      return "/";
    case 1:
      return "vehicle";
    default:
      return "/";
  }
};
