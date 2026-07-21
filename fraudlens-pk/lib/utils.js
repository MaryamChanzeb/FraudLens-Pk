import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely (skips falsy values, resolves conflicts).
 * This is the same helper shadcn/ui components rely on.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
