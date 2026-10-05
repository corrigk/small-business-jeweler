"use client";

// Images are referenced by Unsplash photo id (e.g. "photo-1605100804763-247f67b3557e").
// Swap in real shop photos later by putting files in /public and using their path.
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("photo-")) {
    return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${width}&q=${quality || 75}`;
  }
  return src;
}
