import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/i18n/config";

const EMAIL = "chronotap.co@gmail.com";

function EmailLink({ className = "" }) {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className={`inline-block underline decoration-black/20 underline-offset-4 transition hover:decoration-black ${className}`}
    >
      {EMAIL}
    </a>
  );
}

function PrivacyBlock({ block }) {
  if (block.type === "controller") {
    return (
      <div className="mt-5 border-l border-black/15 pl-5">
        <p className="font-main font-medium">Artem Naumenko</p>
        <p className="mt-1 text-black/60">{block.founder}</p>
        <p className="mt-1 text-black/60">{block.country}</p>
        <EmailLink className="mt-3" />
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black/40" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "email") return <EmailLink className="mt-4" />;

  return <p className="mt-5 first:mt-0">{block.text}</p>;
}

export default async function PrivacyPage({ locale }) {
  const { privacy, common } = await getDictionary(locale);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white text-black">
      <div className="mx-auto relative z-1 w-full max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <header className="grid gap-12 border-b border-black/10 pb-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:pb-24">
          <div>
            <div className="w-fit flex flex-wrap items-center gap-2">
              <Link
                href={localizedPath(locale)}
                className="font-main text-xs font-medium uppercase transition tracking-[0.2em] hover:text-black text-black/45"
              >
                [ {common.homePage} ]
              </Link>
              <p className="font-main text-xs font-medium uppercase tracking-[0.2em] text-black">
                [ {privacy.label} ]
              </p>
            </div>

            <LanguageSwitcher className="mt-6" />

            <p className="mt-8 max-w-xs font-second text-sm leading-relaxed text-black/45">
              {privacy.intro}
            </p>
          </div>

          <div>
            <h1 className="max-w-3xl font-main text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              {privacy.heading}
              <br />
              <span className="font-second font-normal tracking-[-0.02em] text-black/45">
                {privacy.headingAccent}
              </span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-main text-xs uppercase tracking-[0.16em]">
              <span>{privacy.lastUpdated}</span>
              <span>{privacy.lastUpdatedDate}</span>
            </div>
          </div>
        </header>

        <div className="grid gap-16 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:py-24">
          <aside className="hidden md:block">
            <div className="sticky top-10">
              <p className="font-main text-xs uppercase tracking-[0.18em] text-black/80">
                ChronoTap™
              </p>
              <p className="mt-4 max-w-52 font-second text-sm leading-relaxed text-black/40">
                {privacy.aside}
              </p>
            </div>
          </aside>

          <div className="max-w-2xl">
            <div className="space-y-20 md:space-y-28">
              {privacy.sections.map((section) => (
                <section key={section.number}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-main text-xs font-medium tracking-[0.16em] text-black">
                      {section.number}
                    </span>
                    <span className="text-xs font-main font-medium tracking-[0.16em] text-black/35">
                      /
                    </span>
                    <h2 className="font-main text-xs font-medium uppercase tracking-wider text-black">
                      {section.title}
                    </h2>
                  </div>

                  <div className="font-main text-[15px] leading-[1.75] text-black/70 md:text-base">
                    {section.blocks.map((block, index) => (
                      <PrivacyBlock key={`${block.type}-${index}`} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        <footer className="border-t border-black/10 pt-10 md:flex md:items-end md:justify-between">
          <div>
            <p className="font-second text-xs uppercase tracking-[0.18em] text-black/40">
              {privacy.questions}
            </p>
            <EmailLink className="mt-3 block font-main text-lg font-medium decoration-black/15" />
          </div>
          <p className="mt-10 font-main text-xs tracking-[0.08em] text-black/35 md:mt-0">
            {privacy.rightsReserved}
          </p>
        </footer>
      </div>

      <div className="w-full md:max-w-xl max-w-95 z-0 opacity-5 md:px-10 px-6 h-auto fixed left-1/2 top-1/2 -translate-1/2">
        <svg
          width="938"
          height="771"
          viewBox="0 0 938 771"
          fill="none"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M705 114L660.5 158.722H204.5L161.684 201.5V568L203.5 609.289H659L705 655.258V771H96L0 675.513V92.3564L92.5 0H705V114Z"
            fill="black"
          />
          <path
            d="M938 771.002H823.5L776.949 724.5V464.857L278.5 463.857L233.5 420V347.5L277.5 303.104H776.949V44.5L821.5 0H938V771.002Z"
            fill="black"
          />
        </svg>
      </div>
    </main>
  );
}
