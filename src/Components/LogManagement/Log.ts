export interface Log {
  logId: number;
  immatriculation: string;
  crew: any; //TODO: A modifier
  constatDate: string;
  constat: string;
  constatState: string;
  analyse: string; //TODO: A modifier
  action: string; //TODO: A modifier
  closed: boolean; //TODO: A modifier
  nextDeadLine: string;
}
