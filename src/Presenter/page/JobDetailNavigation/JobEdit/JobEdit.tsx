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
    isPending,
  } = JobEditViewModel();

  if (isLoading || isRefetching) return <div>Loading</div>;

  if (!data) return <div>No data yet</div>;

  if (error) return <ErrorHandler error={error} />;

  return (
    <Box>
      {fields
        .sort((a, b) => a.index - b.index)
        .map((field: FieldInfos) => (
          <FormFactory
            key={field.name}
            componentProps={{
              ...field,
              setValue: onValueChanges,
            }}
            type={field.type}
          />
        ))}
      <Button disabled={isPending} onClick={handleOnSave}>
        Sauvegarder
      </Button>
    </Box>
  );
}
