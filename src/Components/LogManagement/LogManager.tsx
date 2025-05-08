import React from "react";
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

export default function LogManager() {
  const request = useRequest(["logManager"], getLogManager);

  if (request.isLoading) return <div>Request loading</div>;
  if (request.isError) return <div>An Error occured</div>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableRow>
          <TableHead>
            <TableCell>Immat</TableCell>
            <TableCell>Statut</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Constat</TableCell>
          </TableHead>
          <TableBody>
            {request.data.map((log: Log) => (
              <TableRow key={log.logId}>
                <TableCell>{log.immatriculation}</TableCell>
                <TableCell>{log.state}</TableCell>
                <TableCell>{log.logDate}</TableCell>
                <TableCell>{log.constat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRow>
      </Table>
    </TableContainer>
  );
}
