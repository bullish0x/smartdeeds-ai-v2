import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility to prefix paths with basePath for static export
// This ensures images work correctly when deployed to a subdirectory
export function getImagePath(path: string): string {
  const basePath = '/smartdeeds'
  // Only prefix if path starts with / and basePath is set
  if (path.startsWith('/') && basePath) {
    return `${basePath}${path}`
  }
  return path
}

