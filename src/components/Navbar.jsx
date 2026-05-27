import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineCloudArrowDown } from "react-icons/hi2";

const navLinks = [
  { label: "My Projects", href: "#projects" },
  { label: "Career", href: "#tools" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -88, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "88px",
        background: "#111111",
        borderBottom: "1px solid #1e1e1e",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Inner container — mirrors the 1024px image width with 40px side padding */}
      <div
        style={{
          width: "100%",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "var(--font-display)",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Damilola Michael
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: active === link.href.replace("#", "") ? "#ffffff" : "#888888",
                textDecoration: "none",
                position: "relative",
                transition: "color 0.2s",
              }}
            >
              {link.label}
              {active === link.href.replace("#", "") && (
                <motion.span
                  layoutId="nav-underline"
                  style={{
                    position: "absolute",
                    bottom: "-3px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "var(--accent)",
                  }}
                />
              )}
            </a>
          ))}

          {/* Download Resume button */}
          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              color: "#f97316",
              background: "#1a1a1a",
              border: "1px solid #2c2c2c",
              borderRadius: "999px",
              padding: "8px 10px 8px 20px",
              textDecoration: "none",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Download Resume
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#2a2a2a",
                flexShrink: 0,
              }}
            >
              <HiOutlineCloudArrowDown size={15} color="#f97316" />
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div
          className="md:hidden"
          style={{ display: "flex", flexDirection: "column", gap: "6px", cursor: "pointer" }}
        >
          <span style={{ width: "24px", height: "1px", background: "#fff", display: "block" }} />
          <span style={{ width: "16px", height: "1px", background: "#fff", display: "block" }} />
          <span style={{ width: "24px", height: "1px", background: "#fff", display: "block" }} />
        </div>
      </div>
    </motion.nav>
  );
}
