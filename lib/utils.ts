import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function uploadFile(file: File) {
  const formData = new FormData()
  formData.append("file", file)
  return fetch("/api/upload", {
    method: "POST",
    body: formData,
  }).then((res) => res.json())
}
