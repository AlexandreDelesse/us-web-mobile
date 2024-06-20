import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import GetTimeUseCase from "../../../../../UseCase/GetTimeUseCase/GetTimeUseCase";
import { JobStatusQuery } from "../../../../../Domain/Queries/JobStatusQuery";
import { timeStamp } from "console";
import PostTimeUseCase from "../../../../../UseCase/PostTimeUseCase/PostTimeUseCase";

interface Step {
  index: number;
  label: string;
  timestamp: string | null;
  order: number;
}

export default function StepProgressViewModel() {
  const useCase = GetTimeUseCase();
  const updateUseCase = PostTimeUseCase();
  const queryClient = useQueryClient();

  const [steps, setSteps] = useState<Step[]>([]);
  const [activeStep, setActiveStep] = useState<Step | null>(null);
  const [editingStep, setEditingStep] = useState<Step | null>(null);
  const [tempTimestamp, setTempTimestamp] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["time"],
    queryFn: useCase.execute,
  });

  const {
    isPending,
    isError: isUpdateError,
    error: updateError,
    mutate,
  } = useMutation({
    mutationFn: updateUseCase.execute,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["time"] }),
  });

  useEffect(() => {
    if (!data) return;
    const stepsMapped = Object.keys(data).map((key, index) => ({
      index,
      label: key,
      timestamp: data[key as keyof JobStatusQuery],
      order: getDisplayOrder(key),
    }));
    setSteps(stepsMapped);
    const firstTimestampNull = stepsMapped.find(
      (step) => step.timestamp === null
    );

    setActiveStep(firstTimestampNull || null);
  }, [data]);

  const onStepClick = (step: Step) => {
    if (step.timestamp === null) {
      updateStep(step);
      return;
    } else {
      editStep(step);
      return;
    }
  };

  const toggleShowModal = () => setShowModal(!showModal);

  const updateStep = (stepToUpdate: Step, date?: string) => {
    const available = getStep("available");
    const go = getStep("go");
    const onSite = getStep("onSite");
    const newSteps: JobStatusQuery = {
      available: available?.timestamp || null,
      go: go?.timestamp || null,
      onSite: onSite?.timestamp || null,
    };
    if (!date) {
      newSteps[stepToUpdate.label as keyof JobStatusQuery] =
        new Date().toISOString();
    } else if (date === "null") {
      newSteps[stepToUpdate.label as keyof JobStatusQuery] = null;
    } else {
      newSteps[stepToUpdate.label as keyof JobStatusQuery] = date;
    }

    mutate(newSteps);
  };

  const editStep = (step: Step) => {
    setEditingStep(step);
    setTempTimestamp(new Date(step.timestamp || "").toLocaleTimeString());
    toggleShowModal();
  };

  const getStep = (label: string) => {
    return steps.find((step) => step.label === label);
  };

  const getStepDisplayLabel = (label: string) => {
    switch (label) {
      case "go":
        return "En route";
      case "onSite":
        return "Sur place";
      case "available":
        return "Dispo";
      default:
        return "Unknown";
    }
  };
  const getDisplayOrder = (label: string) => {
    switch (label) {
      case "go":
        return 0;
      case "onSite":
        return 1;
      case "available":
        return 2;
      default:
        return -1;
    }
  };

  const onValidateUpdateStep = () => {
    if (!editingStep) return;
    const [h, m, s] = tempTimestamp.split(":");
    const newStepDate = new Date(editingStep.timestamp || "");
    newStepDate.setHours(parseInt(h));
    newStepDate.setMinutes(parseInt(m));
    if (s) newStepDate.setSeconds(parseInt(s));
    updateStep(editingStep, newStepDate.toISOString());
  };

  const updateTempTimestamp = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTempTimestamp(e.target.value);

  //TODO: Format date for display
  const getStepDisplayTimestamp = (index: number) => {
    const step = steps.find((s) => s.index === index);
    if (!step || !step.timestamp) return "";
    return new Date(step.timestamp).toLocaleTimeString();
  };

  const handleResetStep = () => {
    if (!editingStep) return;
    updateStep(editingStep, "null");
  };

  const canReset = () => {
    if (!editingStep) return false;
    const nextStepIndex = editingStep.order + 1;
    const nextStep = steps.find((step) => step.order === nextStepIndex);
    if (!nextStep) return true;
    if (nextStep.timestamp !== null) return false;
  };

  const activeStepIndex = activeStep ? activeStep.index : steps.length;

  return {
    steps: steps.sort((a, b) => a.order - b.order),
    activeStep,
    isLoading,
    isError,
    isPending,
    onStepClick,
    getStepDisplayLabel,
    getStepDisplayTimestamp,
    activeStepIndex,
    showModal,
    toggleShowModal,
    tempTimestamp,
    updateTempTimestamp,
    onValidateUpdateStep,
    handleResetStep,
    canReset,
  };
}
