import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Stars } from "@/components/ui/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { VisitSection } from "@/components/site/VisitSection";
import { categories, featuredProducts, photos } from "@/data/products";
import { pullQuotes } from "@/data/reviews";
import { styles } from "@/templates/styles";

export function MinimalHome({ base }: { base: string }) {
  const s = styles.minimal;
  const featured = featuredProducts().slice(0, 4);
  const quote = pullQuotes[0];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-24">
        <div>
          <p className={s.eyebrow}>Abe Harry &amp; Son · Independence, OH</p>
          <h1 className={`${s.h1} mt-6`}>
            Rings,
            <br />
            made personal.
          </h1>
          <p className="mt-6 max-w-md text-muted">
            Engagement rings, wedding bands, and custom pieces from a small, independent jeweler.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={`${base}/rings`} className={s.btn}>
              Shop rings
            </Link>
            <Link href={`${base}/contact`} className={s.btnOutline}>
              Visit the shop
            </Link>
          </div>
        </div>
        <Photo src={photos.heroGold} alt="Three gold rings with small stones" className="aspect-[4/5]" priority sizes="(min-width:768px) 50vw, 100vw" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.id} href={`${base}/rings?category=${c.id}`} className="group">
              <Photo src={c.image} alt={c.label} className="aspect-[3/4]" imgClassName="transition-transform duration-500 group-hover:scale-105" sizes="(min-width:768px) 25vw, 50vw" />
              <p className="mt-3 flex items-center justify-between text-sm">
                {c.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className={s.h2}>Featured</h2>
            <Link href={`${base}/rings`} className="text-sm underline underline-offset-8">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} theme="minimal" base={base} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate">
        <Photo src={photos.bench} alt="A jeweler at the workbench" className="absolute inset-0 -z-20" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="mx-auto max-w-6xl px-6 py-28 text-white">
          <p className="text-xs uppercase tracking-[0.2em] opacity-80">Custom &amp; repairs</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
            Have an idea, or an heirloom that needs care?
          </h2>
          <Link href={`${base}/about`} className="mt-8 inline-flex bg-white px-7 py-3.5 text-sm text-black hover:opacity-80">
            Our services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Stars size={18} />
        <p className="mt-6 font-display text-3xl font-light leading-snug md:text-4xl">&ldquo;{quote.text}&rdquo;</p>
        <p className="mt-5 text-sm text-muted">
          {quote.name}, {quote.location}
        </p>
        <Link href={`${base}/reviews`} className="mt-6 inline-block text-sm underline underline-offset-8">
          Read reviews
        </Link>
      </section>

      <VisitSection theme="minimal" base={base} />
    </>
  );
}
