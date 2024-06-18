import { Box, Button, Skeleton } from "@mui/material";
import { TbSteeringWheel } from "react-icons/tb";
import DriverSwapViewModel from "../viewModel/DriverSwapViewModel";
import ErrorHandler from "../../ErrorHandler/ErrorHandler";

export default function DriverSwapView() {
  const {
    selectedDriver,
    isLoading,
    error,
    isError,
    updateDriver,
    isPending,
    isUpdateError,
    updateError,
  } = DriverSwapViewModel();

  if (isError || isUpdateError)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 50,
        }}
        bgcolor="lightgrey"
      >
        <ErrorHandler withoutStyle error={error} />
        <ErrorHandler withoutStyle error={updateError} />
      </Box>
    );

  if (isLoading || !selectedDriver || isPending)
    return <Skeleton variant="rectangular" height={50} width="100%" />;

  return (
    <Button
      disabled={isLoading}
      onClick={updateDriver}
      size="large"
      variant="contained"
      color="primary"
      startIcon={<TbSteeringWheel size={20} />}
      fullWidth
    >
      {selectedDriver.driverName}
    </Button>
  );
}
