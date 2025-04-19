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
    // setActions((old) => [...old, { ActionTypeId: undefined }]);
  };

  const handleDeleteAction = (index: number) => {
    console.log(actions, index);
    setActions((old) => old.filter((action, i) => i !== index));
  };

  const hasEmptyAction = () => actions.some((action) => isActionEmpty(action));
  const isActionEmpty = (action: Action) => !!action.ActionTypeId;

  const handleOnChanges = (index: number, field: string, value: string) => {
    console.log(field, value);
    setActions((old) =>
      old.map((action, i) =>
        i === index ? { ...action, [field]: value } : action
      )
    );
  };

  const handleOnSave = () => {
    console.log("Action to send", actions);
  };

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
          <ActionForm
            onChange={handleOnChanges}
            onDelete={handleDeleteAction}
            key={index}
            index={index}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: 200 }}>
        <Button
          onClick={handleAddAction}
          sx={{ marginTop: 2 }}
          startIcon={<AddIcon />}
        >
          Ajouter une action
        </Button>
      </Box>
    </Box>
  );
}

interface ActionFormProps {
  onDelete: (id: number) => any;
  index: number;
  onChange: (index: number, field: string, value: string) => any;
}
export function ActionForm(props: ActionFormProps) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        size="small"
        label="Description"
        name="description"
        onChange={(e) =>
          props.onChange(props.index, e.target.name, e.target.value)
        }
      />
      <NatureSelect />
      <ConcerningSelect />
      <ActionSelect />
      <ActorSelect onChange={props.onChange} index={props.index} />
      <ConstraintSelect />
      <IconButton onClick={() => props.onDelete(props.index)}>
        <DeleteIcon color="error" />
      </IconButton>
    </Box>
  );
}
