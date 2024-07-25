import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getData(url: string) {
  const baseUrl = "http://localhost:1337";

  try {
    const response = await fetch(`${baseUrl + url}`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
