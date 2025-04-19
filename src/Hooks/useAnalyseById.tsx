import React from "react";
import useRequest from "./useRequest";
import { getAnalyseById } from "../Services/analyse.service";

export default function useAnalyseById(id: string | undefined) {
  return useRequest(["analyse", id || ""], () => getAnalyseById(id || null));
}
