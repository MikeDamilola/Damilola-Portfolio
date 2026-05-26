import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceCard({ exp, isLast }) {
  return (
    <motion.div variants={itemVariants} className="flex gap-6 relative">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 z-10 relative"
          style={{ background: "var(--accent)", boxShadow: "0 0 10px rgba(74,222,128,0.5)" }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-1"
            style={{ background: "linear-gradient(to bottom, rgba(74,222,128,0.3), transparent)", minHeight: "40px" }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 rounded-2xl p-6 md:p-8 mb-6 transition-all duration-200 hover:border-opacity-60"
        style={{
          background: "#0d0d0d",
          border: "1px solid var(--border)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3
              className="text-lg md:text-xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {exp.company}
            </h3>
            <p
              className="text-sm font-medium mt-0.5"
              style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
            >
              {exp.role}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-right">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: "#1a1a1a", color: "#888", border: "1px solid #2a2a2a" }}
            >
              {exp.period}
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: "rgba(74,222,128,0.08)", color: "var(--accent)", border: "1px solid rgba(74,222,128,0.15)" }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        {exp.location && (
          <p className="text-xs mb-3" style={{ color: "#666" }}>
            📍 {exp.location}
          </p>
        )}

        <ul className="flex flex-col gap-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "#999" }}>
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
