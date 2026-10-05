import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Stars } from "@/components/ui/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { VisitSection } from "@/components/site/VisitSection";
import { categories, featuredProducts, photos } from "@/data/products";
import { pullQuotes } from "@/data/reviews";
import { styles } from "@/templates/styles";

export function ClassicHome({ base }: { base: string }) {
  const s = styles.classic;
  const featured = featuredProducts().slice(0, 4);
  const quote = pullQuotes[0];

  return (
    <>
      <section className="relative isolate overflow-hidden text-deep-fg">
        <Photo src={photos.heroRing} alt="Diamond ring on a dark box" className="absolute inset-0 -z-20" priority />
        <div className="absolute inset-0 -z-10 bg-deep/55" />
        <div className="mx-auto flex min-h-[34rem] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.45em] text-[#d8bd7f]">Independence, Ohio</p>
          <h1 className={`${s.h1} mt-6`}>Fine jewelry for life&rsquo;s most treasured moments</h1>
          <div className="my-8 h-px w-24 bg-accent" />
          <p className="max-w-xl text-lg opacity-90">
            Engagement rings, wedding bands, and custom pieces, chosen with patience and honest advice.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={`${base}/rings`} className={s.btn}>
              Browse rings
            </Link>
            <Link href={`${base}/contact`} className="inline-flex items-center justify-center border border-deep-fg/60 px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.25em] hover:bg-deep-fg hover:text-deep">
              Visit the shop
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className={s.eyebrow}>Shop by style</p>
          <h2 className={`${s.h2} mt-3`}>Find your ring</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-accent" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.id} href={`${base}/rings?category=${c.id}`} className="group border border-line bg-surface p-3 text-center">
              <Photo src={c.image} alt={c.label} className="aspect-[4/5]" imgClassName="transition-transform duration-500 group-hover:scale-105" sizes="(min-width:1024px) 25vw, 50vw" />
              <h3 className="mt-4 font-display text-xl font-semibold">{c.label}</h3>
              <p className="mt-1 mb-2 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className={s.eyebrow}>Featured</p>
            <h2 className={`${s.h2} mt-3`}>Favorites from the case</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} theme="classic" base={base} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`${base}/rings`} className={s.btnOutline}>
              View all rings
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-deep px-6 py-20 text-center text-deep-fg">
        <div className="mx-auto max-w-3xl">
          <Stars size={20} />
          <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">&ldquo;{quote.text}&rdquo;</p>
          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#d8bd7f]">
            {quote.name} · {quote.location}
          </p>
          <Link href={`${base}/reviews`} className="mt-8 inline-block text-sm underline underline-offset-4 hover:text-[#d8bd7f]">
            Read more reviews
          </Link>
        </div>
      </section>

      <VisitSection theme="classic" base={base} />
    </>
  );
}
