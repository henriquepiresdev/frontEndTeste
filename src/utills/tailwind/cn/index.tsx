import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function twAfterHelper(...inputs: ClassValue[]) {
  return cn(...inputs)
    .split(" ")
    .map((input) => `after:${input}`);
}
