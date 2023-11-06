import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string | null | undefined) => {
  if (typeof name !== "string") return;

  const nameToUpperCase = name.toUpperCase();
  const words = nameToUpperCase.split(" ");

  if (words.length === 1) return words[0].charAt(0);

  return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`;
};
