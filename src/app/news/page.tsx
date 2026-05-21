import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NewsSection } from "@/components/sections/NewsSection";

export const metadata: Metadata = {
  title: "News & Announcements",
  description: "Stay up to date with the latest news, events, and health updates from St. Elizabeth Catholic Hospital.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        tag="Latest Updates"
        title="News & Announcements"
        subtitle="Events, health campaigns, hospital updates, and community outreach from SECH."
      />
      <NewsSection />
    </>
  );
}
