import { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceActions } from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";
import useGetReferenceActions from "../../../Hooks/Referance/useGetReferenceActions";

export default function ActionSelect() {
  const req = useGetReferenceActions()
  const [actionId, setActionId] = useState("");

  const handleActionChanges = (id: string) => setActionId(id);

  return (
    <AsyncSelect
      value={actionId}
      label="Action"
      req={req}
      onChange={handleActionChanges}
    />
  );
}
