
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { isContext } from "vm";

const PHOTOS = [
  {
    id: 1,
    label: "Modern Ward Facilities",
    caption: "Our in-patient wards are equipped with modern beds, monitoring systems, and round-the-clock nursing care.",
    color: "#0A4F3C",
    icon: "🏥",
    image: "./images/aeriel.jpeg", // Local image for variety
    pattern: "cross",
    accent: "#E8B84B",
  },
  {
    id: 2,
    label: "State-of-the-Art Laboratory",
    caption: "Advanced diagnostic equipment enables rapid, accurate results to guide clinical decisions.",
    color: "#063328",
    icon: "🔬",
    image: "./images/lab.jpeg", // Local image for variety
    pattern: "dots",
    accent: "#5DCAA5",
  },
  {
    id: 3,
    label: "Eye Center & Ophthalmology",
    caption: "Our Eye Center offers comprehensive ophthalmic services from routine screening to cataract surgery.",
    color: "#1A2F2A",
    icon: "👁️",
    image: "./images/ent.jpeg", // Local image for variety
    pattern: "wave",
    accent: "#E8B84B",
  },
  {
    id: 4,
    label: "Maternity & Post-Natal Care",
    caption: "A dedicated, warm environment for mothers and newborns — from delivery through early childhood wellness.",
    color: "#0D3D2C",
    icon: "🤰",
    image: "./images/mat.jpeg", // Local image for variety
    pattern: "cross",
    accent: "#F5D080",
  }, 

  {
    id: 5,
    label: "Pharmacy & Dispensary",
    caption: "Fully stocked with WHO essential medicines and specialised drugs, with expert pharmacist counselling.",
    color: "#0A4F3C",
    icon: "💊",
    image: "./images/pharm.jpeg", // Fixed repeating URL
    pattern: "dots",
    accent: "#5DCAA5",
  },
  {
    id: 6,
    label: "Outpatient & Emergency",
    caption: "Our 24/7 emergency department and busy OPD serve hundreds of patients daily with expert triage.",
    color: "#1A2F2A",
    icon: "🚑",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80", // Fixed repeating URL
    pattern: "wave",
    accent: "#E8B84B",
  },
];

function drawPattern(
  canvas: HTMLCanvasElement,
  type: string,
  color: string
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width  = canvas.offsetWidth  || 900;
  canvas.height = canvas.offsetHeight || 460;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = color;
  ctx.fillStyle   = color;
  ctx.lineWidth   = 1.2;

  if (type === "cross") {
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  } else if (type === "wave") {
    for (let y = 0; y < canvas.height + 40; y += 36) {
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 2) {
        const wy = y + Math.sin((x / 70) * Math.PI) * 14;
        x === 0 ? ctx.moveTo(x, wy) : ctx.lineTo(x, wy);
      }
      ctx.stroke();
    }
  } else {
    for (let x = 6; x < canvas.width; x += 32)
      for (let y = 6; y < canvas.height; y += 32) {
        ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fill();
      }
  }
}

function Slide({
  photo,
  active,
  direction,
}: {
  photo: (typeof PHOTOS)[0];
  active: boolean;
  direction: "left" | "right";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawPattern(canvasRef.current, photo.pattern, photo.accent);
    }
  }, [photo]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: photo.color,
        display: "flex",
        alignItems: "stretch", // Stretch ensures both sides fill the container height
        opacity: active ? 1 : 0,
        transform: active
          ? "translateX(0)"
          : direction === "right"
          ? "translateX(60px)"
          : "translateX(-60px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
        pointerEvents: active ? "auto" : "none",
      }}
    >
{/* LEFT SIDE: Image/Icon Area (Expanded to fit the angle) */}
<div style={{ 
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "65%", // Spans past the halfway mark
  background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${photo.image}) center/cover no-repeat`,
  // Cuts the right edge of the image at an angle (matching the right side's slope)
  clipPath: "polygon(0 0, 100% 0, 77% 100%, 0 100%)", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "flex-start", // Shifts content slightly left away from the cut
  padding: "3rem 0 3rem 4rem",
  zIndex: 1, 
}}>
  {/* Rest of your left-side content (Icon, Badges, etc.) */}
  <div style={{
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(8px)", // Looks stunning over a real background photo
    border: `2px solid ${photo.accent}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 76,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    animation: active ? "pulse-icon 3s ease-in-out infinite" : "none",
  }}>
    {photo.icon}
  </div>

  {/* Small floating badge */}
  <div style={{
    position: "absolute",
    bottom: "3.5rem",
    left: "4rem",
    background: photo.accent,
    borderRadius: 6,
    padding: "6px 12px",
    display: "flex",
    alignItems: "center",
    gap: 6,
  }}>
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: photo.color }} />
    <span style={{ fontSize: "0.65rem", fontWeight: 800, color: photo.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
      SECH
    </span>
  </div>
</div>

{/* RIGHT SIDE: Canvas Pattern + Text Content */}
<div style={{ 
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: "50%", // Standard half-width
  // The matching clip-path creates the clean complementary angle
  clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)", 
  background: photo.color, // Keeps its solid background color
  display: "flex",
  alignItems: "center",
  paddingLeft: "15%", // Pushes text safe from the sharp incoming corner
  paddingRight: "4rem",
  zIndex: 2, // Sits slightly on top to anchor the hard line
}}>
  
  {/* Pattern canvas */}
  <canvas
    ref={canvasRef}
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.08,
      pointerEvents: "none",
    }}
  />


        {/* Decorative circles confined to the text side */}
        <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", border: `1px solid ${photo.accent}12`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 20, top: 20, width: 260, height: 260, borderRadius: "50%", border: `1px solid ${photo.accent}20`, pointerEvents: "none" }} />

        {/* Text content container */}
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 24, height: 2, background: photo.accent }} />
            <span style={{ color: photo.accent, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              St. Elizabeth Catholic Hospital
            </span>
          </div>
          <h3 style={{
            fontFamily: "Georgia,'Times New Roman',serif",
            fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.2,
            margin: "0 0 12px",
            animation: active ? "slideUp 0.5s ease 0.1s both" : "none",
          }}>
            {photo.label}
          </h3>
          <p style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.9rem",
            lineHeight: 1.65,
            maxWidth: 360,
            margin: 0,
            animation: active ? "slideUp 0.5s ease 0.2s both" : "none",
          }}>
            {photo.caption}
          </p>

          {/* Feature pills */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 20, animation: active ? "slideUp 0.5s ease 0.3s both" : "none" }}>
            {["24 / 7 Available", "Qualified Staff"].map(pill => (
              <span key={pill} style={{
                padding: "4px 10px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 20,
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 600,
              }}>{pill}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export function PhotoCarousel() {
  const [current, setCurrent]       = useState(0);
  const [direction, setDirection]   = useState<"left" | "right">("right");
  const [paused, setPaused]         = useState(false);
  const [progress, setProgress]     = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 5000;

  const goTo = useCallback((idx: number, dir?: "left" | "right") => {
    setDirection(dir ?? (idx > current ? "right" : "left"));
    setCurrent(idx);
    setProgress(0);
  }, [current]);

  const prev = () => goTo((current - 1 + PHOTOS.length) % PHOTOS.length, "left");
  const next = useCallback(() => goTo((current + 1) % PHOTOS.length, "right"), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => next(), DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, next]);

  // Progress bar tick
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / DURATION) * 100, 100));
    }, 30);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [current, paused]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const photo = PHOTOS[current];

  return (
    <section
      style={{ padding: "0 0 0", background: "#F7F9F7" }}
      aria-label="Hospital photo gallery"
    >
      {/* Section label above */}
      <div style={{ padding: "4rem 2rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: "1.5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ width: 32, height: 2, background: "var(--primary)" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--primary-light)" }}>
                  Our Facilities
                </span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "var(--text-dark)", margin: 0 }}>
                A Closer Look at SECH
              </h2>
            </div>
            <p style={{ color: "var(--text-light)", fontSize: "0.88rem", maxWidth: 380, lineHeight: 1.65, margin: 0 }}>
              World-class facilities and caring professionals — everything you need under one roof.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div style={{ padding: "1.5rem 2rem 4rem" }}>
        <div className="container">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ position: "relative", borderRadius: 12, overflow: "hidden", height: 420, boxShadow: "0 24px 64px rgba(10,79,60,0.2)", cursor: "default" }}
          >
            {/* Slides */}
            {PHOTOS.map((p, i) => (
              <Slide key={p.id} photo={p} active={i === current} direction={direction} />
            ))}

            {/* Left arrow */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              style={{
                position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
                zIndex: 10, width: 46, height: 46, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontSize: 20, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
                backdropFilter: "blur(6px)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >‹</button>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next slide"
              style={{
                position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
                zIndex: 10, width: 46, height: 46, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontSize: 20, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
                backdropFilter: "blur(6px)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >›</button>

            {/* Bottom controls bar */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
              background: "linear-gradient(transparent, rgba(0,0,0,0.45))",
              padding: "2rem 1.5rem 1.1rem",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              {/* Dot + label navigation */}
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {PHOTOS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}: ${p.label}`}
                    style={{
                      width: i === current ? 28 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === current ? photo.accent : "rgba(255,255,255,0.35)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.35s ease",
                    }}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#fff", fontSize: "1rem" }}>{String(current + 1).padStart(2, "0")}</span>
                <span style={{ opacity: 0.5 }}>/</span>
                <span>{String(PHOTOS.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, zIndex: 10, background: "rgba(255,255,255,0.15)" }}>
              <div style={{
                height: "100%",
                width: `${paused ? progress : progress}%`,
                background: photo.accent,
                transition: paused ? "none" : "width 0.03s linear",
              }} />
            </div>

            {/* Pause indicator */}
            {paused && (
              <div style={{ position: "absolute", top: 16, right: 72, zIndex: 10, padding: "4px 10px", background: "rgba(0,0,0,0.4)", borderRadius: 20, fontSize: "0.64rem", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.1em", backdropFilter: "blur(4px)" }}>
                ⏸ PAUSED
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: 10, marginTop: 12, overflowX: "auto", paddingBottom: 4 }}>
            {PHOTOS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                style={{
                  flex: "0 0 auto",
                  width: 110,
                  height: 62,
                  borderRadius: 6,
                  background: p.color,
                  border: i === current ? `2px solid ${p.accent}` : "2px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s",
                  opacity: i === current ? 1 : 0.55,
                  transform: i === current ? "scale(1.04)" : "scale(1)",
                  overflow: "hidden",
                  position: "relative",
                }}
                onMouseEnter={e => { if (i !== current) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { if (i !== current) e.currentTarget.style.opacity = "0.55"; }}
                aria-label={`Jump to ${p.label}`}
              >
                {/* Fixed thumbnail image tag */}
                <img 
                  src={p.image} 
                  alt="" 
                  style={{ 
                    position: "absolute", 
                    inset: 0, 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    opacity: 0.45 // Keeps the background color tint active behind the image
                  }} 
                />
                
                {/* Subtle label overlay */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "5px 5px", background: "rgba(0,0,0,0.7)", fontSize: "0.58rem", color: "rgba(255,255,255,0.9)", fontWeight: 700, letterSpacing: "0.04em", textAlign: "center", lineHeight: 1.2, zIndex: 2 }}>
                  {p.label.split(" ").slice(0, 2).join(" ")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}