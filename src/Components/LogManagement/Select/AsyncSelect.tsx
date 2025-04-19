import React, { useEffect, useState } from "react";
import useRequest from "../../../Hooks/useRequest";
import {
  getReferenceActors,
  RequestAction,
} from "../../../Services/referenceData.service";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import ErrorHandler from "../../../Presenter/components/ErrorHandler/ErrorHandler";
import { UseQueryResult } from "@tanstack/react-query";

interface AsyncSelectProps {
  req: UseQueryResult<any, Error>;
  onChange: (id: string) => any;
  label: string;
}
export default function AsyncSelect(props: AsyncSelectProps) {
  const { req } = props;
  const [id, setId] = useState("");

  useEffect(() => props.onChange(id), [id]);

  if (req.isLoading) return <Skeleton />;
  if (req.isError) return <ErrorHandler error={req.error} />;

  const handleIdChanges = (e: SelectChangeEvent<string>) =>
    setId(e.target.value);

  return (
    <FormControl sx={{ minWidth: 150 }} size="small">
      <InputLabel id="action-select-label">{props.label}</InputLabel>
      <Select
        labelId="action-select-label"
        label={props.label}
        value={id}
        onChange={handleIdChanges}
      >
        {req.data.map((el: RequestAction) => (
          <MenuItem key={`${el.id}-${el.value}`} value={el.id}>
            {el.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
