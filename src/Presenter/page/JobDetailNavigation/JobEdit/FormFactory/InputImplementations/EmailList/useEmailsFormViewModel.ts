import { useEffect, useState } from "react";
import { InputProps } from "../../../../../../../Domain/FormStructure";

export default function useEmailsFormViewModel(props: InputProps) {
  const { name, setValue, value } = props;

  const parsedValue: string[] = value ? JSON.parse(value) : [];

  const [emails, setEmails] = useState<string[]>(parsedValue);
  const [emailErrors, setEmailErrors] = useState<
    {
      index: number;
      msg: string;
    }[]
  >([]);
  const hasEmptyEmail = emails.some((email) => email === "");
  const hasError = !!emailErrors.length;

  const addEmptyEmail = () => {
    if (hasEmptyEmail) return;
    else setEmails((old) => [...old, ""]);
  };

  const deleteEmail = (indexToDelete: number) =>
    setEmails((old) => filterWithoutThisIndex(old, indexToDelete));

  const updateEmail = (emailContent: string, indexToUpdate: number) => {
    setEmails((old) =>
      replaceContentAtThisIndex(old, emailContent, indexToUpdate)
    );
  };

  useEffect(() => {
    const emptyEmailErrors = emails
      .map((el, index) => ({
        value: el,
        index,
        msg: "Renseignez ou supprimez l'email",
      }))
      .filter((el) => el.value == "");
    setEmailErrors(emptyEmailErrors);
    setValue(name, JSON.stringify(emails));
  }, [emails]);

  const getError = (index: number) =>
    emailErrors.find((el, i) => el.index === index);

  const initEmails = (emails: string[]) => setEmails(emails);

  const filterWithoutThisIndex = (list: string[], index: number) => {
    return list.filter((el, i) => i !== index);
  };

  const replaceContentAtThisIndex = (
    list: string[],
    newContent: string,
    indexToUpdate: number
  ) => list.map((el, i) => (i === indexToUpdate ? newContent : el));

  return {
    emails,
    addEmptyEmail,
    deleteEmail,
    updateEmail,
    initEmails,
    hasEmptyEmail,
    getError,
    hasError,
  };
}
