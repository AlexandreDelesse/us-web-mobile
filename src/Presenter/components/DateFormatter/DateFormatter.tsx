import React from "react";

interface DateFormatterProps {
  isoDate?: string | null;
  dateSpecial?: string;
  dateToParse?: string;
}
export default function DateFormatter(props: DateFormatterProps) {
  const { isoDate, dateSpecial, dateToParse } = props;

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  if (dateSpecial) {
    let [date, time] = dateSpecial.split(" ");
    let [d, m, y] = date.split("/");
    let [h, min, s] = time.split(":");
    return (
      <>
        {new Date(
          parseInt(y),
          parseInt(m),
          parseInt(d),
          parseInt(h),
          parseInt(min),
          parseInt(s)
        ).toLocaleTimeString([], timeOptions)}
      </>
    );
  }

  if (dateToParse) {
    let time = Date.parse(dateToParse);
    return <>{new Date(time).toLocaleString([], dateTimeOptions)}</>;
  }
  return (
    <>{isoDate ? new Date(isoDate).toLocaleDateString("fr", options) : ""}</>
  );
}
