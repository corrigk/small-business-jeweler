import Link from "next/link";
import { templates, type TemplateInfo } from "@/templates/config";

// Floating bar so the client can flip between designs without going back to the start.
export function TemplateSwitcher({ current }: { current: TemplateInfo }) {
  const idx = templates.findIndex((t) => t.id === current.id);
  const prev = templates[(idx - 1 + templates.length) % templates.length];
  const next = templates[(idx + 1) % templates.length];
  const btn = "rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-white/15";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div
        className="pointer-events-auto flex items-center gap-1 rounded-full bg-neutral-900/95 px-2 py-1.5 text-white shadow-xl ring-1 ring-white/10 backdrop-blur"
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        <Link href={`/templates/${prev.id}`} className={btn} aria-label={`Previous: ${prev.name}`}>
          ←
        </Link>
        <span className="whitespace-nowrap px-2 text-xs">
          <span className="opacity-60">
            <span className="hidden sm:inline">Template </span>
            {current.id}/{templates.length} ·{" "}
          </span>
          <span className="font-semibold">{current.name}</span>
        </span>
        <Link href={`/templates/${next.id}`} className={btn} aria-label={`Next: ${next.name}`}>
          →
        </Link>
        <span className="mx-1 h-4 w-px bg-white/20" />
        <Link href="/" className={btn}>
          All
        </Link>
      </div>
    </div>
  );
}
