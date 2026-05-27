import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function SocialLink({ data }) {
  const Icon = data.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={data.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        borderBottom: "1px solid #c8c8c8",
        textDecoration: "none",
        color: "#1a1a2e",
        cursor: "pointer",
      }}
    >
      {/* Left: icon + label */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Icon
          size={22}
          color={hovered ? "#555" : "#1a1a2e"}
          style={{ transition: "color 0.25s" }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "18px",
            color: "#1a1a2e",
            letterSpacing: "0.01em",
          }}
        >
          {data.label}
        </span>
      </div>

      {/* Right: animated arrow */}
      <motion.div
        animate={{ x: hovered ? 6 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <FiArrowRight size={20} color="#1a1a2e" strokeWidth={2} />
      </motion.div>
    </a>
  );
}
