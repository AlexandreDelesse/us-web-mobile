import React from "react";
import StepProgress from "./StepProgress";

interface StepProgressDecoratorProps {
  jobId: string;
  initialStep: any;
}

export default function StepProgressDecorator({
  jobId,
  initialStep,
}: StepProgressDecoratorProps) {
  const { go, onSite, available } = initialStep;
  const setZoulouToIsoDate = (el: string) =>
    el.charAt(el.length - 1) !== "Z" ? el + "Z" : el;

  console.log("go", go, "onSite", onSite, "available", available);
  const formattedInitialSteps = {
    go: go ? new Date(go) : null,
    onSite: onSite ? new Date(setZoulouToIsoDate(onSite)) : null,
    available: available ? new Date(setZoulouToIsoDate(available)) : null,
  };

  return <StepProgress jobId={jobId} initialStep={formattedInitialSteps} />;
}
