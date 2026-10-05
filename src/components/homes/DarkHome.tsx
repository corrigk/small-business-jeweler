import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Stars } from "@/components/ui/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { VisitSection } from "@/components/site/VisitSection";
import { categories, featuredProducts, photos } from "@/data/products";
import { pullQuotes } from "@/data/reviews";
import { styles } from "@/templates/styles";

export function DarkHome({ base }: { base: string }) {
  const s = styles.dark;
  const featured = featuredProducts().slice(0, 4);
  const quote = pullQuotes[1];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Photo src={photos.heroRing} alt="Diamond ring on a dark box" className="absolute inset-0 -z-20" imgClassName="object-[50%_60%]" priority />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/60 to-bg/30" />
        <div className="mx-auto flex min-h-[40rem] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:min-h-[46rem]">
          <p className={s.eyebrow}>Abe Harry &amp; Son · Independence, Ohio</p>
          <h1 className={`${s.h1} mt-5 max-w-3xl md:text-8xl`}>
            Make it
            <br />
            <span className="text-accent">unforgettable</span>
          </h1>
          <p className="mt-6 max-w-lg text-muted">
            Engagement rings, wedding bands, and custom work for the moments you only get once.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={`${base}/rings`} className={s.btn}>
              Shop rings
            </Link>
            <Link href={`${base}/contact`} className={s.btnOutline}>
              Book a visit
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-center sm:grid-cols-3">
          {[
            ["5.0", "Rated on Yelp"],
            ["Custom", "Design & repair"],
            ["Mon–Fri", "9:30 – 3:45"],
          ].map(([big, small]) => (
            <div key={big}>
              <p className="font-display text-3xl uppercase tracking-wide text-accent">{big}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className={s.h2}>The collections</h2>
          <Link href={`${base}/rings`} className="text-xs uppercase tracking-[0.25em] text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((c) => (
            <Link key={c.id} href={`${base}/rings?category=${c.id}`} className="group relative block overflow-hidden border border-line">
              <Photo src={c.image} alt={c.label} className="aspect-[16/10]" imgClassName="transition-transform duration-700 group-hover:scale-105" sizes="(min-width:640px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl uppercase tracking-wide">{c.label}</h3>
                <p className="mt-1 text-sm text-muted">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className={s.eyebrow}>Featured</p>
          <h2 className={`${s.h2} mt-3 mb-12`}>In the case now</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} theme="dark" base={base} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative">
          <Photo src={photos.bench} alt="A jeweler cutting a ring at the bench" className="aspect-[4/5]" sizes="(min-width:768px) 50vw, 100vw" />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-accent" />
        </div>
        <div>
          <p className={s.eyebrow}>Custom &amp; repairs</p>
          <h2 className={`${s.h2} mt-3`}>Built around your story</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Bring us a sketch, a stone, or a family heirloom. We will help you design something no one else has, and keep
            the pieces you already own looking their best.
          </p>
          <Link href={`${base}/about`} className={`${s.btnOutline} mt-8`}>
            Our services
          </Link>
        </div>
      </section>

      <section className="border-y border-line px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <Stars size={20} />
          <p className="mt-8 font-display text-3xl uppercase leading-snug tracking-wide md:text-4xl">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-accent">
            {quote.name} · {quote.location}
          </p>
          <Link href={`${base}/reviews`} className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-muted hover:text-accent">
            Read all reviews
          </Link>
        </div>
      </section>

      <VisitSection theme="dark" base={base} />
    </>
  );
}
