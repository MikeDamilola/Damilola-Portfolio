import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExperienceCard({ data, index, totalCards }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Slide up from below as card enters viewport
  const y       = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Scale down slightly as card is buried under the stack
  const scale   = useTransform(scrollYProgress, [0, 1], [0.93, 1]);

  const topOffset = 96 + index * 18;

  return (
    <div
      ref={cardRef}
      style={{ marginBottom: "28px", position: "relative" }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: "-32px",
          top: "28px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#ffffff",
          border: "2px solid #0a0a0a",
          boxShadow: "0 0 0 2px #444",
          zIndex: index + 10,
        }}
      />

      {/* Animated card */}
      <motion.div
        style={{
          y,
          opacity,
          scale,
          position: "sticky",
          top: `${topOffset}px`,
          zIndex: index + 1,
          background: "#111111",
          border: "1px solid #2a2a2a",
          borderRadius: "14px",
          padding: "28px 32px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          transformOrigin: "top center",
          WebkitPosition: "sticky",
        }}
      >
        {/* Card header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "17px",
                color: "#ffffff",
                margin: "0 0 4px",
              }}
            >
              {data.company}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "#555",
                  fontWeight: 400,
                  fontStyle: "italic",
                  marginLeft: "8px",
                }}
              >
                ({data.type})
              </span>
            </h3>
          </div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "#666",
              whiteSpace: "nowrap",
              paddingTop: "2px",
            }}
          >
            {data.period}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "#1e1e1e", marginBottom: "20px" }} />

        {/* Bullet points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {data.bullets.map((point, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#aaaaaa",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {point}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
