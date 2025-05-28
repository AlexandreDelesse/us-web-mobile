import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getSignature } from "../../Services/signature.service";
import AsyncComponent from "../Shared/AsyncComponent";
import LogoLoader from "../../SharedComponents/LogoLoader";
import SignatureView from "./SignatureView";
import SignatureFormView from "./SignatureFormView";
import SignatureForm from "./SignatureForm";

export default function Signature() {
  const { id } = useParams();

  const query = useQuery({
    queryKey: ["signature", id],
    queryFn: () => getSignature(id!),
  });

  return (
    <AsyncComponent
      query={query}
      render404={<SignatureForm />}
      render={(signature) => <SignatureView signature={signature} />}
    />
  );
}
