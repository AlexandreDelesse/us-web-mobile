import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import StepProgressViewModel from "./StepProgressViewModel";
import OutlinedTextField from "../../../../components/OutlinedTextField/OutlinedTextField";
import "./stepProgress.css";

export default function StepProgressView() {
  const viewModel = StepProgressViewModel();

  const {
    activeStep,
    isError,
    isLoading,
    steps,
    onStepClick,
    getStepDisplayLabel,
    getStepDisplayTimestamp,
    activeStepIndex,
    toggleShowModal,
    showModal,
    tempTimestamp,
    updateTempTimestamp,
    onValidateUpdateStep,
    canReset,
    handleResetStep,
  } = viewModel;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Stepper activeStep={activeStepIndex} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={step.index}>
                <StepButton onClick={() => onStepClick(step)}>
                  <Typography>
                    {getStepDisplayLabel(step.label) || `Etape ${step.index}`}
                  </Typography>
                  <Typography variant="caption">
                    {getStepDisplayTimestamp(step.index)}
                  </Typography>
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>

      {/* TODO: Try Mui modal  */}
      <Modal open={showModal} onClose={toggleShowModal}>
        <Box sx={style}>
          <Typography variant="h5">Mettre à jour l'heure</Typography>
          <OutlinedTextField
            label="Choississez une heure"
            onChange={updateTempTimestamp}
            value={tempTimestamp}
            type="time"
          />
          <div className="d-flex gap-2 my-3">
            <Button
              onClick={onValidateUpdateStep}
              variant="contained"
              color="success"
            >
              Valider
            </Button>
            <Button
              onClick={toggleShowModal}
              color="secondary"
              variant="outlined"
            >
              Annuler
            </Button>
            {canReset() && (
              <Button onClick={handleResetStep} color="warning">
                Reset
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
