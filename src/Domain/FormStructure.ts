export interface FormStructure {
  name: string;
  label: string;
  type: string;
  options: any;
}

export interface FieldInfos extends FormStructure {
  value: string;
}

export interface InputProps extends FieldInfos {
  setValue: (name: string, value: string) => any;
}
// export interface FormStructure {
//   name: string;
//   type: string;
//   label: string;
//   placeHolder: string;
//   required: boolean;
//   options: [{ id: string; value: string }];
// }
