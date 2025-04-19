import React from "react";
import useRequest from "./useRequest";
import { getLogManager } from "../Services/mecanic.service";

export default function useLogManager() {
  return useRequest(["logs"], getLogManager);
}
