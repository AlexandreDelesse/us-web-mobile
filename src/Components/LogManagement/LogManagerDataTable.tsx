import React, { useState } from "react";
import useRequest from "../../Hooks/useRequest";
import { getLogManager } from "../../Services/mecanic.service";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Log } from "./Log";
import {
  DataGrid,
  GridActionsCell,
  GridActionsCellItem,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { frFR } from "@mui/x-data-grid/locales";
import CustomToolbar from "./CustomToolbar";
import DateFormatter from "../../Presenter/components/DateFormatter/DateFormatter";
import DateDisplayer from "../Shared/DateDisplayer";
import LogoLoader from "../../SharedComponents/LogoLoader";
import ErrorHandler from "../../Presenter/components/ErrorHandler/ErrorHandler";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";

export default function LogManagerDataTable() {
  const request = useRequest(["logManager"], getLogManager);

  const columns: GridColDef[] = [
    { field: "id", headerName: "LogId" },
    { field: "immat", headerName: "Immat" },
    { field: "state", headerName: "Statut", minWidth: 120 },
    {
      field: "date",
      headerName: "Date",
      renderCell: (params) => <DateDisplayer value={params.value} />,
    },
    {
      field: "constat",
      headerName: "Constat",
      flex: 1,
    },
    {
      field: "actions",
      type: "actions", // très important !
      headerName: "Actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<AssignmentTurnedInIcon />}
          label="Voir"
          color="success"
          onClick={() => alert("Une action")}
          showInMenu={false}
        />,
        <GridActionsCellItem
          icon={<DirectionsBoatFilledIcon />}
          color="primary"
          label="Supprimer"
          onClick={() => alert("Une autre action")}
          showInMenu={false}
        />,
      ],
    },
  ];

  if (request.isLoading) return <LogoLoader />;
  if (request.isError) return <ErrorHandler error={request.error} />;

  const rows = request.data.map((log: Log) => ({
    id: log.logId,
    immat: log.immatriculation,
    state: log.constatState,
    date: log.constatDate,
    constat: log.constat,
  }));

  return (
    <Paper sx={{ height: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  );
}
