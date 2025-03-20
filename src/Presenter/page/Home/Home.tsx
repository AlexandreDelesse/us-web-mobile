import { Box } from "@mui/material";
import DriverSwapView from "../../components/DriverSwap/views/DriverSwapView";
import JobList from "../../components/JobList/JobList";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import MainBottomNavigation from "../../../Components/Navigation/MainBottomNavigation";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "1fr auto", height: "100%" }}>
      <Box sx={{ gridRow: 1, overflowY: "auto", padding: 2, flex: 1 }}>
        <Outlet />
      </Box>
      <MainBottomNavigation />
    </Box>
  );
}
