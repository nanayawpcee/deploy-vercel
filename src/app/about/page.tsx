import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { TeamGrid } from "@/components/ui/TeamGrid";
import { TEAM, STATS } from "@/lib/data";
import { StatsBar } from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, mission, and team behind St. Elizabeth Catholic Hospital in Duayaw Nkwanta, Ghana.",
};

const MILESTONES = [
  { year: "1970s", title: "Hospital Founded",        desc: "Established by the Catholic Diocese to serve the Tano North District and surrounding communities." },
  { year: "1985",  title: "Eye Center Opens",         desc: "A dedicated ophthalmology unit was launched, the first of its kind in the district." },
  { year: "1998",  title: "CHAG Membership",          desc: "St. Elizabeth became a registered member of the Christian Health Association of Ghana." },
  { year: "2005",  title: "Laboratory Expansion",     desc: "A major investment in diagnostic equipment expanded lab capacity significantly." },
  { year: "2015",  title: "Psychiatric Unit",         desc: "A dedicated psychiatric ward was opened, addressing a critical mental health gap in the region." },
  { year: "2024",  title: "Digital Health Initiative",desc: "SECH launched electronic health records and telemedicine pilot programmes." },
];

const VALUES = [
  { icon: "✝",  title: "Faith",      desc: "Rooted in Catholic values, we honour the dignity and sanctity of every human life." },
  { icon: "❤️", title: "Compassion", desc: "We treat every patient with empathy, kindness, and genuine care — regardless of background." },
  { icon: "🏆", title: "Excellence", desc: "We hold ourselves to the highest clinical and ethical standards in all we do." },
  { icon: "🤝", title: "Community",  desc: "We are deeply committed to the health and wellbeing of the communities we serve." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="About St. Elizabeth Catholic Hospital"
        subtitle="Serving Ghana's Brong-Ahafo Region with faith, compassion, and clinical excellence for over five decades."
      />

    {/* Mission & Vision */}
      <section style={{ padding: "5.5rem 0", background: "#fff" }}>
        <div className="container">
          <div className="about-mission-grid">
            <AnimateIn direction="left">
              <div className="section-tag"><span>Our Purpose</span></div>
              <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>Mission &amp; Vision</h2>
              <div style={{ background: "var(--light-green)", borderRadius: "var(--radius-md)", padding: "1.5rem", marginBottom: "1.25rem", borderLeft: "4px solid var(--primary)" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--primary-light)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Mission</div>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
                  To provide quality, compassionate, and holistic healthcare services to all persons, especially the poor and vulnerable, guided by Catholic values and the teachings of the Church.
                </p>
              </div>
              <div style={{ background: "var(--off-white)", borderRadius: "var(--radius-md)", padding: "1.5rem", borderLeft: "4px solid var(--accent)" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--primary-light)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Vision</div>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
                  To be the leading Catholic hospital in Ghana, recognised for excellence in patient care, community health, and the formation of compassionate health professionals.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={140} direction="right">
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 1.5rem" }}>Our Core Values</h3>
              <div className="about-values-grid">
                {VALUES.map(v => (
                  <div key={v.title} style={{ background: "#fff", border: "1.5px solid #E2EBE7", borderRadius: "var(--radius-md)", padding: "1.25rem" }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{v.icon}</div>
                    <div style={{ fontWeight: 700, color: "var(--text-dark)", fontSize: "0.95rem", marginBottom: 6 }}>{v.title}</div>
                    <div style={{ color: "var(--text-light)", fontSize: "0.82rem", lineHeight: 1.65 }}>{v.desc}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Timeline */}
      <section style={{ padding: "5.5rem 2rem", background: "var(--off-white)" }}>
        <div className="container">
          <AnimateIn>
            <div className="section-tag"><span>Our Journey</span></div>
            <h2 className="section-heading" style={{ marginBottom: "3rem" }}>A History of Healing</h2>
          </AnimateIn>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#D6E8DF", transform: "translateX(-50%)" }} />
            {MILESTONES.map((m, i) => (
              <AnimateIn key={m.year} delay={i * 80}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "2.5rem", alignItems: "center" }}>
                  {i % 2 === 0 ? (
                    <>
                      <div style={{ textAlign: "right", paddingRight: "2rem" }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{m.year}</div>
                        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)", margin: "8px 0 6px" }}>{m.title}</h3>
                        <p style={{ color: "var(--text-light)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                      </div>
                      <div style={{ paddingLeft: "2rem" }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--primary)", border: "3px solid var(--accent)" }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ textAlign: "right", paddingRight: "2rem" }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--primary)", border: "3px solid var(--accent)", marginLeft: "auto" }} />
                      </div>
                      <div style={{ paddingLeft: "2rem" }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{m.year}</div>
                        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)", margin: "8px 0 6px" }}>{m.title}</h3>
                        <p style={{ color: "var(--text-light)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team — client component handles hover */}
      <section id="team" style={{ padding: "5.5rem 2rem", background: "#fff" }}>
        <div className="container">
          <AnimateIn>
            <div className="section-tag"><span>Our People</span></div>
            <h2 className="section-heading" style={{ marginBottom: "3rem" }}>Meet the Team</h2>
          </AnimateIn>
          <TeamGrid members={TEAM} />
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}
