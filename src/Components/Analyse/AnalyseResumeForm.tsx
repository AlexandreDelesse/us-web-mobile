import React, { useEffect, useState } from "react";
import { Analyse, analyseInfos } from "../LogManagement/Analyse";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import ConcerningSelect from "../LogManagement/Select/ConcerningSelect";
import NatureSelect from "../LogManagement/Select/NatureSelect";

const emptyAnalyseInfos = {
  Analyze: "",
  AnalyzeBy: "",
  Concerning: 0,
  ImmobilizeVehicle: false,
  LogId: 0,
  Nature: 0,
};

interface AnalyseResumeFormProps {
  analyse: Analyse;
  onChange: (name: keyof Analyse, value: any) => void;
}
export default function AnalyseResumeForm(props: AnalyseResumeFormProps) {
  const { analyse } = props;

  useEffect(() => console.log(analyse), [analyse]);

  const changeFormData = (name: keyof analyseInfos, value: any) => {
    // setFormData((old) => ({ ...old, [name]: value }));
    props.onChange(name, value);
  };

  return (
    <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: "whitesmoke" }}>
      <Typography marginY={1} variant="h6">
        Analyse
      </Typography>
      <FormGroup sx={{ gap: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={analyse.ImmobilizeVehicle}
              onChange={() =>
                changeFormData("ImmobilizeVehicle", !analyse.ImmobilizeVehicle)
              }
            />
          }
          label="Immobilisation du véhicule nécessaire"
        />
        <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
          <ConcerningSelect
            value={analyse.Concerning.toString()}
            onChange={(id: string) => changeFormData("Concerning", id)}
          />
          <NatureSelect
            value={analyse.Nature.toString()}
            onChange={(id: string) => changeFormData("Nature", id)}
          />
        </Box>

        <TextField
          multiline
          rows={4}
          label="Analyse"
          value={analyse.Analyze}
          onChange={(e) => changeFormData("Analyze", e.target.value)}
        />
      </FormGroup>
    </Box>
  );
}
