import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FieldInfos } from "../../../../Domain/FormStructure";
import GetFormStructureUseCase from "../../../../UseCase/GetFormStructureUseCase/GetFormStructureUseCase";
import JobEditUseCase from "../../../../UseCase/JobEditUseCase/JobEditUseCase";

export default function JobEditViewModel() {
  const useCase = GetFormStructureUseCase();
  // const updateJobEditValueUseCase = UpdateJobEditValueUseCase();
  // const { id } = useParams();

  const editUseCase = JobEditUseCase();
  const [fields, setFields] = useState<FieldInfos[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["formStructure"],
    queryFn: useCase.execute,
  });

  const { isPending, mutate } = useMutation({
    mutationFn: editUseCase.patchJobEdit,
  });

  useEffect(() => {
    setFields(data || []);
  }, [data]);

  const onSave = () => {
    const values = fields.map((el) => ({ name: el.name, value: el.value }));
    console.log(values);
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
    error,
    onSave,
    onValueChanges,
    getValue,
  };
}
