"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useAppointmentModal } from "@/components/ui/AppointmentModalProvider";

interface Props {
  preview?: boolean; // show only first 8 and a "view all" link
}

export function ServicesGrid({ preview = false }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { openModal } = useAppointmentModal();
  const router = useRouter();
  const displayed = preview ? SERVICES.slice(0, 8) : SERVICES;

  return (
    <section id="services" style={{ padding: "4rem 1rem", background: "#F7F9F7" }} className="sm:p-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <AnimateIn>
          <div style={{ marginBottom: "3.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-tag"><span>What We Offer</span></div>
              <h2 className="section-heading">Comprehensive Medical Services</h2>
              <p style={{ color: "var(--text-light)", maxWidth: 480, marginTop: 10, lineHeight: 1.7 }}>
                From emergency medicine to specialized clinics — SECH delivers expert care under one roof, every day of the year.
              </p>
            </div>
            {preview && (
              <Link href="/services" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.06em", flexShrink: 0 }}>
                View All Services →
              </Link>
            )}
          </div>
        </AnimateIn>

        {/* Grid */}
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 columns for mobile
          gap: "1rem",
          padding: "0"
        }} className="mid:grid-cols-3 lg:grid-cols-4"> 
        
        {displayed.map((svc, i) => (
            <AnimateIn key={svc.slug} delay={i * 50}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(`/services/${svc.slug}`)}
                style={{
                  background:   hovered === i ? "var(--primary)"    : "#fff",
                  border:       `1.5px solid ${hovered === i ? "var(--primary)" : "#E2EBE7"}`,
                  borderRadius: "16px",
                  padding:      "1.1rem",
                  cursor:       "pointer",
                  transition:   "all 0.3s ease",
                  transform:    hovered === i ? "translateY(-5px)" : "translateY(0)",
                  boxShadow:    hovered === i ? "var(--shadow-hover)" : "none",
                  display:      "flex",
                  flexDirection:"column",
                  justifyContent: "space-between",
                }}
                // aspect-square on mobile, aspect-auto on small/tablet devices and up
                className="mobile-square-card aspect-square sm:aspect-auto min-h-[190px] sm:min-h-0"
              >
                {/* Top Content: Icon & Title */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontSize: 24, lineHeight: 1 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: hovered === i ? "#fff" : "var(--text-dark)", margin: "4px 0 0", fontFamily: "var(--font-serif)", lineHeight: 1.2 }}>
                    {svc.title}
                  </h3>
                </div>

                {/* Middle Content: Description */}
                <p 
                  style={{ fontSize: "0.78rem", color: hovered === i ? "rgba(255,255,255,0.72)" : "var(--text-light)", lineHeight: 1.4, margin: "8px 0 0" }}
                  // Apply 3-line clamping ONLY on mobile to fit the square container
                  className="line-clamp-3 sm:line-clamp-none"
                >
                  {svc.shortDesc}
                </p>

                {/* Bottom Action Row */}
                <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {/* "Learn more" link: completely hidden on mobile, returns on tablet/desktop */}
                  <Link
                    href={`/services/${svc.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="hidden sm:inline"
                    style={{ color: hovered === i ? "var(--accent)" : "var(--primary-light)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em" }}
                  >
                    Learn more →
                  </Link>

                  {/* Book Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(svc.title);
                    }}
                    style={{
                      background: hovered === i ? "rgba(232,184,75,0.2)" : "var(--light-green)",
                      border: "none", borderRadius: 3, padding: "4px 10px",
                      fontSize: "0.68rem", fontWeight: 700, color: hovered === i ? "var(--accent)" : "var(--primary)",
                      cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", transition: "all 0.2s",
                    }}
                    // Docks button to the right on mobile, resets alignment on desktop
                    className="ml-auto sm:ml-0"
                  >
                    Book
                  </button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}