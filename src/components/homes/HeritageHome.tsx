import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { ProductCard } from "@/components/site/ProductCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { VisitSection } from "@/components/site/VisitSection";
import { business } from "@/data/business";
import { categories, featuredProducts, photos } from "@/data/products";
import { reviews } from "@/data/reviews";
import { styles } from "@/templates/styles";

export function HeritageHome({ base }: { base: string }) {
  const s = styles.heritage;
  const featured = featuredProducts().slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
        <div>
          <p className={s.eyebrow}>Jewelers in Independence, Ohio</p>
          <h1 className={`${s.h1} mt-4`}>
            Family jewelers, <span className="text-accent">right down the road.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Come in, take your time, and let us help you find the ring, the repair, or the one-of-a-kind piece you have
            been looking for.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`${base}/rings`} className={s.btn}>
              Browse our rings
            </Link>
            <Link href={`${base}/about`} className={s.btnOutline}>
              Meet the shop
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-muted">
            {["Honest advice", "Patient service", "Repairs & custom work"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[0.65rem] text-accent-fg">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-t-[10rem] rounded-b-3xl bg-line" />
          <Photo src={photos.heroBands} alt="Interlocking gold wedding bands" className="relative aspect-[4/5] rounded-t-[10rem] rounded-b-3xl" priority sizes="(min-width:768px) 40vw, 100vw" />
          <div className="absolute -bottom-5 -left-3 w-36 rotate-[-4deg] overflow-hidden rounded-theme-lg border-4 border-bg shadow-lg md:-left-8 md:w-44">
            <Photo src={photos.pinkRoses} alt="Gold bridal ring set on a bouquet" className="aspect-square" sizes="200px" />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-4">
            {categories.map((c) => (
              <Link key={c.id} href={`${base}/rings?category=${c.id}`} className="group flex items-center gap-4 rounded-theme-lg border border-line bg-bg p-3 pr-5 transition-colors hover:border-accent">
                <Photo src={c.image} alt="" className="h-20 w-20 shrink-0 rounded-theme" sizes="80px" />
                <span>
                  <span className="block font-display text-lg font-semibold leading-tight">{c.label}</span>
                  <span className="text-xs font-bold text-accent">Shop now →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <Photo src={photos.bench2} alt="A jeweler working at the bench" className="aspect-[5/4] rounded-theme-lg" sizes="(min-width:768px) 50vw, 100vw" />
        <div>
          <p className={s.eyebrow}>The &ldquo;&amp; Son&rdquo; story</p>
          <h2 className={`${s.h2} mt-3`}>Honest, careful work at the bench</h2>
          <p className="mt-5 leading-relaxed text-muted">
            At {business.name}, you deal directly with the people who own the shop and do the work. That means
            straight answers, fair prices, and jewelry treated like it belongs to our own family.
          </p>
          <Link href={`${base}/about`} className={`${s.btnOutline} mt-8`}>
            Read our story
          </Link>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className={s.eyebrow}>Customer favorites</p>
            <h2 className={`${s.h2} mt-3`}>Rings people love</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} theme="heritage" base={base} sizes="(min-width:768px) 33vw, 100vw" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className={s.eyebrow}>5 stars on Yelp</p>
          <h2 className={`${s.h2} mt-3`}>Kind words from neighbors</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} theme="heritage" />
          ))}
        </div>
      </section>

      <VisitSection theme="heritage" base={base} />
    </>
  );
}
