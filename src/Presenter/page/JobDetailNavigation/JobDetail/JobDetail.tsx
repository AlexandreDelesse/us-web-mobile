import { ReactNode } from "react";
import JobDetailViewModel from "./JobDetailViewModel";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FromTo from "../../../components/Utils/FromTo/FromTo";
import EditableBeneficiary from "./Views/EditableBeneficiary";
import StepProgressView from "./StepProgress/StepProgressView";
import ErrorHandler from "../../../components/ErrorHandler/ErrorHandler";
import LogoLoader from "../../../../SharedComponents/LogoLoader";
import PropertyDisplay from "../../../../Components/Template/PropertyDisplay";

export default function JobDetail() {
  const { jobDetail, isLoading, error } = JobDetailViewModel();

  if (isLoading) return <LogoLoader />;
  if (!jobDetail) return <ErrorHandler error={error} />;

  //TODO: Factoriser les composants graphiques
  //TODO: Refaire propre et implementer stepper
  return (
    <Box sx={{ marginBottom: 5 }}>
      <EditableBeneficiary beneficiary={jobDetail.beneficiary} />
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        Né le {jobDetail.beneficiary.ddn} - {jobDetail.beneficiary.age}
      </Typography>

      <StepProgressView />
      <Card elevation={0} sx={{ marginY: 1 }}>
        <CardContent>
          <PropertyDisplay
            contentColor="orange"
            title="Téléphone"
            content={
              jobDetail.beneficiary.phones.length > 0
                ? jobDetail.beneficiary.phones.map((phone) => (
                    <div>{phone}</div>
                  ))
                : "Pas de numéro enregistré"
            }
          ></PropertyDisplay>
          <PropertyDisplay
            title="Prise en charge"
            content={jobDetail.schedule}
          />

          <PropertyDisplay
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
        <PropertyDisplay title="Commentaire" content={jobDetail.comments} />
      )}

      {/* <StepProgressDecorator  /> */}
    </Box>
  );
}
