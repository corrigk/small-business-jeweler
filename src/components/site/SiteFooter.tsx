import Link from "next/link";
import { business, fullAddress, mapsLink } from "@/data/business";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";

export function SiteFooter({ theme, base }: { theme: Theme; base: string }) {
  const s = styles[theme];
  return (
    <footer className={s.footer}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            Jewelers in {business.city}. Engagement rings, wedding bands, custom design, and repairs.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-60">Visit</p>
          <a href={mapsLink} target="_blank" rel="noreferrer" className="block hover:underline">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </a>
          <a href={business.phoneHref} className="mt-3 block hover:underline">
            {business.phone}
          </a>
          <p className="mt-3 opacity-70">Mon–Fri 9:30 AM – 3:45 PM</p>
          <p className="opacity-70">Closed Saturday &amp; Sunday</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-60">Explore</p>
          <ul className="space-y-2">
            {[
              ["Rings", "/rings"],
              ["About & Services", "/about"],
              ["Reviews", "/reviews"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link href={base + path} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-current/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs opacity-60">
          © {new Date().getFullYear()} {business.name}. {fullAddress}.
        </p>
      </div>
    </footer>
  );
}
