import { useEffect, useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import {
  getReferenceConstraint,
  RequestActionWithDate,
} from "../../../Services/referenceData.service";

import AsyncSelect from "./AsyncSelect";
import { Box } from "@mui/material";
import DatePicker from "../../Shared/DatePicker";

export default function ConstraintSelect() {
  const req = useRequest(["reference", "constraints"], getReferenceConstraint);
  const [id, setId] = useState("");

  const selectedConstraint: RequestActionWithDate | undefined =
    req.data &&
    req.data.find(
      (constraint: RequestActionWithDate) => constraint.id === parseInt(id)
    );

  useEffect(() => console.log(selectedConstraint), [selectedConstraint]);

  const handleActionChanges = (id: string) => setId(id);

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <AsyncSelect label="Echéance" req={req} onChange={handleActionChanges} />
      {selectedConstraint && selectedConstraint.requiresDate && <DatePicker />}
    </Box>
  );
}
