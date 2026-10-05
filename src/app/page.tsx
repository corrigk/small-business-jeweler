import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { photos } from "@/data/products";
import { templates } from "@/templates/config";
import { fontClasses } from "@/templates/fonts";
import { styles } from "@/templates/styles";

const previewPhotos = [photos.heroRing, photos.heroGold, photos.heroBands, photos.showcase];

export default function ChooserPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Website design options</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Abe Harry &amp; Son</h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          Four looks for your new website. Open each one and click around: every option has a homepage, a rings
          catalog, a ring detail page, About &amp; Services, Reviews, and Contact. Photos and ring listings are
          samples, so imagine your own pieces in their place.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {templates.map((t, i) => {
            const s = styles[t.theme];
            return (
              <Link
                key={t.id}
                href={`/templates/${t.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
              >
                <div data-theme={t.theme} className={`theme-root ${fontClasses[t.theme]} relative p-6`}>
                  <div className="flex items-center justify-between border-b border-line pb-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    <span className="font-display text-sm normal-case tracking-normal text-fg">Abe Harry &amp; Son</span>
                    <span>Home · Rings · About</span>
                  </div>
                  <div className="mt-6 grid grid-cols-[1.2fr_1fr] items-center gap-5">
                    <div>
                      <p className={`${s.eyebrow} text-[0.55rem]!`}>Independence, OH</p>
                      <p className="mt-2 font-display text-2xl leading-tight md:text-3xl">{t.tagline}</p>
                      <span className={`${s.btn} mt-4 px-4! py-2! text-[0.6rem]!`}>Browse rings</span>
                    </div>
                    <Photo src={previewPhotos[i]} alt="" className={`aspect-[4/5] ${t.theme === "heritage" ? "rounded-t-full rounded-b-2xl" : ""}`} sizes="300px" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                      <span className="mr-2 text-neutral-400">{t.id}.</span>
                      {t.name}
                    </h2>
                    <div className="flex gap-1.5">
                      {t.swatches.map((c) => (
                        <span key={c} className="h-5 w-5 rounded-full ring-1 ring-black/15" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-600">{t.description}</p>
                  <span className="mt-auto pt-2 text-sm font-semibold text-neutral-900 group-hover:underline">
                    Open this design →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-sm text-neutral-500">
          Use the bar at the bottom of any design to jump between options. Online ordering, accounts, and checkout are not
          connected yet. Those come after you pick a direction.
        </p>
      </div>
    </main>
  );
}
