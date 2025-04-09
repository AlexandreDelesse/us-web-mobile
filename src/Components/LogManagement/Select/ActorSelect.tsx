import { useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceActors } from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";

export default function ActorSelect() {
  const req = useRequest(["reference", "actors"], getReferenceActors);
  const [id, setId] = useState("");

  const handleActionChanges = (id: string) => setId(id);

  return (
    <AsyncSelect label="Acteur" req={req} onChange={handleActionChanges} />
  );
}
