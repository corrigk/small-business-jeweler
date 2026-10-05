import type { Review } from "@/data/reviews";
import { Stars } from "@/components/ui/Stars";
import { styles } from "@/templates/styles";
import type { Theme } from "@/templates/config";

export function ReviewCard({ review, theme }: { review: Review; theme: Theme }) {
  const s = styles[theme];
  return (
    <figure className={`${s.panel} flex h-full flex-col gap-4`}>
      <Stars rating={review.rating} />
      <blockquote className="flex-1 leading-relaxed">“{review.text}”</blockquote>
      <figcaption className="text-sm">
        <span className="font-bold">{review.name}</span>
        <span className="text-muted">
          {" "}
          · {review.location} · {review.date} · via {review.source}
        </span>
      </figcaption>
    </figure>
  );
}
