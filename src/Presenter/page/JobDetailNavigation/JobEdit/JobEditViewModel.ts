import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FieldInfos } from "../../../../Domain/FormStructure";
import GetFormStructureUseCase from "../../../../UseCase/GetFormStructureUseCase/GetFormStructureUseCase";
import JobEditUseCase from "../../../../UseCase/JobEditUseCase/JobEditUseCase";

export default function JobEditViewModel() {
  const useCase = GetFormStructureUseCase();
  const queryClient = useQueryClient();
  // const updateJobEditValueUseCase = UpdateJobEditValueUseCase();
  // const { id } = useParams();

  const editUseCase = JobEditUseCase();
  const [fields, setFields] = useState<FieldInfos[]>([]);
  const [contractType, setContractType] = useState("")

  const { data, isLoading, error, isRefetching } = useQuery({
    queryKey: ["formStructure"],
    queryFn: useCase.execute,
  });

  const { isPending, mutate } = useMutation({
    mutationFn: editUseCase.patchJobEdit,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["formStructure"] }),
  });

  useEffect(() => {
    setFields(data || []);
  }, [data, isRefetching]);

  const onSave = () => {
    const values = fields.map((el) => ({ name: el.name, value: el.value }));
    mutate(values);
  };

  const onValueChanges = (name: string, value: string) => {
    setFields((old) =>
      old.map((el) => (el.name === name ? { ...el, value } : { ...el }))
    );
  };

  const getValue = (name: string) =>
    fields.find((el) => el.name === name)?.value || "";

  return {
    fields,
    data,
    isLoading,
    isRefetching,
    error,
    onSave,
    onValueChanges,
    getValue,
  };
}
