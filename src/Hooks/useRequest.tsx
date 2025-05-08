import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useRequest(keys: string[], fn: () => any) {
  const request = useQuery({
    queryKey: keys,
    queryFn: fn,
    retry: (failureCount, error: AxiosError) => {
      // Si l'erreur est un 404, ne pas réessayer la requête
      if (error.response && error.response.status === 404) {
        return false;
      }
      // Sinon, réessayer la requête (par exemple, 3 fois)
      return failureCount < 3;
    },
  });

  return request;
}
