import { useQuery } from "@tanstack/react-query";
import React from "react";
import GetCrewListUsecase from "../../../UseCase/GetCrewListUsecase/GetCrewListUseCase";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";

export default function CrewList() {
  const usecase = GetCrewListUsecase();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["crewlist"],
    queryFn: usecase.execute,
  });

  return <div>{isError && <ErrorHandler error={error} />}</div>;
}
