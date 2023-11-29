import React, { ButtonHTMLAttributes } from "react";

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({
  children,
  className,
  ...props
}: IIconButtonProps) {
  return (
    <button className={`p-[5px] ${!!className ? className : ""}`} {...props}>
      {children}
    </button>
  );
}
