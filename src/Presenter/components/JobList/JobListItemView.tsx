import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { ShortJob } from "../../../Domain/ShortJob";
import TransportMode from "../Utils/TransportMode/TransportMode";
import TransportSens from "../Utils/TransportSens/TransportSens";
import FromTo from "../Utils/FromTo/FromTo";
import AcknowledgeButton from "./AcknoledgeButton/AcknowledgeButton";

interface IJobListItemViewProps {
  shortJob: ShortJob;
  onClickOnItem: (itemId: string) => void;
}

export default function JobListItemView(props: IJobListItemViewProps) {
  const { shortJob, onClickOnItem } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((old) => !old);

  const handleOnClickOnItem = () => {
    onClickOnItem(shortJob.jobId);
  };

  return (
    <Card className="my-2" elevation={0}>
      <CardActionArea sx={{ paddingX: 0 }} onClick={toggleExpand}>
        <Box
          sx={{ display: "grid", gridTemplateColumns: "4px 1fr", padding: 1 }}
        >
          <Box
            sx={{
              paddingY: 0,
              backgroundColor: shortJob.isAck ? "#479f76" : "#ffcd39",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 1,
              ":last-child": { padding: 0 },
            }}
          >
            <div>
              <Typography variant="body1">{shortJob.patient}</Typography>

              <Typography>
                <TransportMode mode={shortJob.transportMode} /> -{" "}
                <TransportSens sens={shortJob.transportSens} />
              </Typography>
              <Typography variant="button" color="primary">
                {shortJob.schedule}
              </Typography>
            </div>

            <ExpandIcon isExpanded={isExpanded} />
          </CardContent>
        </Box>
      </CardActionArea>
      <Collapse unmountOnExit in={isExpanded}>
        <CardContent>
          <FromTo from={shortJob.departure} to={shortJob.arrival} />
        </CardContent>
        <CardActions sx={{ display: "flex" }}>
          <>
            {!shortJob.isAck ? (
              <AcknowledgeButton jobId={shortJob.jobId} /> 
            ) : (
              <Button
                sx={{ width: "100%" }}
                startIcon={<VisibilityIcon />}
                variant="contained"
                onClick={handleOnClickOnItem}
              >
                Détail
              </Button>
            )}
          </>
        </CardActions>
      </Collapse>
    </Card>
  );
}

interface ExpandIconProps {
  isExpanded: boolean;
}
function ExpandIcon(props: ExpandIconProps) {
  const { isExpanded } = props;
  if (isExpanded) return <KeyboardArrowDownIcon />;
  return <KeyboardArrowRightIcon />;
}
