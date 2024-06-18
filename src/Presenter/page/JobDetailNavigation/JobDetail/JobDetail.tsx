import React, { ReactNode } from "react";
import { useParams } from "react-router-dom";
import JobDetailViewModel from "./JobDetailViewModel";
import PatientDisplayName from "./Views/PatientDisplayName";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FromTo from "../../../components/Utils/FromTo/FromTo";
import StepProgress from "./StepProgress/StepProgress";
import StepProgressDecorator from "./StepProgress/StepProgressDecorator";
import EditableBeneficiary from "./Views/EditableBeneficiary";
import TransportMode from "../../../components/Utils/TransportMode/TransportMode";
import StepProgressView from "./StepProgress/StepProgressView";
import { Modal } from "react-bootstrap";

export default function JobDetail() {
  const { jobDetail, isLoading, error } = JobDetailViewModel();

  if (!jobDetail) return <div>Pas de detail disponible</div>;
  if (isLoading) return <div>loading</div>;

  //TODO: Factoriser les composants graphiques
  //TODO: Refaire propre et implementer stepper
  return (
    <Box>
      <EditableBeneficiary beneficiary={jobDetail.beneficiary} />

      <Card elevation={0} sx={{ marginY: 1 }}>
        <CardContent>
          <CustomTypography
            title="Prise en charge"
            content={jobDetail.schedule}
          />

          <CustomTypography
            title="Transport"
            content={<TransportMode mode={parseInt(jobDetail.transportMode)} />} //TODO: Remove parseint and act with numbers
          />
        </CardContent>
      </Card>

      <Card className="my-2" elevation={0} sx={{ marginY: 1 }}>
        <CardContent>
          <FromTo from={jobDetail.departure} to={jobDetail.arrival} />
        </CardContent>
      </Card>

      {jobDetail.comments && (
        <CustomTypography title="Commentaire" content={jobDetail.comments} />
      )}

      {/* <StepProgressDecorator  /> */}
      <StepProgressView />
    </Box>
  );
}

const CustomTypography = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  return (
    <>
      <Typography variant="caption">{title}</Typography>
      <Typography className="fw-bold" variant="body1" color="primary">
        {content}
      </Typography>
    </>
  );
};
