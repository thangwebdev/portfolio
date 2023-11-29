"use client";
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "~/components/common/header";
import Footer from "~/components/common/footer";
import ContextProvider from "~/contexts";
import useLocalStorage from "~/hooks/useLocalStorage";
import { ModeType } from "~/types";
import { ConfigProvider } from "antd";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode] = useLocalStorage<ModeType>("theme", "light");
  useEffect(() => {
    if (
      mode === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ContextProvider>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "inherit",
                fontSize: 13,
              },
            }}
          >
            <Header />
            <div>{children}</div>
            <Footer />
          </ConfigProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
