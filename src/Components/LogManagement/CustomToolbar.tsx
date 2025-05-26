import { TextField } from "@mui/material";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React, { useState } from "react";

export default function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ padding: 1 }}>
      <GridToolbarQuickFilter
        placeholder="Rechercher"
        variant="outlined"
        size="small"
        quickFilterParser={(searchInput) =>
          searchInput.split(/\s+/).filter((word) => word !== "")
        }
      />
    </GridToolbarContainer>
  );
}
