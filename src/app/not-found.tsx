import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 2rem", background: "var(--off-white)" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: "5rem", fontWeight: 900, color: "var(--primary)", fontFamily: "var(--font-serif)", lineHeight: 1, marginBottom: 8 }}>404</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 12px" }}>
          Page Not Found
        </h1>
        <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "2rem" }}>
          Sorry, we couldn't find the page you were looking for. It may have been moved or may not exist.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
