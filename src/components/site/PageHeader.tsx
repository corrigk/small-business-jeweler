import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";

type Props = { theme: Theme; eyebrow: string; title: string; intro?: string };

export function PageHeader({ theme, eyebrow, title, intro }: Props) {
  const s = styles[theme];

  if (theme === "classic") {
    return (
      <div className="px-6 pt-14 pb-4 text-center">
        <p className={s.eyebrow}>{eyebrow}</p>
        <h1 className={`${s.h1} mt-4`}>{title}</h1>
        <div className="mx-auto mt-6 h-px w-24 bg-accent" />
        {intro && <p className="mx-auto mt-6 max-w-2xl text-muted">{intro}</p>}
      </div>
    );
  }
  if (theme === "heritage") {
    return (
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <div className="rounded-theme-lg bg-deep px-8 py-14 text-center text-deep-fg md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e9b98f]">{eyebrow}</p>
          <h1 className={`${s.h1} mt-3`}>{title}</h1>
          {intro && <p className="mx-auto mt-5 max-w-2xl opacity-80">{intro}</p>}
        </div>
      </div>
    );
  }
  if (theme === "dark") {
    return (
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className={s.eyebrow}>{eyebrow}</p>
          <h1 className={`${s.h1} mt-4`}>{title}</h1>
          {intro && <p className="mt-5 max-w-2xl text-muted">{intro}</p>}
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
      <p className={s.eyebrow}>{eyebrow}</p>
      <h1 className={`${s.h1} mt-4`}>{title}</h1>
      {intro && <p className="mt-5 max-w-xl text-muted">{intro}</p>}
    </div>
  );
}
