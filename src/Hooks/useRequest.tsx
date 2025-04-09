import { useQuery } from "@tanstack/react-query";

export default function useRequest(keys: string[], fn: () => any) {
  const request = useQuery({ queryKey: keys, queryFn: fn });

  return request;
}
