import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Action } from "./Action";
import ActionSelect from "./Select/ActionSelect";
import ActorSelect from "./Select/ActorSelect";
import NatureSelect from "./Select/NatureSelect";
import ConcerningSelect from "./Select/ConcerningSelect";
import AddIcon from "@mui/icons-material/Add";

export default function LogActions() {
  const [actions, setActions] = useState<Action[]>([]);

  const handleAddAction = () => {
    if (hasEmptyAction()) return;
    setActions((old) => [...old, { ActionTypeId: undefined }]);
  };

  const hasEmptyAction = () => actions.some((action) => isActionEmpty(action));
  const isActionEmpty = (action: Action) => !!action.ActionTypeId;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        backgroundColor: "whitesmoke",
        borderRadius: 2,
      }}
    >
      <Typography marginY={1} variant="h6">
        Actions à entreprendre
      </Typography>
      <ActionForm />
      <Button sx={{width: "25%"}} startIcon={<AddIcon />} variant="contained">
        Ajouter une action
      </Button>
    </Box>
  );
}

export function ActionForm() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField size="small" label="Description" />
      <NatureSelect />
      <ConcerningSelect />
      <ActionSelect />
      <ActorSelect />
    </Box>
  );
}
