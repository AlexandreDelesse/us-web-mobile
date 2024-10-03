export interface AckJobCmd {
  jobId: string;
  instructionId?: string;
  acknowledged: boolean;
  isJob?: boolean;
}
