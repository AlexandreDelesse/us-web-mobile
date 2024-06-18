import React, { useState } from "react";
import { InputProps } from "../../../../../../Domain/FormStructure";
import OutlinedTextField from "../../../../../components/OutlinedTextField/OutlinedTextField";

export default function DatePicker(props: InputProps) {
  const { label, name, setValue, type, value } = props;

  const mapIsoToDatepicker = (iso: string) => {
    if (!iso) return "";
    return iso.split("T")[0];
  };

  const formatedToDatepicker = mapIsoToDatepicker(value);

  const updateDate = (e: any) => {
    const isoDate = new Date(e.target.value).toISOString();
    setValue(name, isoDate);
  };

  return (
    <OutlinedTextField
      label={label}
      type="date"
      name={name}
      onChange={updateDate}
      value={formatedToDatepicker}
      inputLabelprops={{ shrink: true }}
    />
  );
}
