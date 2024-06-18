import { useState } from "react";
import LoginUseCase from "../../../UseCase/LoginUseCase/LoginUseCase";
import { useMutation } from "@tanstack/react-query";

export default function UserLoginViewModel() {
  const [code, setCode] = useState("206702");
  const [name, setName] = useState("heraud");

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
