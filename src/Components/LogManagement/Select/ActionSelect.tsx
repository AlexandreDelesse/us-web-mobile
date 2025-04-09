import { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceActions } from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";

export default function ActionSelect() {
  const req = useRequest(["reference", "actions"], getReferenceActions);
  const [actionId, setActionId] = useState("");

  const handleActionChanges = (id: string) => setActionId(id);

  return (
    <AsyncSelect label="Action" req={req} onChange={handleActionChanges} />
  );
}
