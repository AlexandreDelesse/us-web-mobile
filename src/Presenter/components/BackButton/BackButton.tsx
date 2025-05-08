import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

interface BackButtonProps {
  label?: String;
}

export default function BackButton(props: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <span
      role="button"
      onClick={() => navigate(-1)}
      className="d-flex justify-content-start align-items-center mt-3 cusor-pointer"
    >
      <IoIosArrowBack /> {props.label || "Retour"}
    </span>
  );
}
