import React, { useState } from "react";
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

const emptyAnalyseInfos = {
  Analyze: "",
  AnalyzeBy: "",
  Concerning: 0,
  ImmobilizeVehicle: false,
  LogId: 0,
  Nature: 0,
};

interface AnalyseResumeFormProps {
  analyseInfos?: analyseInfos;
  onChange: (name: keyof Analyse, value: any) => void;
}
export default function AnalyseResumeForm(props: AnalyseResumeFormProps) {
  const { analyseInfos } = props;

  const [formData, setFormData] = useState<analyseInfos>(
    analyseInfos || emptyAnalyseInfos
  );

  const changeFormData = (name: keyof analyseInfos, value: any) => {
    setFormData((old) => ({ ...old, [name]: value }));
    props.onChange(name, value);
  };

  return (
    <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: "whitesmoke" }}>
      <Typography marginY={1} variant="h6">
        Analyse
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={formData.ImmobilizeVehicle}
              onChange={() =>
                changeFormData("ImmobilizeVehicle", !formData.ImmobilizeVehicle)
              }
            />
          }
          label="Immobilisation du véhicule nécessaire"
        />
        <TextField
          multiline
          rows={4}
          label="Analyse"
          onChange={(e) => changeFormData("Analyze", e.target.value)}
        />
      </FormGroup>
    </Box>
  );
}
