"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";
import { getPressCopy } from "@/i18n/press";

const REAL_PHOTOS = [
  {
    src: "/press/prototype-on-bark-1.jpg",
    href: "/press/prototype-on-bark-1.jpg",
    imageClass: "object-cover",
  },
  {
    src: "/press/prototype-on-bark-2.jpg",
    href: "/press/prototype-on-bark-2.jpg",
    imageClass: "object-cover",
  },
  {
    src: "/press/prototype-on-stone.jpg",
    href: "/press/prototype-on-stone.jpg",
    imageClass: "object-cover",
  },
  {
    src: "/press/shoot-1.jpg",
    href: "/press/shoot-1.jpg",
    imageClass: "object-cover",
  },
  {
    src: "/press/shoot-2.jpg",
    href: "/press/shoot-2.jpg",
    imageClass: "object-cover",
  },
  {
    src: "/press/founder-portrait.jpg",
    href: "/press/founder-portrait.jpg",
    imageClass: "object-cover object-top",
  },
];

const RENDERS = [
  {
    src: "/press/black-capsule-product-render.png",
    href: "/press/black-capsule-product-render.png",
    imageClass: "object-contain p-8 md:p-12",
  },
  {
    src: "/press/black-capsule-product-render-2.webp",
    href: "/press/black-capsule-product-render-2.webp",
    imageClass: "object-contain p-8 md:p-12",
  },
  {
    src: "/press/white-capsule-product-render.png",
    href: "/press/white-capsule-product-render.png",
    imageClass: "object-contain p-8 md:p-12",
  },
  {
    src: "/press/prototype-in-grass-render.jpg",
    href: "/press/prototype-in-grass-render.jpg",
    imageClass: "object-cover",
  },
  {
    src: "/press/scene-render.jpg",
    href: "/press/scene-render.jpg",
    imageClass: "object-cover",
  },
];

const SUPPORTING_ASSETS = [
  {
    src: "/press/interface-frame.png",
    href: "/press/interface-frame.png",
    imageClass: "object-contain p-8 md:p-12",
  },
  {
    src: "/press/banner-og.jpg",
    href: "/press/banner-og.jpg",
    imageClass: "object-cover",
  },
];

function DownloadArrow() {
  return <span aria-hidden="true">↘</span>;
}

export default function PressClient() {
  const { locale, messages } = useI18n();
  const copy = getPressCopy(locale);
  const documentBase = `/press/${locale}`;
  const assetGroups = [
    {
      key: "real",
      heading: copy.assets.realHeading,
      description: copy.assets.realDescription,
      assets: REAL_PHOTOS,
      labels: copy.assets.real,
    },
    {
      key: "renders",
      heading: copy.assets.rendersHeading,
      description: copy.assets.rendersDescription,
      assets: RENDERS,
      labels: copy.assets.renders,
    },
    {
      key: "supporting",
      heading: copy.assets.supportingHeading,
      description: copy.assets.supportingDescription,
      assets: SUPPORTING_ASSETS,
      labels: copy.assets.supporting,
    },
  ];

  return (
    <main className="relative min-h-dvh w-full overflow-x-clip bg-white text-black">
      <Link
        href={localizedPath(locale)}
        className="absolute left-6 top-6 z-20 font-main text-sm font-medium md:left-10 md:top-10"
      >
        [ ← {messages.common.homePage} ]
      </Link>
      <span className="pointer-events-none absolute right-6 top-6 z-20 select-none font-main text-sm font-medium opacity-60 md:right-10 md:top-10">
        [ {copy.roomLabel} ]
      </span>
      <LanguageSwitcher className="absolute right-6 top-14 z-20 md:right-10 md:top-16" />

      <header className="relative mx-auto flex min-h-[88svh] w-full max-w-375 flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24 lg:px-16">
        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="font-main text-sm tracking-[0.08em] text-black/55 md:text-base">
              {copy.heroEyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl font-main text-[clamp(4rem,11vw,10.5rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              {copy.heroTitle[0]}
              <br />
              {copy.heroTitle[1]}
            </h1>
          </div>
          <div className="max-w-lg lg:pb-2">
            <p className="font-second text-lg leading-relaxed tracking-wide text-black/60 md:text-xl">
              {copy.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-main text-xs uppercase tracking-[0.12em] text-black/45">
              <span>{copy.updated}</span>
              <a
                href={`mailto:${copy.email}`}
                className="underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
              >
                {copy.email}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="border-y border-black/15 bg-[#0a0a0a] px-6 py-14 text-white md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto flex max-w-343.5 flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-main text-xs uppercase tracking-[0.16em] text-white/40">
              {copy.shortVersion}
            </p>
            <h2 className="mt-4 max-w-4xl font-main text-[clamp(2rem,5vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.045em]">
              {copy.tagline}
            </h2>
          </div>
          <a
            href={`${documentBase}/chronotap-press-kit-${locale}.zip`}
            download
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/25 px-6 py-3 font-main text-sm transition hover:border-white/60 hover:bg-white hover:text-black"
          >
            {copy.downloadKit} <DownloadArrow />
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-375 px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="font-main text-xs tracking-[0.16em] text-black/35">
              {copy.documents.eyebrow}
            </p>
            <h2 className="mt-4 font-main text-[clamp(2rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em]">
              {copy.documents.heading}
            </h2>
          </div>
          <div>
            {copy.documents.items.map((document) => (
              <article
                key={document.number}
                className="grid gap-4 border-t border-black/18 py-7 md:grid-cols-[3.5rem_1fr_auto] md:gap-6 md:py-9"
              >
                <span className="font-main text-xs tracking-[0.16em] text-black/30">
                  {document.number}
                </span>
                <div>
                  <h3 className="font-main text-2xl font-medium md:text-3xl">
                    {document.title}
                  </h3>
                  <p className="mt-2 font-second text-base leading-relaxed tracking-wide text-black/50 md:text-lg">
                    {document.description}
                  </p>
                  <span className="mt-3 block font-main text-[10px] uppercase tracking-[0.14em] text-black/35 md:text-xs">
                    {document.format}
                  </span>
                </div>
                <a
                  href={`${documentBase}/${document.file}`}
                  download
                  className="mt-2 inline-flex h-fit w-fit items-center gap-2 font-main text-sm underline decoration-black/20 underline-offset-4 transition hover:decoration-black md:mt-1"
                >
                  {copy.documents.download} <DownloadArrow />
                </a>
              </article>
            ))}
            <div className="border-t border-black/18" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-375 border-t border-black/15 px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="font-main text-xs tracking-[0.16em] text-black/35">
              {copy.facts.eyebrow}
            </p>
            <h2 className="mt-4 font-main text-[clamp(2rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em]">
              {copy.facts.heading}
            </h2>
          </div>
          <dl className="grid border-t border-black/18 sm:grid-cols-2">
            {copy.facts.items.map(([term, description]) => (
              <div
                key={term}
                className="border-b border-black/18 py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
              >
                <dt className="font-main text-[10px] uppercase tracking-[0.15em] text-black/35 md:text-xs">
                  {term}
                </dt>
                <dd className="mt-2 font-main text-lg font-medium leading-snug md:text-xl">
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="assets"
        className="border-y border-black/15 bg-[#f5f5f3] px-6 py-24 md:px-10 md:py-36 lg:px-16"
      >
        <div className="mx-auto w-full max-w-343.5">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-main text-xs tracking-[0.16em] text-black/35">
                {copy.assets.eyebrow}
              </p>
              <h2 className="mt-4 font-main text-[clamp(2.5rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
                {copy.assets.heading[0]}
                <br />
                {copy.assets.heading[1]}
              </h2>
            </div>
            <p className="max-w-sm font-second text-base leading-relaxed tracking-wide text-black/48 md:text-lg">
              {copy.assets.intro}
            </p>
          </div>

          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {assetGroups.map((group) => (
              <div key={group.key}>
                <div className="mb-7 flex flex-col justify-between gap-3 border-t border-black/18 pt-5 sm:flex-row sm:items-end md:mb-10">
                  <h3 className="font-main text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                    {group.heading}
                  </h3>
                  <p className="max-w-md font-second text-sm leading-relaxed tracking-wide text-black/45 md:text-base">
                    {group.description}
                  </p>
                </div>
                <div className="grid gap-x-5 gap-y-10 md:grid-cols-2">
                  {group.assets.map((asset, index) => {
                    const [title, type] = group.labels[index];
                    return (
                      <article key={asset.src}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white md:rounded-3xl">
                          <Image
                            src={asset.src}
                            alt={title}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className={asset.imageClass}
                          />
                        </div>
                        <div className="flex items-start justify-between gap-4 px-1 pt-4">
                          <div>
                            <h4 className="font-main text-lg font-medium md:text-xl">
                              {title}
                            </h4>
                            <p className="mt-1 font-main text-[10px] uppercase tracking-[0.13em] text-black/35 md:text-xs">
                              {type}
                            </p>
                          </div>
                          <a
                            href={asset.href}
                            download
                            aria-label={`${copy.assets.downloadAria} ${title}`}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 transition hover:border-black/60 hover:bg-black hover:text-white"
                          >
                            <DownloadArrow />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              ["/press/chronotap-mark.svg", copy.assets.vector],
              ["/press/chronotap-mark.png", copy.assets.png],
            ].map(([href, format]) => (
              <a
                key={href}
                href={href}
                download
                className="flex items-center justify-between rounded-2xl border border-black/15 bg-white p-6 transition hover:border-black/40 md:rounded-3xl md:p-8"
              >
                <span>
                  <span className="block font-main text-xl font-medium">
                    {copy.assets.mark}
                  </span>
                  <span className="mt-1 block font-main text-xs uppercase tracking-[0.13em] text-black/35">
                    {format}
                  </span>
                </span>
                <DownloadArrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-375 px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <p className="font-main text-xs tracking-[0.16em] text-black/35">
              {copy.links.eyebrow}
            </p>
            <h2 className="mt-4 font-main text-[clamp(2rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em]">
              {copy.links.heading[0]}
              <br />
              {copy.links.heading[1]}
            </h2>
          </div>
          <div>
            {copy.links.items.map(([label, detail, href], index) => {
              const external = href?.startsWith("http") || href?.includes('.mp4');
              const content = (
                <>
                  <span className="font-main text-xs tracking-[0.16em] text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-main text-xl font-medium md:text-2xl">
                      {label}
                    </span>
                    <span className="mt-1 block font-second text-sm tracking-wide text-black/42 md:text-base">
                      {detail}
                    </span>
                  </span>
                  <span className="text-black/35">{href ? "↗" : "—"}</span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-t border-black/18 py-6 transition hover:opacity-55 md:grid-cols-[3.5rem_1fr_auto] md:gap-6"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-t border-black/18 py-6 opacity-45 md:grid-cols-[3.5rem_1fr_auto] md:gap-6"
                >
                  {content}
                </div>
              );
            })}
            <div className="border-t border-black/18" />
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto grid w-full max-w-343.5 gap-16 lg:grid-cols-2 lg:gap-28">
          <div>
            <p className="font-main text-xs tracking-[0.16em] text-black/35">
              {copy.usage.eyebrow}
            </p>
            <h2 className="mt-4 font-main text-[clamp(2rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em]">
              {copy.usage.heading}
            </h2>
            <ul className="mt-8 space-y-4 font-second text-base leading-relaxed tracking-wide text-black/58 md:text-lg">
              {copy.usage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end rounded-3xl bg-[#0a0a0a] p-7 text-white md:rounded-[2.5rem] md:p-10">
            <span className="font-main text-xs uppercase tracking-[0.15em] text-white/35">
              {copy.contact.eyebrow}
            </span>
            <h2 className="mt-12 font-main text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              {copy.contact.heading[0]}
              <br />
              {copy.contact.heading[1]}
            </h2>
            <a
              href={`mailto:${copy.email}`}
              className="mt-8 w-fit font-main text-base underline decoration-white/25 underline-offset-4 transition hover:decoration-white md:text-lg"
            >
              {copy.email} ↗
            </a>
            <p className="mt-4 max-w-sm font-second text-sm leading-relaxed tracking-wide text-white/42 md:text-base">
              {copy.contact.note}
            </p>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-between px-6 pb-6 font-main text-xs uppercase tracking-[0.1em] text-black/30 md:px-10 md:pb-10 lg:px-16">
        <span>ChronoTap™</span>
        <span>{copy.footer}</span>
      </footer>
    </main>
  );
}
