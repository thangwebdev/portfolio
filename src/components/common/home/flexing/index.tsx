"use client";
import React, { HTMLAttributes } from "react";
import CountUp from "react-countup";

interface IFlexingProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  number?: number;
  suffixNumber?: string;
  icon?: React.ReactNode;
}

export default function Flexing({
  text,
  number,
  suffixNumber,
  icon,
  ...props
}: IFlexingProps) {
  return (
    <div
      className="p-2 shadow-2xl bg-white rounded-[10px] flex items-center gap-x-[10px]
    w-auto max-w-[150px] h-auto"
      {...props}
    >
      <span className="text-lg text-main">{!!icon && icon}</span>
      <div className="flex items-center gap-x-[5px]">
        {number && (
          <span className="text-[20px] inline-block font-semibold text-main">
            <CountUp
              end={number}
              suffix={suffixNumber}
              delay={1}
              duration={4}
            />
          </span>
        )}
        <span className="inline-block w-fit text-[12px] text-black leading-[13px]">
          {text}
        </span>
      </div>
    </div>
  );
}
