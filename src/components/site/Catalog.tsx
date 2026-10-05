"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { categories, metals, stones, type Category, type Metal, type Product, type Stone } from "@/data/products";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";
import { ProductCard } from "./ProductCard";

type Props = { products: Product[]; theme: Theme; base: string };
type Sort = "featured" | "low" | "high";

const gridCols: Record<Theme, string> = {
  classic: "sm:grid-cols-2 lg:grid-cols-3 gap-8",
  minimal: "grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10",
  heritage: "sm:grid-cols-2 lg:grid-cols-3 gap-7",
  dark: "sm:grid-cols-2 lg:grid-cols-4 gap-5",
};

export function Catalog({ products, theme, base }: Props) {
  const s = styles[theme];
  const params = useSearchParams();
  const initial = params.get("category");
  const [category, setCategory] = useState<Category | "all">(
    categories.some((c) => c.id === initial) ? (initial as Category) : "all",
  );
  const [metal, setMetal] = useState<Metal | "all">("all");
  const [stone, setStone] = useState<Stone | "all">("all");
  const [sort, setSort] = useState<Sort>("featured");

  const shown = useMemo(() => {
    const list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (metal === "all" || p.metal === metal) &&
        (stone === "all" || p.stone === stone),
    );
    if (sort === "low") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, category, metal, stone, sort]);

  const tabs = [{ id: "all" as const, label: "All Rings" }, ...categories.map((c) => ({ id: c.id, label: c.label }))];
  const sidebar = theme === "minimal";

  const selectCls = s.input;
  const dropdowns = (
    <div className={sidebar ? "flex flex-col gap-4" : "flex flex-wrap items-end justify-center gap-4"}>
      <label className="text-xs text-muted">
        Metal
        <select className={`${selectCls} mt-1 min-w-40`} value={metal} onChange={(e) => setMetal(e.target.value as Metal | "all")}>
          <option value="all">All metals</option>
          {metals.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </label>
      <label className="text-xs text-muted">
        Stone
        <select className={`${selectCls} mt-1 min-w-40`} value={stone} onChange={(e) => setStone(e.target.value as Stone | "all")}>
          <option value="all">All stones</option>
          {stones.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </label>
      <label className="text-xs text-muted">
        Sort by
        <select className={`${selectCls} mt-1 min-w-40`} value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
          <option value="featured">Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </label>
    </div>
  );

  const tabButtons = tabs.map((t) => (
    <button
      key={t.id}
      type="button"
      onClick={() => setCategory(t.id)}
      className={category === t.id ? s.chipActive : s.chip}
      aria-pressed={category === t.id}
    >
      {t.label}
    </button>
  ));

  const grid =
    shown.length === 0 ? (
      <div className="py-20 text-center text-muted">
        <p>No rings match those filters.</p>
        <button
          type="button"
          className="mt-4 underline"
          onClick={() => {
            setCategory("all");
            setMetal("all");
            setStone("all");
          }}
        >
          Clear filters
        </button>
      </div>
    ) : (
      <div className={`grid ${gridCols[theme]}`}>
        {shown.map((p) => (
          <ProductCard
            key={p.slug}
            product={p}
            theme={theme}
            base={base}
            sizes={sidebar ? "(min-width:1024px) 25vw, 50vw" : "(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"}
          />
        ))}
      </div>
    );

  if (sidebar) {
    return (
      <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
        <aside className="space-y-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Category</p>
            <div className="flex flex-col items-start gap-2">{tabButtons}</div>
          </div>
          {dropdowns}
        </aside>
        <div>
          <p className="mb-6 text-sm text-muted">{shown.length} rings</p>
          {grid}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">{tabButtons}</div>
        {dropdowns}
      </div>
      <p className="mb-6 text-center text-sm text-muted">{shown.length} rings</p>
      {grid}
    </div>
  );
}
