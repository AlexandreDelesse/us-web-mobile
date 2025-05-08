import React, { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceNature } from "../../../Services/referenceData.service";
import AsyncSelect from "./AsyncSelect";

interface NatureSelectProps {
  value: string;
  onChange?: (value: string) => any;
  readonly?: boolean;
}
export default function NatureSelect(props: NatureSelectProps) {
  const req = useRequest(["reference", "nature"], getReferenceNature);

  const handleIdChanges = (id: string) => {
    props.onChange && props.onChange(id);
  };

  return (
    <AsyncSelect
      readOnly
      value={props.value}
      label="Nature"
      req={req}
      onChange={handleIdChanges}
    />
  );
}
