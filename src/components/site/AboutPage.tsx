import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { business } from "@/data/business";
import { photos } from "@/data/products";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";
import { PageHeader } from "./PageHeader";

// PLACEHOLDER copy: replace with the family's real story, founding year, and names.
const values = [
  { title: "Honest advice", text: "We will tell you what we see, even when it means you do not need to buy anything." },
  { title: "Patient service", text: "No pressure and no rush. We will keep looking until we find the right piece." },
  { title: "Personal attention", text: "You will deal with the people who run the shop, not a rotating sales floor." },
];

export function AboutPage({ theme, base }: { theme: Theme; base: string }) {
  const s = styles[theme];
  const round = theme === "heritage" ? "rounded-theme-lg" : "";
  return (
    <>
      <PageHeader
        theme={theme}
        eyebrow="Our story"
        title="A family jeweler in Independence"
        intro="Abe Harry & Son is a small, independent jewelry store where the people behind the counter are the people who do the work."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <Photo src={photos.bench} alt="A jeweler cutting a ring at the workbench" className={`aspect-[4/5] ${round}`} sizes="(min-width:768px) 50vw, 100vw" />
        <div className="space-y-5 leading-relaxed text-muted">
          <h2 className={`${s.h2} text-fg`}>Jewelry, done the honest way</h2>
          <p>
            Tucked into Rockside Woods, we are the kind of shop people recommend to friends: the one that takes the
            time to answer questions, look at a piece properly, and find the right ring for the person and the budget.
          </p>
          <p>
            Whether you are choosing an engagement ring, replacing a lost stone, or bringing in a family heirloom that
            needs some care, you will get straight answers and careful work.
          </p>
          <p>
            Come by during the week, ask us anything, and see the pieces in person. We would love to meet you.
          </p>
          <Link href={`${base}/contact`} className={s.btn}>
            Plan a visit
          </Link>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 md:py-20">
          {values.map((v, i) => (
            <div key={v.title}>
              <p className="font-display text-5xl text-accent">0{i + 1}</p>
              <h3 className={`${s.h3} mt-3`}>{v.title}</h3>
              <p className="mt-2 text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-xl">
          <p className={s.eyebrow}>What we do</p>
          <h2 className={`${s.h2} mt-3`}>Services</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((sv) => (
            <div key={sv.title} className={s.panel}>
              <h3 className={s.h3}>{sv.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{sv.text}</p>
            </div>
          ))}
          <div className={`${s.panel} flex flex-col justify-center bg-deep! text-deep-fg`}>
            <h3 className={s.h3}>Not sure what you need?</h3>
            <p className="mt-3 text-sm opacity-80">Call us and we will point you in the right direction.</p>
            <a href={business.phoneHref} className="mt-4 font-bold underline underline-offset-4">
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
