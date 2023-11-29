import React, { ButtonHTMLAttributes } from "react";

type ButtonType = "primary" | "secondary";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  className,
  endIcon,
  startIcon,
  ...props
}: IButtonProps) {
  return (
    <button
      className={`h-[54px] px-6 py-2 ${
        variant === "primary" ? "bg-main" : "bg-black"
      } 
      text-white text-base rounded-full hover:brightness-90 transition-all flex items-center 
      gap-x-2 disabled:bg-gray-400 disabled:pointer-events-none ${className}`}
      {...props}
    >
      {startIcon && startIcon}
      <span className="inline-flex items-center justify-center">
        {children}
      </span>
      {endIcon && endIcon}
    </button>
  );
}
