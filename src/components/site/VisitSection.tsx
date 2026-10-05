import Link from "next/link";
import { business, mapsLink } from "@/data/business";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";
import { HoursList } from "./HoursList";

export function VisitSection({ theme, base }: { theme: Theme; base: string }) {
  const s = styles[theme];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className={`${s.panel} grid gap-10 md:grid-cols-2 md:p-12`}>
        <div>
          <p className={s.eyebrow}>Visit the shop</p>
          <h2 className={`${s.h2} mt-3`}>Come see us in Independence</h2>
          <p className="mt-5 text-muted">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </p>
          <a href={business.phoneHref} className="mt-3 block text-xl text-accent hover:underline">
            {business.phone}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mapsLink} target="_blank" rel="noreferrer" className={s.btn}>
              Get directions
            </a>
            <Link href={`${base}/contact`} className={s.btnOutline}>
              Send a message
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">Hours</p>
          <HoursList />
        </div>
      </div>
    </section>
  );
}
