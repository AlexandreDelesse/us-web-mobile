import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import AckJobUseCase from "../../../../UseCase/AckJobUseCase/AckJobUseCase";
import { AckJobCmd } from "../../../../UseCase/AckJobUseCase/AckJobCmd";

export default function AcknowledgeButtonViewModel() {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: (cmd: AckJobCmd) => AckJobUseCase().execute(cmd),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["jobList"] }),
  });

  const onClickOnAck = (jobId: string) => {
    mutate({ jobId: jobId, acknowledged: true });
  };

  return { onClickOnAck, isPending, error };
}
