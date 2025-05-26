import { DisplayValue } from "../Shared/DisplayValue";

export interface Action {
  Id: number;
  Actor?: DisplayValue;
  ActionType?: DisplayValue;
  Constraint?: DisplayValue;
  Rappel?: string;
  DueDate?: string;
}
