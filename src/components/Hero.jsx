import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--bg-primary)", paddingTop: "100px" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
              style={{
                background: "#1a1a1a",
                color: "#cccccc",
                border: "1px solid #2a2a2a",
                fontFamily: "var(--font-body)",
              }}
            >
              👋 Hello, I am Damilola Dada
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.05,
            }}
          >
            I Design the{" "}
            <span style={{ color: "var(--accent)" }}>Future!</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg leading-relaxed max-w-md"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            I'm a UI/UX designer with 4+ years of experience crafting intuitive digital
            experiences that bridge the gap between business goals and user needs —
            from research and wireframes to pixel-perfect, production-ready interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:bg-white/5"
              style={{
                border: "1.5px solid #444",
                color: "var(--text-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              ✦ Available for Hire
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: "var(--accent)",
                color: "#0a0a0a",
                fontFamily: "var(--font-body)",
              }}
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 pt-2">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "30+", label: "Projects Delivered" },
              { value: "15+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — Profile Photo */}
        <div className="flex justify-center items-center relative">
          {/* Glow blob behind photo */}
          <div
            className="absolute w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <motion.div
            variants={floatVariants}
            animate="animate"
            className="relative z-10"
          >
            {/* Decorative ring */}
            <div
              className="absolute -inset-3 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #4ade80, transparent, #4ade80, transparent)",
                borderRadius: "50%",
                padding: "2px",
                opacity: 0.4,
              }}
            />
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative"
              style={{
                border: "2px solid #222",
                background: "#111",
              }}
            >
              <img
                src="https://placehold.co/400x400/111111/4ade80?text=DD"
                alt="Damilola Dada"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
