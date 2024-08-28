import JobEditViewModel from "./JobEditViewModel";
import FormFactory from "./FormFactory/FormFactory";
import { Alert, Box, Button } from "@mui/material";
import { FieldInfos } from "../../../../Domain/FormStructure";
import ErrorHandler from "../../../components/ErrorHandler/ErrorHandler";
import { AlertHeading } from "react-bootstrap";

export default function JobEdit() {
  const {
    fields,
    handleOnSave,
    error,
    isLoading,
    isRefetching,
    onValueChanges,
    data,
  } = JobEditViewModel();

  if (isLoading || isRefetching) return <div>Loading</div>;

  if (!data) return <div>No data yet</div>;

  if (error) return <ErrorHandler error={error} />;

  return (
    <Box>
      {fields.map((field: FieldInfos) => (
        <FormFactory
          key={field.name}
          componentProps={{
            ...field,
            setValue: onValueChanges,
          }}
          type={field.type}
        />
      ))}
      <Button onClick={handleOnSave}>Sauvegarder</Button>

      <Alert sx={{ marginTop: 4 }} severity="info">
        <AlertHeading>Pas de panique tout va bien</AlertHeading>
        Au changement de type de contrat le formulaire se sauvegarde et se
        recharge (grace à l'attribut "instantUpdate"). Tant que la persistance
        ne sera pas mise en place le type de contrat séléctionné est donc remis
        a zéro.
      </Alert>
    </Box>
  );
}
