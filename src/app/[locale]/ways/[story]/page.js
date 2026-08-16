import { notFound } from "next/navigation";
import StoryPlaceholderPage from "@/app/_pages/StoryPlaceholderPage";
import { PREFIXED_LOCALES } from "@/i18n/config";
import { STORY_PLACEHOLDERS, STORY_SLUGS } from "@/constants/ways";

export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.flatMap((locale) =>
    STORY_SLUGS.map((story) => ({ locale, story })),
  );
}

export async function generateMetadata({ params }) {
  const { story } = await params;
  const page = STORY_PLACEHOLDERS[story];
  if (!page) return {};

  return {
    title: `${page.eyebrow} | ChronoTap`,
    description: page.title,
    robots: { index: false, follow: false },
  };
}

export default async function LocalizedStoryPage({ params }) {
  const { locale, story } = await params;
  if (!PREFIXED_LOCALES.includes(locale) || !STORY_SLUGS.includes(story)) {
    notFound();
  }
  return <StoryPlaceholderPage locale={locale} slug={story} />;
}

