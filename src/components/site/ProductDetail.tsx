import Link from "next/link";
import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { SHOW_PRICES, business } from "@/data/business";
import { categoryLabel, formatPrice, products, type Product } from "@/data/products";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";
import { Gallery } from "./Gallery";
import { ProductCard } from "./ProductCard";

export function ProductDetail({ product, theme, base }: { product: Product; theme: Theme; base: string }) {
  const s = styles[theme];
  const frame = theme === "heritage" ? "rounded-theme-lg overflow-hidden" : "";
  const related = [
    ...products.filter((p) => p.category === product.category && p.slug !== product.slug),
    ...products.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <nav className="mb-8 text-xs text-muted" aria-label="Breadcrumb">
        <Link href={base} className="hover:text-fg">Home</Link> <span aria-hidden>/</span>{" "}
        <Link href={`${base}/rings`} className="hover:text-fg">Rings</Link> <span aria-hidden>/</span>{" "}
        <span className="text-fg">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Gallery images={product.images} name={product.name} frameClass={frame} />

        <div>
          <p className={s.eyebrow}>{categoryLabel(product.category)}</p>
          <h1 className={`${s.h2} mt-3`}>{product.name}</h1>
          <p className="mt-4 text-2xl text-accent">
            {SHOW_PRICES ? formatPrice(product.price) : "Inquire for pricing"}
          </p>
          <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

          <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
            {product.specs.map((sp) => (
              <div key={sp.label} className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                <dt className="text-muted">{sp.label}</dt>
                <dd>{sp.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-3">
            <AddToCartButton className={`${s.btn} w-full`} />
            <Link href={`${base}/contact?ring=${product.slug}`} className={`${s.btnOutline} w-full`}>
              Inquire About This Ring
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted">
            Prefer to see it in person? Call{" "}
            <a href={business.phoneHref} className="font-semibold text-fg underline underline-offset-4">
              {business.phone}
            </a>{" "}
            or stop by our Independence showroom, Mon–Fri 9:30 AM – 3:45 PM.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className={`${s.h3} mb-6`}>You may also like</h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} theme={theme} base={base} sizes="(min-width:1024px) 25vw, 50vw" />
          ))}
        </div>
      </section>
    </div>
  );
}
