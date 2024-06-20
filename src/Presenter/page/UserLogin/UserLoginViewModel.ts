import { useState } from "react";
import LoginUseCase from "../../../UseCase/LoginUseCase/LoginUseCase";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function UserLoginViewModel() {
  const { crewId, memberName } = useParams();
  const [code, setCode] = useState(crewId || "");
  const [name, setName] = useState(memberName || "");

  const loginUseCase = LoginUseCase();

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginUseCase.execute,
  });

  const submit = async () => {
    mutate({
      id: parseInt(code),
      employee: name,
    });
  };

  return {
    code,
    name,
    setCode,
    setName,
    submit,
    error,
    isPending,
  };
}
