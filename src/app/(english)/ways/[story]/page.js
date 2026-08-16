import { notFound } from "next/navigation";
import StoryPlaceholderPage from "@/app/_pages/StoryPlaceholderPage";
import { STORY_PLACEHOLDERS, STORY_SLUGS } from "@/constants/ways";

export const dynamicParams = false;

export function generateStaticParams() {
  return STORY_SLUGS.map((story) => ({ story }));
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

export default async function StoryPage({ params }) {
  const { story } = await params;
  if (!STORY_SLUGS.includes(story)) notFound();
  return <StoryPlaceholderPage locale="en" slug={story} />;
}

