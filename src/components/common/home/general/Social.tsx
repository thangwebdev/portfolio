"use client";
import { RiGithubFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface ISocialProps extends HTMLAttributes<HTMLDivElement> {
  containerClassName?: string;
  iconClasseName?: string;
}

const icons = [
  {
    path: "https://github.com/thangwebdev",
    icon: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/linhlan.trang.900/",
    icon: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/windev100401/",
    icon: <RiInstagramFill />,
  },
];

export default function Social({
  containerClassName,
  iconClasseName,
}: ISocialProps) {
  return (
    <div className={`${containerClassName}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} target="_blank">
            <span className={`${iconClasseName}`}>{icon.icon}</span>
          </Link>
        );
      })}
    </div>
  );
}
