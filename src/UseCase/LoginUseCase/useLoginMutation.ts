import { useMutation } from "@tanstack/react-query";
import React from "react";
import { LoginCmd } from "./LoginCmd";
import { apiPostLogin } from "../../DataSource/api";

export default function useLoginMutation() {
  return useMutation({
    mutationFn: (loginCmd: LoginCmd) => apiPostLogin(loginCmd),
  });
}
