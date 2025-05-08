import { Action } from "../LogManagement/Action";
import { DisplayValue } from "../Shared/DisplayValue";

export interface analyseInfos {
  LogId: number;
  AnalyzeBy: string;
  Analyze: string;
  ImmobilizeVehicle: boolean;
  Nature: DisplayValue;
  Concerning: DisplayValue;
}
export interface IAnalyse extends analyseInfos {
  Actions: Action[];
}
