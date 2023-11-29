"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HightLight from "~/components/common/hightlight";
import lottie, { AnimationItem } from "lottie-web";
import "./applink.css";

interface IAppLinkProps {
  children: React.ReactNode;
  href: string;
}

function AppLink({ children, href }: IAppLinkProps) {
  ``;
  const pathName = usePathname();
  const animationEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const animateEl = animationEl.current;
    let lottieEl: AnimationItem | null = null;

    const handleMouseEnter = () => {
      if (!lottieEl) {
        lottieEl = lottie.loadAnimation({
          container: animationEl.current as Element, // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "./assets/animation.json", // the path to the animation json
        });
      }
      lottieEl?.show();
      lottieEl?.play();
    };
    const handleMouseOut = () => {
      lottieEl?.stop();
      lottieEl?.hide();
    };
    animateEl?.addEventListener("mouseenter", handleMouseEnter);
    animateEl?.addEventListener("mouseout", handleMouseOut);
  }, [pathName]);

  return (
    <span className="inline-block px-4 py-2 relative">
      <Link
        className={`dark:text-white ${pathName === href ? "pointer-events-none" : ""}`}
        href={href}
      >
        {pathName !== href && (
          <span
            ref={animationEl}
            className="animation-link inline-block absolute z-10 top-0 left-0 w-full h-full bg-transparent overflow-hidden"
          ></span>
        )}
        {pathName === href && <HightLight />}
        {children}
      </Link>
    </span>
  );
}

export default AppLink;
