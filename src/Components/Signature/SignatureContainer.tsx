import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  SignaturePresenter,
  SignatureViewDTO,
} from "../../Presenters/SignaturePresenter";
import { AxiosError, isAxiosError } from "axios";
import { useParams } from "react-router-dom";
import SignatureView from "./SignatureView";
import SignatureFormView from "./SignatureFormView";
import ReactSignatureCanvas from "react-signature-canvas";
import ErrorHandler from "../Shared/Error/ErrorHandler";

export default function SignatureContainer() {
  const [signature, setSignature] = useState<SignatureViewDTO | null>(null);
  const [error, setError] = useState<Error | AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const signRef = useRef<ReactSignatureCanvas | null>(null);

  const { id } = useParams();

  const presenter = useMemo(() => {
    return new SignaturePresenter({
      setLoading: setIsLoading,
      showError: setError,
      updateSignature: setSignature,
      setEmpty: setIsEmpty,
    });
  }, []);

  useEffect(() => {
    presenter.init(id || "");
  }, [presenter, id]);

  const onClear = () => {
    presenter.clearSignature(signRef.current);
    setIsEmpty(true);
  };

  const onSave = () => {
    presenter.saveSignature(signRef.current, id);
  };

  const onEnd = () => {
    if (signRef.current?.isEmpty()) setIsEmpty(true);
    else setIsEmpty(false);
  };

  if (isLoading) return <div>Loading..</div>;

  if (error)
    return (
      <ErrorHandler
        custom404Render={
          <SignatureFormView
            signRef={signRef}
            disableButtons={isEmpty}
            onClear={onClear}
            onSave={onSave}
            onEnd={onEnd}
          />
        }
        error={error}
      />
    );

  if (!signature)
    return (
      <SignatureFormView
        signRef={signRef}
        disableButtons={isEmpty}
        onClear={onClear}
        onSave={onSave}
        onEnd={onEnd}
      />
    );

  return <SignatureView signature={signature} />;
}
