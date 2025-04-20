import { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceConcerning } from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";

interface ConcerningSelectProps {
  value: string;
  onChange: (value: string) => any;
}
export default function ConcerningSelect(props: ConcerningSelectProps) {
  const req = useRequest(["reference", "concerning"], getReferenceConcerning);

  const handleActionChanges = (id: string) => {
    props.onChange(id);
  };

  return (
    <AsyncSelect value={props.value} label="Concerne"  req={req} onChange={handleActionChanges} />
  );
}
