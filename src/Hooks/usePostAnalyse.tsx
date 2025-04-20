import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { postAnalyse, putAnalyze } from "../Services/analyse.service";
import { AxiosError } from "axios";

export default function usePostAnalyse(id: string | undefined) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["analyse", id],
    mutationFn: postAnalyse,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["analyse", id] }),
    onError: async (error: AxiosError, variables, context) => {
      if (error.response?.status === 409) {
        try {
          await putAnalyze(variables);
          queryClient.invalidateQueries({ queryKey: ["analyse", id] });
        } catch (error) {
          console.log("Erreur lors du Put");
        }
      }
    },
  });
}
