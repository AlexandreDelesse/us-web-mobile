import { JobStatusQuery } from "../Queries/JobStatusQuery";

export interface JobStatusCommand {
  goTime: string | null;
  onSiteTime: string | null;
  terminatedTime: string | null;
}
