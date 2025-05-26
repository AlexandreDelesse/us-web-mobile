import React from "react";
import packageJson from "../../../../package.json";
import { Box } from "@mui/material";

interface VersionDisplayerViewProps {
  cornerBottom?: boolean;
}
export default function VersionDisplayerView(props: VersionDisplayerViewProps) {
  const { cornerBottom } = props;
  const versionName = process.env.REACT_APP_ENV_NAME || "Unknown";

  const cornerBottomPosition = cornerBottom
    ? {
        position: "absolute",
        bottom: "8px",
        left: "8px",
      }
    : {};
    
  return (
    <Box sx={{ padding: 2, ...cornerBottomPosition }}>
      version {versionName} {packageJson.version}
    </Box>
  );
}
