import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import GetFormStructureUseCase from "../../../../UseCase/GetFormStructureUseCase/GetFormStructureUseCase";
import JobEditUseCase from "../../../../UseCase/JobEditUseCase/JobEditUseCase";
import JobEditFormContext from "../../../../Contexts/JobEditFormContext";
import { FieldInfos } from "../../../../Domain/FormStructure";

export default function JobEditViewModel() {
  const useCase = GetFormStructureUseCase();
  const queryClient = useQueryClient();
  // const updateJobEditValueUseCase = UpdateJobEditValueUseCase();
  // const { id } = useParams();

  const editUseCase = JobEditUseCase();
  // const { fields, setFields } = useContext(JobEditFormContext);
  const [fields, setFields] = useState<FieldInfos[]>([]);

  const { data, isLoading, error, isRefetching } = useQuery({
    queryKey: ["formStructure"],
    queryFn: () => useCase.execute(),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: editUseCase.patchJobEdit,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["formStructure"] }),
  });

  useEffect(() => {
    if (isLoading || isRefetching) return;
    else setFields(data || []);
  }, [data, isRefetching]);

  const handleOnSave = () => {
    const values = fields.map((el) => ({ name: el.name, value: el.value }));
    save(values);
  };

  const save = (values: { name: string; value: string }[]) => {
    mutate(values);
  };

  const onValueChanges = (name: string, value: string) => {
    let newFields = fields.map((el) =>
      el.name === name ? { ...el, value } : { ...el }
    );
    let field = fields.find((field) => field.name === name);
    if (field && field.instantUpdate) {
      setFields(newFields);
      save(newFields.map((el) => ({ name: el.name, value: el.value })));
      setFields([]);
    } else setFields(newFields);
  };

  const getValue = (name: string) =>
    fields.find((el) => el.name === name)?.value || "";

  return {
    fields,
    data,
    isLoading,
    isRefetching,
    error,
    handleOnSave,
    onValueChanges,
    getValue,
    isPending,
  };
}
