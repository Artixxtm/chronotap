import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { localizedPath } from "@/i18n/config";
import { STORY_PLACEHOLDERS } from "@/constants/ways";

export default function StoryPlaceholderPage({ locale, slug }) {
  const story = STORY_PLACEHOLDERS[slug];

  return (
    <main
      data-nav-theme="light"
      className="relative flex min-h-dvh w-full items-end overflow-hidden bg-[#050505] px-6 py-8 text-white md:px-10 md:py-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_72%_28%,rgba(255,162,0,0.16),transparent_24%),radial-gradient(circle_at_24%_72%,rgba(65,98,130,0.2),transparent_34%)]"
      />

      <div className="relative z-1 mx-auto flex w-full max-w-400 flex-col gap-12 border-t border-white/20 pt-5 md:flex-row md:items-end md:justify-between md:gap-20">
        <div className="max-w-250">
          <p className="font-second text-sm tracking-[0.12em] text-white/55 md:text-base">
            [ {story.eyebrow} ]
          </p>
          <h1 className="mt-5 text-balance font-main text-[clamp(2.25rem,6.5vw,7rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            {story.title}
          </h1>
        </div>

        <div className="flex max-w-sm flex-col items-start gap-6 pb-1">
          <p className="font-second text-base leading-relaxed tracking-wide text-white/55">
            This story is being prepared for the next chapter of ChronoTap.
          </p>
          <Link
            href={localizedPath(locale, "/")}
            className="group inline-flex items-center gap-2 font-main text-sm text-white/75 transition-colors duration-500 hover:text-white md:text-base"
          >
            <IoMdArrowBack className="transition-transform duration-500 group-hover:-translate-x-1" />
            <span className="border-b border-white/30 pb-1">Back to ChronoTap</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
