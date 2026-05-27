import { motion } from "framer-motion";
import heroPhoto from "../assets/Personal Pics.png";

const cardStyle = {
  background: "#161616",
  border: "1px solid #242424",
  borderRadius: "14px",
  padding: "20px 24px",
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "108px 20px 40px",
      }}
    >
      {/* Outer card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "984px",
          background: "#0f0f0f",
          border: "1px solid #222222",
          borderRadius: "20px",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          minHeight: "591px",
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* Card 1 — Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  fontSize: "22px",
                  background: "#2a2200",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                🤚
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 200,
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Hello, I am Damilola Dada
              </h2>
            </div>
          </motion.div>

          {/* Card 2 — Headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ ...cardStyle, padding: "28px 24px" }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 400,
                color: "#cccccc",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              I Design the Future!
            </h1>
          </motion.div>

          {/* Bottom row — description + button */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", flex: 1 }}>

            {/* Card 3 — Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ ...cardStyle, display: "flex", alignItems: "flex-start" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "18.5px",
                  color: "#cccccc",
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                Help you craft engaging user interfaces and experiences through UI/UX design.
                Expertise in mobile &amp; web design, using Figma, Illustrator, Framer &amp; Cursor
              </p>
            </motion.div>

            {/* Card 4 — CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                ...cardStyle,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              {/* Available for Work */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#cccccc",
                }}
              >
                <span style={{ color: "#4ade80", fontSize: "18px", lineHeight: 1 }}>•</span>
                Available for Work
              </div>

              {/* Let's Connect button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "transparent",
                  border: "1px solid #333333",
                  borderRadius: "10px",
                  padding: "12px 20px",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1e1e1e"; e.currentTarget.style.borderColor = "#444"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#333333"; }}
              >
                Let's Connect!
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            background: "#1a1a1a",
            border: "1px solid #222",
            minHeight: "551px",
          }}
        >
          <img
            src={heroPhoto}
            alt="Damilola Dada"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
