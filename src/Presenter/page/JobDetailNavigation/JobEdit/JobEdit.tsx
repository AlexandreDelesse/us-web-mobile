import JobEditViewModel from "./JobEditViewModel";
import FormFactory from "./FormFactory/FormFactory";
import { Box, Button } from "@mui/material";
import { FieldInfos } from "../../../../Domain/FormStructure";
import ErrorHandler from "../../../components/ErrorHandler/ErrorHandler";

export default function JobEdit() {
  const {
    fields,
    onSave,
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

      <Button onClick={onSave}>Sauvegarder</Button>
    </Box>
  );
}
