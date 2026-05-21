import { AnimateIn } from "@/components/ui/AnimateIn";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  accent?: string;
}

export function PageHero({ tag, title, subtitle, accent = "var(--accent)" }: Props) {
  return (
    <div className="page-hero">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <AnimateIn>
          {tag && (
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: accent }} />
              <span style={{ color: accent, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                {tag}
              </span>
            </div>
          )}
          <h1 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4.5vw,3.2rem)",
            fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0, maxWidth: 640,
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.72, maxWidth: 520, marginTop: 14, marginBottom: 0 }}>
              {subtitle}
            </p>
          )}
        </AnimateIn>
      </div>
    </div>
  );
}
