import { Button, CircularProgress, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AcknowledgeButtonViewModel from "./AcknowledgeButtonViewModel";
import { ChangeEvent } from "react";

interface AcknoledgeButtonProps {
  jobId: string;
  icon?: boolean;
}

export default function AcknowledgeButton(props: AcknoledgeButtonProps) {
  const { jobId, icon } = props;
  const { onClickOnAck, isPending, error } = AcknowledgeButtonViewModel();
  //   const ackMutation = useAckJobMutation();

  //   const isLoading =
  //     ackMutation.variables?.jobId === jobId && ackMutation.isLoading;
  const isLoading = true;

  const handleOnAck = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    onClickOnAck(jobId);
  };

  if (icon)
    return (
      <IconButton
        color="success"
        onClick={(e) => handleOnAck(e)}
        disabled={isPending}
      >
        {isPending ? (
          <CircularProgress size={16} sx={{ color: "#fff" }} />
        ) : (
          <ThumbUpIcon color="primary" />
        )}
      </IconButton>
    );

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
      onClick={(e) => handleOnAck(e)}
      disabled={isPending}
    >
      Ok !
    </Button>
  );
}
