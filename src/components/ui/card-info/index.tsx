import React, { HTMLAttributes } from "react";

interface ICardInfoProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  years?: string;
}

export default function CardInfo({
  title,
  subtitle,
  children,
  years,
  ...props
}: ICardInfoProps) {
  return (
    <div className="flex items-stretch gap-x-8 group" {...props}>
      <div className="w-[1px] min-h-[84px] bg-gray-300 ml-2 relative">
        <div
          className="absolute w-[11px] h-[11px] rounded-full bg-main top-0
      -left-[5px] group-hover:top-full  group-hover:-translate-y-full transition-all duration-500"
        ></div>
      </div>
      <div>
        <p className="text font-semibold text-[14px] leading-none mb-2">
          {title}
        </p>
        {subtitle && (
          <p className="leading-none text-gray-400 mb-4">{subtitle}</p>
        )}
        {children}
        {years && <p className="text font-medium">{years}</p>}
      </div>
    </div>
  );
}
