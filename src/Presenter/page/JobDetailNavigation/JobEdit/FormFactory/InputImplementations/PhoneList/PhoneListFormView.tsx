import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { InputProps } from "../../../../../../../Domain/FormStructure";
import usePhonesFormViewModel from "./usePhonesFormViewModel";
import OutlinedTextField from "../../../../../../components/OutlinedTextField/OutlinedTextField";

export default function PhoneListFormView(props: InputProps) {
  const phoneFormViewModel = usePhonesFormViewModel(props);
  const {
    phones,
    addEmptyPhone,
    deletePhone,
    updatePhone,
    hasEmptyPhone,
    getError,
  } = phoneFormViewModel;

  return (
    <div>
      {phones.map((phone, index) => (
        <Box key={index} sx={{ display: "flex" }}>
          <OutlinedTextField
            value={phone}
            onChange={(e) => updatePhone(e.target.value, index)}
            label={`Téléphone ${index + 1}`}
            error={!!getError(index)}
            helperText={getError(index)?.msg}
            inputMode="tel"
          />
          <IconButton
            onClick={() => deletePhone(index)}
            sx={{ alignSelf: "baseline", mt: "8px" }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      ))}
      {!hasEmptyPhone && (
        <Button onClick={addEmptyPhone} startIcon={<AddCircleIcon />}>
          Ajouter un téléphone
        </Button>
      )}
    </div>
  );
}
