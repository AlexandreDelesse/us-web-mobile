import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import GetTimeUseCase from "../../../../../UseCase/GetTimeUseCase/GetTimeUseCase";
import { JobStatusQuery } from "../../../../../Domain/Queries/JobStatusQuery";
import PostTimeUseCase from "../../../../../UseCase/PostTimeUseCase/PostTimeUseCase";
import { JobStatusCommand } from "../../../../../Domain/Commands/JobStatusCommand";

interface Step {
  index: number;
  label: string;
  timestamp: string | null;
}
const emptySteps: JobStatusQuery = { available: null, go: null, onSite: null };
//TODO: Faire propre
export default function StepProgressViewModel() {
  const useCase = GetTimeUseCase();
  const updateUseCase = PostTimeUseCase();
  const queryClient = useQueryClient();

  const [steps, setSteps] = useState<Step[]>([]);
  const [activeStep, setActiveStep] = useState<Step | null>(null);
  const [editingStep, setEditingStep] = useState<Step | null>(null);
  const [tempTimestamp, setTempTimestamp] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    isLoading,
    data,
    isError,
    error: fetchError,
  } = useQuery({
    queryKey: ["time"],
    queryFn: useCase.execute,
  });

  const {
    isPending,
    isError: isUpdateError,
    error: updateError,
    mutateAsync,
  } = useMutation({
    mutationFn: updateUseCase.execute,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["time"] }),
  });

  useEffect(() => {
    if (!data) return;
    const stepsMapped = Object.keys(data)
      .map((key, index) => ({
        index: getDisplayOrder(key),
        label: key,
        timestamp: data[key as keyof JobStatusQuery],
      }))
      .sort((a, b) => a.index - b.index);
    setSteps(stepsMapped);
    const firstTimestampNull = stepsMapped.find(
      (step) => step.timestamp === null
    );
    setActiveStep(firstTimestampNull || null);
  }, [data]);

  const onStepClick = (step: Step) => {
    if (step.timestamp === null) {
      updateStep(step, new Date().toISOString());
      return;
    } else {
      editStep(step);
      return;
    }
  };

  const toggleShowModal = () => setShowModal(!showModal);

  const getFormatedSteps = () => {
    let tmpSteps: JobStatusQuery = emptySteps;
    steps.forEach(
      (step) => (tmpSteps[step.label as keyof JobStatusQuery] = step.timestamp)
    );
    return tmpSteps;
  };

  const updateStep = async (stepToUpdate: Step, date: string | null) => {
    const formatedSteps = getFormatedSteps();
    formatedSteps[stepToUpdate.label as keyof JobStatusQuery] = date;
    await updateSteps(formatedSteps);
  };

  const updateSteps = async (steps: JobStatusQuery) => {
    await mutateAsync(steps);
  };

  const editStep = (step: Step) => {
    setEditingStep(step);
    setTempTimestamp(new Date(step.timestamp || "").toLocaleTimeString());
    toggleShowModal();
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

  const onValidateUpdateStep = async () => {
    if (!editingStep) return;
    const [h, m, s] = tempTimestamp.split(":");
    const newStepDate = new Date(editingStep.timestamp || "");
    newStepDate.setHours(parseInt(h));
    newStepDate.setMinutes(parseInt(m));
    if (s) newStepDate.setSeconds(parseInt(s));
    await updateStep(editingStep, newStepDate.toISOString());
    toggleShowModal();
  };

  const updateTempTimestamp = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTempTimestamp(e.target.value);

  //TODO: Format date for display
  const getStepDisplayTimestamp = (index: number) => {
    const step = steps.find((s) => s.index === index);
    if (!step || !step.timestamp) return "";
    return new Date(step.timestamp).toLocaleTimeString();
  };

  const handleResetStep = async () => {
    if (!editingStep) return;
    await updateStep(editingStep, null);
    toggleShowModal();
  };

  const canReset = () => {
    if (!editingStep) return false;
    const nextStepIndex = editingStep.index + 1;
    const nextStep = steps.find((step) => step.index === nextStepIndex);
    if (!nextStep) return true;
    if (nextStep.timestamp !== null) return false;
    return true;
  };

  const activeStepIndex = activeStep ? activeStep.index : steps.length;
  return {
    steps: steps.sort((a, b) => a.index - b.index),
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
    fetchError,
    updateError,
  };
}
