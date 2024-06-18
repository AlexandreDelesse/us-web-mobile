import { Button, Card, CardContent, Typography } from "@mui/material";
import UserLoginViewModel from "./UserLoginViewModel";
import OutlinedTextField from "../../components/OutlinedTextField/OutlinedTextField";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";

export default function UserLoginView() {
  const { code, name, setCode, setName, submit, isPending, error } =
    UserLoginViewModel();

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
      <CardContent>
        <Typography variant="h4" textAlign="center" marginBottom={4}>
          Connexion
        </Typography>
        <OutlinedTextField
          label={"Nom"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <OutlinedTextField
          label={"Code"}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button
          onClick={submit}
          size="medium"
          variant="contained"
          color="primary"
          disabled={isPending}
        >
          Login
        </Button>

        <ErrorHandler error={error} />
      </CardContent>
    </Card>
  );
}
