import React, { useState } from "react";
import { Box, Button, FormControl, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import useEmailsFormViewModel from "./useEmailsFormViewModel";
import OutlinedTextField from "../../../../../../components/OutlinedTextField/OutlinedTextField";
import { InputProps } from "../../../../../../../Domain/FormStructure";

export default function EmailListFormView(props: InputProps) {
  const emailFormViewModel = useEmailsFormViewModel(props);
  const {
    emails,
    deleteEmail,
    updateEmail,
    addEmptyEmail,
    hasEmptyEmail,
    getError,
  } = emailFormViewModel;

  return (
    <div>
      {emails.map((email, index) => (
        <Box key={index} sx={{ display: "flex" }}>
          <OutlinedTextField
            value={email}
            onChange={(e) => updateEmail(e.target.value, index)}
            label={`Email ${index + 1}`}
            error={!!getError(index)}
            helperText={getError(index)?.msg}
            inputMode="email"
          />
          <IconButton
            onClick={() => deleteEmail(index)}
            sx={{ alignSelf: "baseline", mt: "8px" }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      ))}
      {!hasEmptyEmail && (
        <Button onClick={addEmptyEmail} startIcon={<AddCircleIcon />}>
          Ajouter un email
        </Button>
      )}
    </div>
  );
}
