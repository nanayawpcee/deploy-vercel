"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";

const FOOTER_LINKS = {
  Services: [
    { label: "In-Patient Care",   href: "/services/inpatient" },
    { label: "Laboratory",        href: "/services/laboratory" },
    { label: "Eye Center",        href: "/services/eye-center" },
    { label: "Dental Services",   href: "/services/dental" },
    { label: "Pharmacy",          href: "/services/pharmacy" },
  ],
  Hospital: [
    { label: "About Us",    href: "/about" },
    { label: "Our Team",    href: "/about#team" },
    { label: "News",        href: "/news" },
    { label: "Contact",     href: "/contact" },
    { label: "Appointment", href: "/appointment" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#040F0C", padding: "3.5rem 2rem 1.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "#E8B84B", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>✝</div>
              <div style={{ color: "#fff", fontSize: "0.88rem", fontWeight: 800, fontFamily: "Georgia,serif", lineHeight: 1.25 }}>
                ST. ELIZABETH<br />
                <span style={{ color: "#E8B84B", fontSize: "0.6rem", letterSpacing: "0.18em", fontWeight: 600 }}>CATHOLIC HOSPITAL</span>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem", lineHeight: 1.75, maxWidth: 270, marginBottom: "1.25rem" }}>
              Providing quality, compassionate Catholic healthcare to the communities of Ghana's Ahafo Region since the 1970s.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["CHAG", "GHS", "MOH"].map(badge => (
                <span key={badge} style={{ padding: "4px 10px", background: "rgba(232,184,75,0.12)", border: "1px solid rgba(232,184,75,0.25)", borderRadius: 3, color: "#E8B84B", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em" }}>{badge}</span>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div style={{ color: "#E8B84B", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: 14 }}>{title}</div>
              {links.map(link => (
                <Link key={link.href} href={link.href} style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: "0.84rem", marginBottom: 9, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >{link.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", paddingBottom: "1rem", display: "flex", gap: 24, flexWrap: "wrap" as const }}>
          {[
            { icon: "📞", val: SITE.phone, href: `tel:${SITE.phone}` },
            { icon: "✉️", val: SITE.email, href: `mailto:${SITE.email}` },
            { icon: "📍", val: "Hwidiem, Ahafo Region, Ghana", href: "#" },
          ].map(item => (
            <a key={item.val} href={item.href} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              <span>{item.icon}</span> {item.val}
            </a>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.74rem" }}>© {new Date().getFullYear()} St. Elizabeth Catholic Hospital, Ghana. All rights reserved.</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.74rem" }}>A CHAG Member Institution</span>
        </div>
      </div>
    </footer>
  );
}
