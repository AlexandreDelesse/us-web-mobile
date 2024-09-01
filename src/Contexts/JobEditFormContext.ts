import { Dispatch, SetStateAction, createContext } from "react";
import { FieldInfos } from "../Domain/FormStructure";

interface IJobEditFormContext {
  fields: FieldInfos[];
  setFields: Dispatch<SetStateAction<FieldInfos[]>>;
}

const defaultValue = {
  fields: [],
  setFields: () => [],
};

const JobEditFormContext = createContext<IJobEditFormContext>(defaultValue);

export default JobEditFormContext;
