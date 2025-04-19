import { Action } from "./Action";

export interface analyseInfos {
  LogId: number;
  AnalyzeBy: string;
  Analyze: string;
  ImmobilizeVehicle: boolean;
  Nature: number;
  Concerning: number;
}
export interface Analyse extends analyseInfos {
  Actions: Action[];
}
