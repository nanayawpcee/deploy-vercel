import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the full range of medical and health services offered at St. Elizabeth Catholic Hospital — from in-patient care to specialist clinics.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="What We Offer"
        title="Our Medical Services"
        subtitle="World-class healthcare across medicine, surgery, diagnostics, and specialist clinics — available to every patient, every day."
      />
      <ServicesGrid />
      <EmergencyBanner />
    </>
  );
}
