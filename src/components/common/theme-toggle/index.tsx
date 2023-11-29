"use client";
import { BiSun, BiMoon } from "react-icons/bi";
import IconButton from "~/components/ui/icon-button";
import useLocalStorage from "~/hooks/useLocalStorage";
import { ModeType } from "~/types";

export default function ThemeToggle() {
  const [mode, setMode] = useLocalStorage<ModeType>("theme", "light");

  const handleToggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <IconButton
      onClick={handleToggleMode}
      className="text-[18px] rounded-full border border-slate-700 dark:border-white dark:text-white"
    >
      {mode === "light" ? <BiSun /> : <BiMoon />}
    </IconButton>
  );
}
