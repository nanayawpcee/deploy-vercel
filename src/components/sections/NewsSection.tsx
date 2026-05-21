"use client";

import Link from "next/link";
import { NEWS } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";

const TAG_COLORS: Record<string, string> = {
  Event:  "var(--primary)",
  Health: "var(--primary-light)",
  News:   "var(--accent)",
};

interface Props { preview?: boolean; }

export function NewsSection({ preview = false }: Props) {
  const displayed = preview ? NEWS.slice(0, 3) : NEWS;

  return (
    <section id="news" style={{ padding: "6rem 2rem", background: "var(--light-green)" }}>
      <div className="container">
        <AnimateIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-tag"><span>Latest Updates</span></div>
              <h2 className="section-heading">News &amp; Announcements</h2>
            </div>
            {preview && (
              <Link href="/news" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.06em" }}>
                View All →
              </Link>
            )}
          </div>
        </AnimateIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.4rem" }}>
          {displayed.map((item, i) => (
            <AnimateIn key={item.slug} delay={i * 90}>
              <Link href={`/news/${item.slug}`} style={{ display: "block", height: "100%" }}>
                <article
                  style={{
                    background: "#fff", borderRadius: "var(--radius-md)", overflow: "hidden",
                    border: "1.5px solid #D6E8DF", transition: "all 0.25s", height: "100%",
                    display: "flex", flexDirection: "column",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-hover)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ height: 4, background: TAG_COLORS[item.tag] ?? "var(--primary)", flexShrink: 0 }} />
                  <div style={{ padding: "1.65rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontSize: "0.67rem", fontWeight: 700, color: "var(--primary-light)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{item.tag}</span>
                      <span style={{ fontSize: "0.76rem", color: "var(--text-light)" }}>{item.date}</span>
                    </div>
                    <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--text-dark)", fontFamily: "var(--font-serif)", margin: "0 0 10px", lineHeight: 1.45 }}>{item.title}</h3>
                    <p style={{ fontSize: "0.83rem", color: "var(--text-light)", lineHeight: 1.68, margin: 0, flex: 1 }}>{item.excerpt}</p>
                    <div style={{ marginTop: 16, color: "var(--primary-light)", fontSize: "0.78rem", fontWeight: 700 }}>Read more →</div>
                  </div>
                </article>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
