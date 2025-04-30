import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to readable string
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// Extract YouTube video ID from YouTube URL
export function getYoutubeVideoId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

// Generate a random rating between min and max
export function getRandomRating(min: number = 4.0, max: number = 5.0): string {
  return (Math.random() * (max - min) + min).toFixed(1);
}

// Generate a random number of reviews
export function getRandomReviewCount(min: number = 50, max: number = 500): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
