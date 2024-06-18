import React from "react";
import JobListViewModel from "./JobListViewModel";
import { Box, Skeleton } from "@mui/material";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { ShortJob } from "../../../Domain/ShortJob";
import JobListItemView from "./JobListItemView";

export default function JobList() {
  const { jobList, isLoading, error, onClickOnItem, emptyListMessage } =
    JobListViewModel();

  const loadingSkeleton = (
    <Box
      sx={{ display: "flex", gap: 1, flexDirection: "column", marginTop: 1 }}
    >
      {[1, 2, 3].map((el) => (
        <Skeleton key={el} variant="rectangular" width="100%" height={60} />
      ))}
    </Box>
  );

  if (isLoading) return loadingSkeleton;

  if (error) return <ErrorHandler error={error} />;

  if (jobList.length < 1) return <Box sx={{textAlign: "center", padding: 5}}>{emptyListMessage}</Box>;
  
  return (
    <div>
      {jobList.map((shortJob: ShortJob) => (
        <JobListItemView key={shortJob.jobId} shortJob={shortJob} onClickOnItem={onClickOnItem} />
      ))}
    </div>
  );
}
