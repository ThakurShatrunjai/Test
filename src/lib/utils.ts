import { clsx, type ClassValue } from "clsx";

/**
 * cn() – className utility used by shadcn/ui
 * Safe for static sites
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
