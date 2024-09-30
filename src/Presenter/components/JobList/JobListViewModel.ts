import React, { useContext } from "react";
import GetJobListUseCase from "../../../UseCase/GetJobListUseCase/GetJobListUseCase";
import { useQuery } from "@tanstack/react-query";
import { ShortJob } from "../../../Domain/ShortJob";
import FilterContext from "../../../Contexts/FilterContext";
import { useNavigate } from "react-router-dom";

export default function JobListViewModel() {
  const { shouldShowJobTerminated } = useContext(FilterContext);
  const navigate = useNavigate();

  const getJobListUseCase = GetJobListUseCase();

  const { data, isLoading, error } = useQuery({
    queryKey: ["jobList"],
    queryFn: () => getJobListUseCase.execute(),
  });

  const onClickOnItem = (id: string) => {
    navigate(`jobs/${id}`);
  };

  const filterJobs = () => {
    if (!data) return [];
    if (shouldShowJobTerminated) return data.jobList;
    else
      return data.jobList.filter((el: ShortJob) => el.isTerminated === false);
  };

  const emptyListMessage = `Aucune mission ${
    shouldShowJobTerminated ? "" : "en cours"
  }`;

  return {
    jobList: filterJobs(),
    instructions: data ? data.instructionList : [],
    isLoading,
    error,
    onClickOnItem,
    emptyListMessage,
  };
}
