import { useEffect, useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import { getReferenceActors } from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";

interface ActorSelectProps {
  onChange: (index: number, field: string, value: string) => any;
  index: number;
}
export default function ActorSelect(props: ActorSelectProps) {
  const req = useRequest(["reference", "actors"], getReferenceActors);
  const [id, setId] = useState("");

  const handleActionChanges = (id: string) => setId(id);

  useEffect(() => props.onChange(props.index, "ActorId", id.toString()), [id]);

  return (
    <AsyncSelect label="Acteur" req={req} onChange={handleActionChanges} />
  );
}
