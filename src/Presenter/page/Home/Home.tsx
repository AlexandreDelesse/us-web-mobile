import { Box } from "@mui/material";
import GetJobListUseCase from "../../../UseCase/GetJobListUseCase/GetJobListUseCase";
import DriverSwapView from "../../components/DriverSwap/views/DriverSwapView";
import JobList from "../../components/JobList/JobList";
import SwitchButton from "../../components/SwitchButton/SwitchButton";

export default function Home() {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
        <SwitchButton />
        <DriverSwapView />
      </Box>

      <JobList />
    </Box>
  );
}
