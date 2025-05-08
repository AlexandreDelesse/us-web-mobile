import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Action } from "../LogManagement/Action";
import DateDisplayer from "../Shared/DateDisplayer";
import useRequest from "../../Hooks/useRequest";
import useGetReferenceActions from "../../Hooks/Referance/useGetReferenceActions";

interface ActionsTableDisplayProps {
  actions: Action[];
}
export default function AcionsTableDisplay(props: ActionsTableDisplayProps) {
  if (props.actions.length < 1) return <Box>Aucune actions à entreprendre</Box>;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Acteur</TableCell>
            <TableCell>Echéance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.actions.map((row) => (
            <TableRow>
              <TableCell>
                {row.ActionType?.Value || "Erreur Action type"}
              </TableCell>
              <TableCell>{row.Actor?.Value || "Erreur Actor"}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
