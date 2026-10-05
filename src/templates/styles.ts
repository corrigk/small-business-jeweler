import type { Theme } from "./config";

// Class recipes that give each template its own personality.
// Shared components read from here so layout code stays the same.
export type Style = {
  eyebrow: string;
  h1: string;
  h2: string;
  h3: string;
  btn: string;
  btnOutline: string;
  card: string;
  cardBody: string;
  cardTitle: string;
  cardImg: string;
  chip: string;
  chipActive: string;
  input: string;
  panel: string;
  footer: string;
};

const base = "inline-flex items-center justify-center transition-colors duration-200 text-center";

export const styles: Record<Theme, Style> = {
  classic: {
    eyebrow: "text-[0.7rem] uppercase tracking-[0.35em] text-accent",
    h1: "font-display font-medium text-4xl sm:text-5xl leading-[1.05] md:text-7xl",
    h2: "font-display font-medium text-4xl md:text-5xl",
    h3: "font-display font-semibold text-2xl",
    btn: `${base} bg-accent text-accent-fg px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] hover:bg-deep`,
    btnOutline: `${base} border border-accent text-accent px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] hover:bg-accent hover:text-accent-fg`,
    card: "group bg-surface border border-line p-3 text-center",
    cardBody: "pt-4 pb-2",
    cardTitle: "font-display text-xl font-semibold",
    cardImg: "aspect-square",
    chip: "border-b-2 border-transparent px-1 pb-1 text-xs uppercase tracking-[0.2em] text-muted hover:text-fg",
    chipActive: "border-b-2 border-accent px-1 pb-1 text-xs uppercase tracking-[0.2em] text-fg",
    input: "w-full border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-accent",
    panel: "bg-surface border border-line p-8",
    footer: "bg-deep text-deep-fg",
  },
  minimal: {
    eyebrow: "text-xs uppercase tracking-[0.2em] text-muted",
    h1: "font-display font-light text-4xl sm:text-5xl leading-[1.02] tracking-tight md:text-7xl",
    h2: "font-display font-light text-3xl tracking-tight md:text-5xl",
    h3: "font-display font-normal text-xl",
    btn: `${base} bg-accent text-accent-fg px-7 py-3.5 text-sm hover:opacity-80`,
    btnOutline: `${base} border border-fg text-fg px-7 py-3.5 text-sm hover:bg-fg hover:text-bg`,
    card: "group",
    cardBody: "pt-3",
    cardTitle: "text-sm",
    cardImg: "aspect-[4/5] bg-surface",
    chip: "text-sm text-muted hover:text-fg",
    chipActive: "text-sm text-fg underline underline-offset-8",
    input: "w-full border-b border-line bg-transparent px-0 py-3 text-sm outline-none focus:border-fg",
    panel: "bg-surface p-8",
    footer: "bg-surface text-fg border-t border-line",
  },
  heritage: {
    eyebrow: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
    h1: "font-display font-semibold text-4xl sm:text-5xl leading-[1.08] md:text-6xl",
    h2: "font-display font-semibold text-3xl md:text-5xl",
    h3: "font-display font-semibold text-xl",
    btn: `${base} rounded-full bg-accent text-accent-fg px-7 py-3.5 text-sm font-bold hover:bg-deep`,
    btnOutline: `${base} rounded-full border-2 border-accent text-accent px-7 py-3 text-sm font-bold hover:bg-accent hover:text-accent-fg`,
    card: "group rounded-theme-lg bg-surface border border-line p-3 shadow-[0_6px_20px_-12px_rgba(90,50,20,0.35)] transition-transform hover:-translate-y-1",
    cardBody: "px-2 pt-4 pb-2",
    cardTitle: "font-display text-lg font-semibold",
    cardImg: "aspect-square rounded-theme",
    chip: "rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-muted hover:border-accent hover:text-accent",
    chipActive: "rounded-full border border-accent bg-accent px-4 py-2 text-sm font-semibold text-accent-fg",
    input: "w-full rounded-theme border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-accent",
    panel: "rounded-theme-lg bg-surface border border-line p-8",
    footer: "bg-deep text-deep-fg",
  },
  dark: {
    eyebrow: "text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-accent",
    h1: "font-display text-4xl sm:text-5xl leading-[1.02] uppercase tracking-wide md:text-7xl",
    h2: "font-display text-3xl uppercase tracking-wide md:text-5xl",
    h3: "font-display text-xl uppercase tracking-wide",
    btn: `${base} bg-accent text-accent-fg px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] hover:brightness-110`,
    btnOutline: `${base} border border-accent text-accent px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.25em] hover:bg-accent hover:text-accent-fg`,
    card: "group bg-surface border border-line transition-colors hover:border-accent",
    cardBody: "p-5",
    cardTitle: "font-display text-lg uppercase tracking-wide",
    cardImg: "aspect-square overflow-hidden",
    chip: "border border-line px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted hover:border-accent hover:text-accent",
    chipActive: "border border-accent bg-accent px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-accent-fg",
    input: "w-full border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-accent",
    panel: "bg-surface border border-line p-8",
    footer: "bg-deep text-deep-fg border-t border-line",
  },
};
