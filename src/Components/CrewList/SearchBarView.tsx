import { TextField } from "@mui/material";
import React, { useState } from "react";

interface SearchBarViewProps {
  onSearch: (value: string) => void;
}
export default function SearchBarView(props: SearchBarViewProps) {
  const { onSearch } = props;

  const [searchValue, setSearchValue] = useState("");

  const onValueChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <TextField
      sx={{ marginY: 1 }}
      value={searchValue}
      onChange={onValueChanges}
      placeholder="Recherche par Imamt/Callsign/Membre"
      label="Rechercher"
      size="small"
      fullWidth
    />
  );
}
