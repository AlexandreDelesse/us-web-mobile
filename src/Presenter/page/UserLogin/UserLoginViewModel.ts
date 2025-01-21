import { useEffect, useState } from "react";
import LoginUseCase from "../../../UseCase/LoginUseCase/LoginUseCase";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCrew } from "../../../DataSource/localStorage";

export default function UserLoginViewModel() {
  const { crewId, memberName } = useParams();
  const [code, setCode] = useState(crewId || "");
  const [name, setName] = useState(memberName || "");
  const navigate = useNavigate();

  const loginUseCase = LoginUseCase();

  useEffect(() => {
    let crew = getCrew();
    console.log(crew);
    if (crew) navigate("/");
  }, [navigate]);

  const { mutate, isPending, error } = useMutation({
    mutationFn: loginUseCase.execute,
  });

  const submit = async () => {
    if (name === "regul" && code === "1234") return navigate("/regul");
    else
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
