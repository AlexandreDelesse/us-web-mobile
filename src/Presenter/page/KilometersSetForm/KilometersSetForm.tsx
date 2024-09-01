import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useState } from "react";
import OutlinedTextField from "../../components/OutlinedTextField/OutlinedTextField";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import { useMutation } from "@tanstack/react-query";
import { setKilometers } from "../../../UseCase/KilometersUseCase/KilometersUseCase";
import { getCrew } from "../../../DataSource/localStorage";
import { useNavigate } from "react-router-dom";
import Kilometers from "../../components/Kilometers/Kilometers";

export default function KilometersSetForm() {
  const [value, setvalue] = useState("");

  const { mutateAsync, error, isPending } = useMutation({
    mutationFn: setKilometers,
  });

  const navigate = useNavigate();

  const crew = getCrew();

  const submit = async () => {
    try {
      await mutateAsync({ crewId: crew?.crewId, kilometers: value });
      navigate("/");
    } catch (error) {}
  };

  return (
    <Card
      sx={{
        my: 2,
        maxWidth: "400px",
        position: "absolute",
        left: "50%",
        top: "30%",
        transform: "translate(-50%,-50%)",
      }}
      elevation={0}
    >
      <CardHeader
        title={
          <Typography variant="h4" textAlign="center">
            Kilometrage véhicule
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="caption">Derniere saisie</Typography>
        <Kilometers />
        <OutlinedTextField
          label={"Km"}
          inputMode="numeric"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />

        <Button
          onClick={submit}
          size="medium"
          variant="contained"
          color="primary"
          disabled={isPending}
        >
          Valider
        </Button>
        <Button color="secondary" onClick={() => navigate("/")}>
          Skip
        </Button>

        <ErrorHandler error={error} />
      </CardContent>
    </Card>
  );
}
