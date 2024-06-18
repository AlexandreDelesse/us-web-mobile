import { Dispatch, SetStateAction, createContext } from "react";

interface IFilterContext {
  shouldShowJobTerminated: boolean;
  toggleShowJobterminated: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
  shouldShowJobTerminated: false,
  toggleShowJobterminated: () => {},
};

const FilterContext = createContext<IFilterContext>(defaultValue);

export default FilterContext;
