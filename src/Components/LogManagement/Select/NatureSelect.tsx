import React, { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceNature } from "../../../Services/referenceData.service";
import AsyncSelect from "./AsyncSelect";

export default function NatureSelect() {
  const req = useRequest(["reference", "nature"], getReferenceNature);
  const [id, setId] = useState("");

  const handleIdChanges = (id: string) => setId(id);

  return <AsyncSelect label="Nature" req={req} onChange={handleIdChanges} />;
}
