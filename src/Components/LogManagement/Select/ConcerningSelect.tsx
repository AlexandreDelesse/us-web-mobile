import { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceConcerning } from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";

export default function ConcerningSelect() {
  const req = useRequest(["reference", "concerning"], getReferenceConcerning);
  const [id, setId] = useState("");

  const handleActionChanges = (id: string) => setId(id);

  return (
    <AsyncSelect label="Concerne" req={req} onChange={handleActionChanges} />
  );
}
