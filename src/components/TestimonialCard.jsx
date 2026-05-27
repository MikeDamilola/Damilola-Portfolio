import { motion } from "framer-motion";

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f5a623", fontSize: "20px", lineHeight: 1 }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px 22px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        border: "1px solid #ececec",
        display: "flex",
        flexDirection: "column",
        minWidth: "320px",
        maxWidth: "360px",
        flex: "0 0 320px",
        scrollSnapAlign: "start",
      }}
    >
      {/* Stars */}
      <StarRating count={data.stars} />

      {/* Review text */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "#333333",
          lineHeight: "1.65",
          margin: 0,
          flexGrow: 1,
          marginBottom: "14px",
        }}
      >
        {data.review}
      </p>

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px solid #eeeeee", marginBottom: "12px" }} />

      {/* Reviewer info */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={data.avatar}
          alt={data.name}
          onError={(e) => {
            e.target.src = `https://placehold.co/40x40/e0e0e0/555555?text=${encodeURIComponent(data.name.charAt(0))}`;
          }}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
            background: "#e0e0e0",
          }}
        />
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "13px",
              color: "#111111",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {data.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#888888",
              margin: "3px 0 0",
              lineHeight: 1.4,
            }}
          >
            {data.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
