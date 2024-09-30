import React from "react";
import JobListViewModel from "./JobListViewModel";
import { Alert, AlertTitle, Box, Button, Skeleton } from "@mui/material";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { ShortJob } from "../../../Domain/ShortJob";
import JobListItemView from "./JobListItemView";
import DateFormatter from "../DateFormatter/DateFormatter";

export default function JobList() {
  const {
    jobList,
    isLoading,
    error,
    onClickOnItem,
    emptyListMessage,
    instructions,
  } = JobListViewModel();

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
  //TODO: Créer un composant InstructionsList

  return (
    <div>
      {instructions.map((instruction) => (
        <Alert
          action={
            <Button color="inherit" size="small">
              Bien recus
            </Button>
          }
          severity="info"
          key={instruction.id}
          sx={{ my: 1 }}
        >
          <AlertTitle>{instruction.message}</AlertTitle>
          <DateFormatter dateToParse={instruction.date} />
        </Alert>
      ))}
      {jobList.length < 1 && (
        <Box sx={{ textAlign: "center", padding: 5 }}>{emptyListMessage}</Box>
      )}
      {jobList.map((shortJob: ShortJob) => (
        <JobListItemView
          key={shortJob.jobId}
          shortJob={shortJob}
          onClickOnItem={onClickOnItem}
        />
      ))}
    </div>
  );
}
