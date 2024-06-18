import { Button, CircularProgress } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AcknowledgeButtonViewModel from "./AcknowledgeButtonViewModel";

interface AcknoledgeButtonProps {
  jobId: string;
}

export default function AcknowledgeButton(props: AcknoledgeButtonProps) {
  const { jobId } = props;
  const { onClickOnAck, isPending, error } = AcknowledgeButtonViewModel();
  //   const ackMutation = useAckJobMutation();

  //   const isLoading =
  //     ackMutation.variables?.jobId === jobId && ackMutation.isLoading;
  const isLoading = true;

  const handleOnAck = () => onClickOnAck(jobId);

  return (
    <Button
      sx={{ width: "100%" }}
      startIcon={
        isPending ? (
          <CircularProgress size={16} sx={{ color: "#fff" }} />
        ) : (
          <ThumbUpIcon />
        )
      }
      variant="contained"
      color="success"
      onClick={handleOnAck}
      disabled={isPending}
    >
      Ok !
    </Button>
  );
}
