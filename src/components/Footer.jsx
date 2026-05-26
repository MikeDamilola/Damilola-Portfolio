import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";

const socials = [
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn", color: "#0077B5" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
  { icon: FaDribbble, href: "https://dribbble.com", label: "Dribbble", color: "#EA4C89" },
  { icon: FaBehance, href: "https://behance.net", label: "Behance", color: "#1769FF" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid #111" }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(74,222,128,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Let's Create Something
            <br />
            <span style={{ color: "var(--accent)" }}>Amazing Together</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-md mx-auto"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Open to freelance projects, full-time roles, and exciting collaborations.
          </p>

          <div className="mt-6">
            <a
              href="mailto:damiloladada@email.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: "var(--accent)",
                color: "#0a0a0a",
                fontFamily: "var(--font-body)",
              }}
            >
              Say Hello 👋
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px mb-10" style={{ background: "#1a1a1a" }} />

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socials.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, color }}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                background: "#111",
                border: "1px solid #222",
                color: "#666",
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: "#444", fontFamily: "var(--font-body)" }}>
          © 2024 Designed by{" "}
          <span style={{ color: "var(--accent)" }}>Damilola Dada</span>
        </p>
      </div>
    </footer>
  );
}
