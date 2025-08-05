import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="text-center mt-5">Enregistrement réussi !</h1>
      <p onClick={() => navigate("/")} className="text-center">
        Retour a la page principale
      </p>
    </Container>
  );
}
