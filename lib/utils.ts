import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility to prefix paths with basePath for static export
// This ensures images work correctly when deployed to a subdirectory
export function getImagePath(path: string): string {
  // Just return the path as-is for now
  // The basePath will be handled by Next.js configuration when needed
  return path
}

