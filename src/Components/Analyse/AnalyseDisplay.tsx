import React from "react";
import { IAnalyse } from "./IAnalyse";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import PropertyDisplay from "../Template/PropertyDisplay";
import AnalyseForm from "./AnalyseForm";
import ConcerningSelect from "../LogManagement/Select/ConcerningSelect";
import NatureSelect from "../LogManagement/Select/NatureSelect";
import { ActionForm } from "../LogManagement/LogActions";
import AcionsTableDisplay from "./AcionsTableDisplay";

interface AnalyseDisplayProps {
  analyse: IAnalyse;
}

export default function AnalyseDisplay(props: AnalyseDisplayProps) {
  const { analyse } = props;
  console.log(" analyse ", analyse);
  return (
    <Box>
      {/* <ActionForm index={1} onDelete={() => {}} onChange={() => {}} />  */}
      <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: "whitesmoke" }}>
        <Typography marginY={1} variant="h6">
          Analyse
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Checkbox checked={analyse.ImmobilizeVehicle} disabled />}
            label="Immobilisation du véhicule nécessaire"
          />
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <PropertyDisplay
              title="Concerne"
              content={analyse.Concerning?.Value || "Erreur Concerning"}
            />
            <PropertyDisplay
              title="Nature"
              content={analyse.Nature?.Value || "Erreur Nature"}
            />
          </Box>
          <PropertyDisplay title="Analyse" content={analyse.Analyze} />
        </Box>
      </Box>
      <Box
        sx={{
          marginY: 2,
          padding: 2,
          borderRadius: 2,
          backgroundColor: "whitesmoke",
        }}
      >
        <Typography marginY={1} variant="h6">
          Actions
        </Typography>
        <AcionsTableDisplay actions={analyse.Actions} />
      </Box>
    </Box>
  );
}
