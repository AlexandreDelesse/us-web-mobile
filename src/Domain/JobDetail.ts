import { Beneficiary } from "./Beneficiary";
import { Patient } from "./Patient";

export interface JobDetail {
  phones: string[];
  transportMode: string;
  isSerial: true;
  transportSens: 0;
  schedule: string;
  appointment: string;
  departure: string;
  arrival: string;
  comments: string;
  isLastDay: true;
  contactId: string;
  beneficiary: Beneficiary;
}
