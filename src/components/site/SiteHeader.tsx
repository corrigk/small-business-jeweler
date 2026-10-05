"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "@/data/business";
import type { Theme } from "@/templates/config";

type Props = { theme: Theme; base: string };

const nav = [
  { label: "Home", path: "" },
  { label: "Rings", path: "/rings" },
  { label: "About", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

function Wordmark({ theme, base }: Props) {
  if (theme === "classic") {
    return (
      <Link href={base || "/"} className="block text-center">
        <span className="block font-display text-3xl font-semibold tracking-[0.12em] md:text-4xl">ABE HARRY &amp; SON</span>
        <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.5em] text-accent">Fine Jewelers · Independence, Ohio</span>
      </Link>
    );
  }
  if (theme === "minimal") {
    return (
      <Link href={base} className="font-display text-xl font-light tracking-[0.18em] uppercase">
        Abe Harry <span className="text-muted">&amp;</span> Son
      </Link>
    );
  }
  if (theme === "heritage") {
    return (
      <Link href={base} className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display text-lg font-bold text-accent-fg">
          A&amp;S
        </span>
        <span className="leading-tight">
          <span className="block font-display text-xl font-semibold">Abe Harry &amp; Son</span>
          <span className="block text-xs text-muted">Family jewelers · Independence, OH</span>
        </span>
      </Link>
    );
  }
  return (
    <Link href={base} className="font-display text-xl uppercase tracking-[0.3em]">
      Abe Harry <span className="text-accent">&amp;</span> Son
    </Link>
  );
}

export function SiteHeader({ theme, base }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === "" ? pathname === base : pathname === base + path || pathname.startsWith(base + path + "/");

  const linkClass = (active: boolean) => {
    const common = "transition-colors";
    switch (theme) {
      case "classic":
        return `${common} text-[0.72rem] uppercase tracking-[0.25em] ${active ? "text-accent" : "hover:text-accent"}`;
      case "minimal":
        return `${common} text-sm ${active ? "text-fg underline underline-offset-8" : "text-muted hover:text-fg"}`;
      case "heritage":
        return `${common} rounded-full px-4 py-2 text-sm font-bold ${active ? "bg-accent text-accent-fg" : "hover:bg-line"}`;
      case "dark":
        return `${common} text-[0.7rem] uppercase tracking-[0.25em] ${active ? "text-accent" : "text-muted hover:text-fg"}`;
    }
  };

  const links = nav.map((n) => (
    <Link
      key={n.label}
      href={base + n.path}
      className={linkClass(isActive(n.path))}
      onClick={() => setOpen(false)}
    >
      {n.label}
    </Link>
  ));

  const burger = (
    <button
      type="button"
      className="md:hidden p-2"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
      </svg>
    </button>
  );

  const mobileMenu = open && (
    <nav className="flex flex-col gap-4 border-t border-line px-6 py-5 md:hidden">{links}</nav>
  );

  if (theme === "classic") {
    return (
      <header className="bg-bg">
        <div className="bg-deep text-deep-fg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs tracking-wider">
            <span className="hidden sm:inline">Mon–Fri · 9:30 AM – 3:45 PM</span>
            <a href={business.phoneHref} className="sm:ml-auto hover:text-accent">
              Call {business.phone}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <div className="flex items-center justify-between md:justify-center">
            <Wordmark theme={theme} base={base} />
            <span className="md:hidden">{burger}</span>
          </div>
          <nav className="mt-7 hidden items-center justify-center gap-10 border-y border-line py-4 md:flex">{links}</nav>
        </div>
        {mobileMenu}
      </header>
    );
  }

  const shell: Record<Exclude<Theme, "classic">, string> = {
    minimal: "sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur",
    heritage: "bg-bg",
    dark: "sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur",
  };

  return (
    <header className={shell[theme]}>
      {theme === "heritage" && (
        <div className="bg-accent text-accent-fg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs font-bold">
            <span>Family owned · Independence, Ohio</span>
            <a href={business.phoneHref} className="hover:underline">
              {business.phone}
            </a>
          </div>
        </div>
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Wordmark theme={theme} base={base} />
        <nav className="hidden items-center gap-2 md:flex md:gap-7">{links}</nav>
        {burger}
      </div>
      {mobileMenu}
    </header>
  );
}
