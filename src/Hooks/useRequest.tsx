import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function useRequest(keys: string[], fn: () => any) {
  const request = useQuery({ queryKey: keys, queryFn: fn });

  return request;
}
