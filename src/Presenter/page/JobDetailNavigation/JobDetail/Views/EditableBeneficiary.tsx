import React, { useState } from "react";
import { Beneficiary } from "../../../../../Domain/Beneficiary";
import { Button, Typography } from "@mui/material";
import { Offcanvas } from "react-bootstrap";
import OutlinedTextField from "../../../../components/OutlinedTextField/OutlinedTextField";

interface EditableBeneficiaryProps {
  beneficiary?: Beneficiary;
}
export default function EditableBeneficiary(props: EditableBeneficiaryProps) {
  const { beneficiary } = props;

  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  const onValueChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const onSubmit = (beneficiary: any) => {};

  if (!beneficiary) return <div>No patient</div>;

  return (
    <>
      <Typography variant="h5">{beneficiary.completeName}</Typography>
      <Offcanvas>
        <Offcanvas
          className="h-100"
          backdrop="static"
          show={true}
          onHide={toggleShow}
          placement="bottom"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Nouveau client</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <OutlinedTextField
              label="Nom"
              name="firstname"
              onChange={onValueChanges}
              type="text"
              value={beneficiary.completeName}
            />

            <Button color="primary" onClick={() => onSubmit({})}>
              Créer
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </Offcanvas>
    </>
  );
}
