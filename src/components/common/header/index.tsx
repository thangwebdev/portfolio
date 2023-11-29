"use client";
import { useEffect, useState } from "react";
import AppLink from "~/components/ui/app-link";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    const spaceToTop = document.documentElement.scrollTop;
    if (spaceToTop >= 100) {
      setIsActive(true);
    }
    const handleScroll = () => {
      const spaceToTop = document.documentElement.scrollTop;
      if (spaceToTop >= 100 && isActive !== true) {
        setIsActive(true);
      } else if (spaceToTop < 100 && isActive !== false) {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <>
      <header
        className={`${
          isActive
            ? `bg-[#fff] shadow-md dark:bg-slate-800`
            : `bg-bgLight dark:bg-bgDark`
        }  fixed top-0 left-0 z-50 w-full h-auto transition-all`}
      >
        <div className="container mx-auto px-[10px] lg:px-0">
          <div className="h-[50px] flex items-center justify-between sm:px-0">
            <Link href="/">
              <Logo />
            </Link>
            <div className="flex items-center">
              <AppLink href="/">Home</AppLink>
              <AppLink href="/projects">Projects</AppLink>
              <AppLink href="/contact">Contact</AppLink>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <div className="w-full h-[50px]"></div>
    </>
  );
}
