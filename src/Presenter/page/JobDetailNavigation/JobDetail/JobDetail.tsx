import { ReactNode } from "react";
import JobDetailViewModel from "./JobDetailViewModel";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FromTo from "../../../components/Utils/FromTo/FromTo";
import EditableBeneficiary from "./Views/EditableBeneficiary";
import StepProgressView from "./StepProgress/StepProgressView";

export default function JobDetail() {
  const { jobDetail, isLoading, error } = JobDetailViewModel();

  if (!jobDetail) return <div>Pas de detail disponible</div>;
  if (isLoading) return <div>loading</div>;

  //TODO: Factoriser les composants graphiques
  //TODO: Refaire propre et implementer stepper
  return (
    <Box>
      <EditableBeneficiary beneficiary={jobDetail.beneficiary} />
      <Typography variant="body1">
        Né le {jobDetail.beneficiary.ddn} - {jobDetail.beneficiary.age}
      </Typography>

      <Card elevation={0} sx={{ marginY: 1 }}>
        <CardContent>
          <CustomTypography
            title="Prise en charge"
            content={jobDetail.schedule}
          />

          <CustomTypography
            title="Transport"
            content={jobDetail.transportMode} //TODO: Remove parseint and act with numbers
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
