"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { AnimateIn } from "@/components/ui/AnimateIn";

const CONTACT_INFO = [
  { icon: "📍", label: "Address",  value: SITE.address,  href: "https://www.google.com/maps/place/St.+Elizabeth+Catholic+Hospital/@6.9325332,-2.3606433,17z/data=!4m6!3m5!1s0xfdb2e3e952a5dcd:0xaaa7c226d485c7f7!8m2!3d6.9325279!4d-2.3580684!16s%2Fg%2F11cktmsnnr?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" },
  { icon: "📞", label: "Phone",    value: SITE.phone,    href: `tel:${SITE.phone}` },
  { icon: "✉️", label: "Email",    value: SITE.email,    href: `mailto:${SITE.email}` },
  { icon: "⏰", label: "Hours",    value: SITE.hours,    href: undefined },
];

export function ContactSection() {
  const [form, setForm]       = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]   = useState(false);

  const handleSubmit = async () => {
    if (!form.firstName || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: "var(--primary-dark)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4.5rem" }}>

        {/* Left — contact info */}
        <AnimateIn direction="left">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "var(--accent)" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)" }}>
              Reach Us
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 1.75rem" }}>
            Get in Touch
          </h2>

          {CONTACT_INFO.map(item => (
            <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 22 }}>
              <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: "0.68rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", lineHeight: 1.55, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >{item.value}</a>
                ) : (
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", lineHeight: 1.55 }}>{item.value}</div>
                )}
              </div>
            </div>
          ))}

          {/* Social / accreditation chips */}
          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
              Accreditations
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["CHAG Member", "GHS Certified", "MOH Approved", "ISO Standards"].map(badge => (
                <span key={badge} style={{
                  padding: "5px 12px", background: "rgba(232,184,75,0.1)",
                  border: "1px solid rgba(232,184,75,0.25)", borderRadius: 3,
                  color: "var(--accent)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                }}>{badge}</span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Right — contact form */}
        <AnimateIn delay={160} direction="right">
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-lg)", padding: "2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontSize: "1.2rem", marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  Thank you for reaching out. We'll respond to <strong style={{ color: "#fff" }}>{form.email || "you"}</strong> as soon as possible.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", message: "" }); }}
                  style={{ marginTop: "1.5rem", padding: "10px 24px", background: "var(--accent)", color: "var(--text-dark)", border: "none", borderRadius: 4, fontWeight: 700, cursor: "pointer", fontSize: "0.88rem" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 700, margin: "0 0 1.25rem", fontSize: "1.1rem" }}>
                  Send a Message
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 12px" }}>
                  {[
                    { key: "firstName", placeholder: "First Name" },
                    { key: "lastName",  placeholder: "Last Name" },
                  ].map(f => (
                    <div className="form-group" key={f.key}>
                      <input
                        className="form-input"
                        placeholder={f.placeholder}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-input"
                    rows={4}
                    placeholder="Your message…"
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)", color: "#fff", resize: "vertical" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="btn-accent"
                  style={{ width: "100%", justifyContent: "center", opacity: sending ? 0.8 : 1 }}
                >
                  {sending ? "Sending…" : "Send Message →"}
                </button>
              </>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
