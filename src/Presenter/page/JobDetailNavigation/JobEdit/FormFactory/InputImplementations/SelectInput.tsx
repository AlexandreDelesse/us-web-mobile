import React from "react";
import { InputProps } from "../../../../../../Domain/FormStructure";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function SelectInput(props: InputProps) {
  const { name, setValue, value, options } = props;

  const onSelectChanges = (e: SelectChangeEvent<any>) => {
    setValue(name, e.target.value);
  };

  const formattedOptions = Object.keys(options).map((key) => ({
    label: options[key],
    value: key,
  }));

  return (
    <FormControl size="small" sx={{ width: "100%", my: 1 }}>
      <InputLabel>Type de contrat</InputLabel>
      <Select
        onChange={onSelectChanges}
        value={value || -1}
        label="Type de contrat"
      >
        <MenuItem value={-1}>Aucune sélection</MenuItem>
        {formattedOptions.map((contractType) => (
          <MenuItem key={contractType.value} value={contractType.value}>
            {contractType.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
