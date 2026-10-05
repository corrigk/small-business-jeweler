import { Suspense } from "react";
import { business, mapsEmbed, mapsLink } from "@/data/business";
import type { Theme } from "@/templates/config";
import { styles } from "@/templates/styles";
import { ContactForm } from "./ContactForm";
import { HoursList } from "./HoursList";
import { PageHeader } from "./PageHeader";

export function ContactPage({ theme }: { theme: Theme }) {
  const s = styles[theme];
  const round = theme === "heritage" ? "rounded-theme-lg overflow-hidden" : "";
  return (
    <>
      <PageHeader
        theme={theme}
        eyebrow="Visit or get in touch"
        title="Contact us"
        intro="Stop by the shop, give us a call, or send a note and we will get back to you."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-10">
          <div>
            <h2 className={s.h3}>Find us</h2>
            <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-3 block text-muted hover:text-fg">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.state} {business.address.zip}
            </a>
            <a href={business.phoneHref} className="mt-3 block text-xl text-accent hover:underline">
              {business.phone}
            </a>
          </div>
          <div>
            <h2 className={`${s.h3} mb-3`}>Hours</h2>
            <HoursList className="max-w-sm" />
          </div>
        </div>

        <div id="message">
          <h2 className={`${s.h3} mb-4`}>Send a message</h2>
          <Suspense fallback={<div className={s.panel}>Loading form…</div>}>
            <ContactForm theme={theme} />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className={`h-96 w-full border border-line ${round}`}>
          <iframe
            title="Map to Abe Harry & Son"
            src={mapsEmbed}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
