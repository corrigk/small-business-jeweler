"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { getProduct } from "@/data/products";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";

// Mockup only. Becomes a real submission (Supabase table + email) in the full build.
export function ContactForm({ theme }: { theme: Theme }) {
  const s = styles[theme];
  const ring = getProduct(useSearchParams().get("ring") ?? "");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={s.panel} role="status">
        <h3 className={s.h3}>Thank you!</h3>
        <p className="mt-3 text-muted">
          This is a demo form, so nothing was sent. In the finished site your message will go straight to the shop.
        </p>
      </div>
    );
  }

  return (
    <form
      className={`${s.panel} space-y-4`}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {ring && (
        <p className="text-sm">
          Asking about: <span className="font-bold">{ring.name}</span>
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={s.input} name="name" placeholder="Your name" required aria-label="Your name" />
        <input className={s.input} name="phone" placeholder="Phone (optional)" aria-label="Phone" />
      </div>
      <input className={s.input} name="email" type="email" placeholder="Email" required aria-label="Email" />
      <textarea
        className={s.input}
        name="message"
        rows={5}
        aria-label="Message"
        placeholder="Tell us what you're looking for: a ring, a repair, a custom design..."
        defaultValue={ring ? `Hi, I'm interested in the ${ring.name}.` : ""}
        required
      />
      <button type="submit" className={s.btn}>
        Send Message
      </button>
    </form>
  );
}
