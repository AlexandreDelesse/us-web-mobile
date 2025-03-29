import { Box } from "@mui/material";
import MainBottomNavigation from "../../../Components/Navigation/MainBottomNavigation";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "1fr auto", height: "100%" }}>
      <Box sx={{ gridRow: 1, overflowY: "auto", padding: 1, flex: 1 }}>
        <Outlet />
      </Box>
      <MainBottomNavigation />
    </Box>
  );
}
