import { ToggleButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useContext } from "react";
import FilterContext from "../../../Contexts/FilterContext";

export default function SwitchButton() {
  const { shouldShowJobTerminated, toggleShowJobterminated } =
    useContext(FilterContext);
  return (
    <ToggleButton
      value="value"
      selected={shouldShowJobTerminated}
      onChange={() => toggleShowJobterminated(!shouldShowJobTerminated)}
      color="primary"
      className={shouldShowJobTerminated ? "border-0" : ""}
    >
      <FilterAltIcon />
    </ToggleButton>
  );
}
