import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isDark = (theme: string, systemTheme: string) => {
  if (theme === "dark") return true;
  if (theme == "system" && systemTheme == "dark") return true;
  return false;
};
