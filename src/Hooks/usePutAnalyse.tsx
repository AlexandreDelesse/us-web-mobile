import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { putAnalyze } from "../Services/analyse.service";

export default function usePutAnalyse(id: string | undefined) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["analyse", id],
    mutationFn: putAnalyze,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["analyse", id] }),
  });
}
