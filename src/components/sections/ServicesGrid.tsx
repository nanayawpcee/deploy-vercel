"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useAppointmentModal } from "@/components/ui/AppointmentModalProvider";

interface Props {
  preview?: boolean; // show only first 8 and a "view all" link
}

export function ServicesGrid({ preview = false }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { openModal } = useAppointmentModal();
  const displayed = preview ? SERVICES.slice(0, 8) : SERVICES;

  return (
    <section id="services" style={{ padding: "6rem 2rem", background: "#F7F9F7" }}>
      <div className="container">
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "1.15rem" }}>
          {displayed.map((svc, i) => (
            <AnimateIn key={svc.slug} delay={i * 55}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background:   hovered === i ? "var(--primary)"    : "#fff",
                  border:       `1.5px solid ${hovered === i ? "var(--primary)" : "#E2EBE7"}`,
                  borderRadius: "var(--radius-md)",
                  padding:      "1.65rem",
                  cursor:       "pointer",
                  transition:   "all 0.3s ease",
                  transform:    hovered === i ? "translateY(-5px)" : "translateY(0)",
                  boxShadow:    hovered === i ? "var(--shadow-hover)" : "none",
                  height:       "100%",
                  display:      "flex",
                  flexDirection:"column",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{svc.icon}</div>
                <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: hovered === i ? "#fff" : "var(--text-dark)", margin: "0 0 8px", fontFamily: "var(--font-serif)" }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: "0.83rem", color: hovered === i ? "rgba(255,255,255,0.72)" : "var(--text-light)", lineHeight: 1.65, margin: 0, flex: 1 }}>
                  {svc.shortDesc}
                </p>
                <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link
                    href={`/services/${svc.slug}`}
                    style={{ color: hovered === i ? "var(--accent)" : "var(--primary-light)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em" }}
                  >
                    Learn more →
                  </Link>
                  <button
                    onClick={() => openModal(svc.title)}
                    style={{
                      background: hovered === i ? "rgba(232,184,75,0.2)" : "var(--light-green)",
                      border: "none", borderRadius: 3, padding: "4px 10px",
                      fontSize: "0.68rem", fontWeight: 700, color: hovered === i ? "var(--accent)" : "var(--primary)",
                      cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", transition: "all 0.2s",
                    }}
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
