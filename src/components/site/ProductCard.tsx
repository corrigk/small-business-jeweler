import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { SHOW_PRICES } from "@/data/business";
import { categoryLabel, formatPrice, type Product } from "@/data/products";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";

type Props = { product: Product; theme: Theme; base: string; sizes?: string };

export function ProductCard({ product, theme, base, sizes = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" }: Props) {
  const s = styles[theme];
  return (
    <Link href={`${base}/rings/${product.slug}`} className={`${s.card} block`}>
      <Photo
        src={product.images[0]}
        alt={`${product.name} — ${product.metal}`}
        className={s.cardImg}
        imgClassName="transition-transform duration-500 group-hover:scale-105"
        sizes={sizes}
      />
      <div className={s.cardBody}>
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">{categoryLabel(product.category)}</p>
        <h3 className={`${s.cardTitle} mt-1`}>{product.name}</h3>
        <p className="mt-1 text-sm text-muted">
          {product.metal}
          {product.stone !== "None" ? ` · ${product.stone}` : ""}
        </p>
        <p className="mt-2 text-sm font-semibold text-accent">
          {SHOW_PRICES ? formatPrice(product.price) : "Inquire for pricing"}
        </p>
      </div>
    </Link>
  );
}
