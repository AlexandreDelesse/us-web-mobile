import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import GetJobDetailUseCase from "../../../../UseCase/GetJobDetailUseCase/GetJobDetailUseCase";

export default function JobDetailViewModel() {
  const { id } = useParams();
  const getJobDetailUseCase = GetJobDetailUseCase();

  const { data, isLoading, error } = useQuery({
    queryKey: ["jobdetail", id],
    queryFn: () => getJobDetailUseCase.execute(id),
  });

  return { jobDetail: data, isLoading, error };
}
