import React from "react";
import { InputProps } from "../../../../../Domain/FormStructure";

export default function withFabricInfos<P extends InputProps>(
  WrappedComponent: React.ComponentType<P> | null,
  props: InputProps
) {
  if (!WrappedComponent) return null;
  return <WrappedComponent {...(props as P)} />;
}
