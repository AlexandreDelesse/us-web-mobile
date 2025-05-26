import { Action } from "./Action";

export interface Log {
  id: number;
  constat: string;
  declaredDate: string;
  lastStateDate: string;
  state: number;
  logId: number;
  immatriculation: string | null;
  crew: null;
  logDate: string;
  report: string | null;
  reportState: string | null;
  analyse: string | null;
  action: Action[] | null;
  nextDeadLine: string | null;
}

