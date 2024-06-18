import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { InputProps } from "../../../../../../Domain/FormStructure";

export default function CheckboxInput(props: InputProps) {
  const { label, name, setValue, value } = props;

  const onClickOnCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, JSON.stringify(!booleanValue));
  };

  const booleanValue: boolean = value ? JSON.parse(value) : false;

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            onChange={onClickOnCheckBox}
            checked={booleanValue}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
