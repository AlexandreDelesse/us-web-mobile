import React from "react";
import OutlinedTextField from "../../../../../components/OutlinedTextField/OutlinedTextField";
import { InputProps } from "../../../../../../Domain/FormStructure";

export default function TextFieldInput(props: InputProps) {
  const { value, setValue, name, label } = props;

  const handleOnValueChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value: userValue } = e.target;
    setValue(inputName, userValue);
  };

  return (
    <OutlinedTextField
      label={label}
      onChange={handleOnValueChanges}
      name={name}
      value={value}
    />
  );
}
