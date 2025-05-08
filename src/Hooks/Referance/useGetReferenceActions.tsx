import React from "react";
import useRequest from "../useRequest";
import { getReferenceActions } from "../../Services/referenceData.service";

export default function useGetReferenceActions() {
  return useRequest(["reference", "actions"], getReferenceActions);
}
