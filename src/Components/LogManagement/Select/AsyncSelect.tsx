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
  Typography,
} from "@mui/material";
import ErrorHandler from "../../../Presenter/components/ErrorHandler/ErrorHandler";
import { UseQueryResult } from "@tanstack/react-query";

interface AsyncSelectProps {
  req: UseQueryResult<any, Error>;
  onChange: (id: string) => any;
  value: string;
  label: string;
  readOnly?: boolean;
}
export default function AsyncSelect(props: AsyncSelectProps) {
  const { req } = props;

  if (req.isLoading) return <Skeleton />;
  if (req.isError) return <ErrorHandler error={req.error} />;

  const handleIdChanges = (e: SelectChangeEvent<string>) =>
    props.onChange(e.target.value);

  // console.log(req.data, props.value)
  if (props.readOnly) return <>{req.data[props.value]?.Value || "Erreur"}</>;

  return (
    <FormControl sx={{ minWidth: 150 }} size="small">
      <InputLabel id="action-select-label">{props.label}</InputLabel>
      <Select
        labelId="action-select-label"
        label={props.label}
        value={props.value}
        onChange={handleIdChanges}
      >
        {req.data.map((el: RequestAction) => (
          <MenuItem key={`${el.Id}-${el.Value}`} value={el.Id}>
            {el.Value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
