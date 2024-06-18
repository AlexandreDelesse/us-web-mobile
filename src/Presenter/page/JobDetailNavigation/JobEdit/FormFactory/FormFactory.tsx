import { InputProps } from "../../../../../Domain/FormStructure";
import CheckboxInput from "./InputImplementations/CheckboxInput";
import DatePicker from "./InputImplementations/DatePicker";
import EmailListFormView from "./InputImplementations/EmailList/EmailListFormView";
import PhoneListFormView from "./InputImplementations/PhoneList/PhoneListFormView";
import SelectInput from "./InputImplementations/SelectInput";
import TextFieldInput from "./InputImplementations/TextFieldInput";
import withFabricInfos from "./withFabricInfos";

interface FormFactoryProps {
  type: string;
  componentProps: InputProps;
}

export default function FormFactory(props: FormFactoryProps) {
  const { type, componentProps } = props;

  const getInput = () => {
    switch (type) {
      case "NIR":
        return TextFieldInput;
      case "Date":
        return DatePicker;
      case "MailList":
        return EmailListFormView;
      case "PhoneList":
        return PhoneListFormView;
      case "Checkbox":
        return CheckboxInput;
      case "Select":
        return SelectInput;
      default:
        return TextFieldInput;
    }
  };

  const Component = getInput();

  return withFabricInfos(Component, componentProps);
}
