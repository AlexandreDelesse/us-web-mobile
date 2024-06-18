import { LoginCmd } from "./LoginCmd";
import { apiPostLogin } from "../../DataSource/api";
import { useNavigate } from "react-router-dom";
import { setCrew } from "../../DataSource/localStorage";

export default function LoginUseCase() {
  const navigate = useNavigate();

  const execute = async (credentials: LoginCmd) => {
    try {
      const crew = await apiPostLogin(credentials);
      setCrew(crew);
      navigate("/kilometers");
    } catch (error) {
      throw error;
    }
  };

  return { execute };
}
