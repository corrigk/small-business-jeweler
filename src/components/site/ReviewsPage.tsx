import Link from "next/link";
import { Stars } from "@/components/ui/Stars";
import { business } from "@/data/business";
import { ratingSummary, reviews } from "@/data/reviews";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";
import { PageHeader } from "./PageHeader";
import { ReviewCard } from "./ReviewCard";

export function ReviewsPage({ theme, base }: { theme: Theme; base: string }) {
  const s = styles[theme];
  return (
    <>
      <PageHeader
        theme={theme}
        eyebrow="Kind words"
        title="What customers say"
        intro="Nothing means more to us than a customer who comes back, or sends a friend."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-7xl text-accent">{ratingSummary.average.toFixed(1)}</p>
          <Stars rating={ratingSummary.average} size={22} />
          <p className="text-sm text-muted">
            Average rating from {ratingSummary.count} reviews on {ratingSummary.source}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} theme={theme} />
          ))}
        </div>

        <div className={`${s.panel} mt-16 text-center`}>
          <h2 className={s.h2}>Come see for yourself</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Stop by {business.name} in Independence, or call and we will help you find the right piece.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`${base}/rings`} className={s.btn}>
              Browse rings
            </Link>
            <a href={business.phoneHref} className={s.btnOutline}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
