import type { AxiosError } from "axios";
import { type ReactNode } from "react";

import LogoLoader from "../../SharedComponents/LogoLoader";
import ErrorHandler from "./Error/ErrorHandler";
import { UseQueryResult } from "@tanstack/react-query";

interface AsyncComponentProps {
  query: UseQueryResult;
  render404?: ReactNode;
  render: (data: any) => ReactNode;
  renderLoading?: ReactNode;
}
export default function AsyncComponent(props: AsyncComponentProps) {
  const { query, render, render404 } = props;

  if (query.isLoading || query.isPending) return <>Loading...</>
    // return <>{props.renderLoading}</> || <LogoLoader />;

  if (query.error)
    return <ErrorHandler custom404Render={render404} error={query.error} />;

  return <>{render(query.data)}</>;
}
