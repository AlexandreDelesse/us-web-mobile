import {
  Box,
  Button,
  Divider,
  IconButton,
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
import ConstraintSelect from "./Select/ConstraintSelect";
import DeleteIcon from "@mui/icons-material/Delete";

export default function LogActions() {
  const [actions, setActions] = useState<Action[]>([]);

  const handleAddAction = () => {
    if (hasEmptyAction()) return;
    setActions((old) => [...old, { ActionTypeId: undefined }]);
  };

  const handleDeleteAction = (id: string) => alert("Pas encore implémenté");

  const hasEmptyAction = () => actions.some((action) => isActionEmpty(action));
  const isActionEmpty = (action: Action) => !!action.ActionTypeId;

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "whitesmoke",
        borderRadius: 2,
      }}
    >
      <Typography marginY={1} variant="h6">
        Actions à entreprendre
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {actions.map((action, index) => (
          <ActionForm onDelete={handleDeleteAction} key={index} />
        ))}
      </Box>
      <Button
        onClick={handleAddAction}
        sx={{ marginTop: 2 }}
        startIcon={<AddIcon />}
      >
        Ajouter une action
      </Button>
    </Box>
  );
}

export function ActionForm(props: { onDelete: (id: string) => void }) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField size="small" label="Description" />
      <NatureSelect />
      <ConcerningSelect />
      <ActionSelect />
      <ActorSelect />
      <ConstraintSelect />
      <IconButton onClick={() => props.onDelete}>
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
}
