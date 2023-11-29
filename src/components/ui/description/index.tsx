import React, { HTMLAttributes } from "react";

interface IDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Description({
  left,
  right,
  className,
  ...props
}: IDescriptionProps) {
  return (
    <div
      className={`flex items-center content-center gap-x-[10px] ${
        className ? className : ""
      }`}
      {...props}
    >
      <div className="inline-flex content-center">{left}</div>
      <div className="inline-flex content-center">{right}</div>
    </div>
  );
}
