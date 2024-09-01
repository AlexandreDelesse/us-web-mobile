import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import GetFormStructureUseCase from "../../../../UseCase/GetFormStructureUseCase/GetFormStructureUseCase";
import JobEditUseCase from "../../../../UseCase/JobEditUseCase/JobEditUseCase";
import JobEditFormContext from "../../../../Contexts/JobEditFormContext";

export default function JobEditViewModel() {
  const useCase = GetFormStructureUseCase();
  const queryClient = useQueryClient();
  // const updateJobEditValueUseCase = UpdateJobEditValueUseCase();
  // const { id } = useParams();

  const editUseCase = JobEditUseCase();
  const { fields, setFields } = useContext(JobEditFormContext);
  // const [fields, setFields] = useState<FieldInfos[]>([]);

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
    setFields(data || []);
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
    if (field && field.instantUpdate)
      save(newFields.map((el) => ({ name: el.name, value: el.value })));
    else setFields(newFields);
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
