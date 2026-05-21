import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BookButton } from "@/components/ui/BookButton";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return NEWS.map(n => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = NEWS.find(n => n.slug === params.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

const TAG_COLORS: Record<string, string> = {
  Event:  "var(--primary)",
  Health: "var(--primary-light)",
  News:   "var(--accent)",
};

export default function ArticlePage({ params }: Props) {
  const article = NEWS.find(n => n.slug === params.slug);
  if (!article) notFound();

  const related = NEWS.filter(n => n.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero tag={article.tag} title={article.title} subtitle={article.excerpt} />

      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "4rem", alignItems: "start" }}>

          <AnimateIn>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #E2EBE7" }}>
              <span style={{ padding: "4px 12px", background: TAG_COLORS[article.tag] ?? "var(--primary)", color: "#fff", borderRadius: 3, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {article.tag}
              </span>
              <span style={{ color: "var(--text-light)", fontSize: "0.84rem" }}>{article.date}</span>
            </div>
            <div style={{ color: "var(--text-mid)", lineHeight: 1.85, fontSize: "1rem" }}>
              {article.body.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: "1.25rem" }}>{para}</p>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #E2EBE7" }}>
              <Link href="/news" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.88rem" }}>
                ← Back to All News
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn delay={140} direction="right">
            <div style={{ position: "sticky", top: 90 }}>
              <div style={{ background: "var(--primary)", borderRadius: "var(--radius-lg)", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 800, margin: "0 0 10px" }}>
                  Need Medical Care?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", lineHeight: 1.6, margin: "0 0 1rem" }}>
                  Book an appointment at SECH — our team is ready to help.
                </p>
                <BookButton style={{ width: "100%", justifyContent: "center", background: "var(--accent)", color: "var(--text-dark)" }} />
              </div>

              <div style={{ background: "var(--off-white)", borderRadius: "var(--radius-md)", padding: "1.5rem", border: "1.5px solid #E2EBE7" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: 14 }}>
                  More Stories
                </div>
                {related.map(r => (
                  <Link key={r.slug} href={`/news/${r.slug}`} style={{ display: "block", paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "1px solid #E2EBE7" }}>
                    <div style={{ fontSize: "0.67rem", color: "var(--primary-light)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{r.tag} · {r.date}</div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-dark)", lineHeight: 1.4 }}>{r.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
