import React from "react";
import packageJson from "../../../../package.json";
import { Box } from "@mui/material";

export default function VersionDisplayerView() {
  const versionName = process.env.REACT_APP_ENV_NAME || "Unknown";
  return (
    <Box sx={{ padding: 2 }}>
      version {versionName} {packageJson.version}
    </Box>
  );
}
