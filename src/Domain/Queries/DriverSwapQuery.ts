import { Driver } from "../Driver";
import { Vehicle } from "../Vehicle";

export interface DriverSwapQuery {
  driversCollection: Driver[];
  selectedDriver: Driver;
  changeDate: string;
  vehicleModel: Vehicle;
}
