"use client";

import { useState } from "react";

// Mockup only. Becomes a real cart button once Supabase + Stripe are connected.
export function AddToCartButton({ className }: { className: string }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <button type="button" className={className} onClick={() => setClicked(true)}>
        {clicked ? "Added (demo)" : "Add to Cart"}
      </button>
      {clicked && (
        <p className="text-xs text-muted" role="status">
          Demo only. Online checkout is added in the full build.
        </p>
      )}
    </div>
  );
}
