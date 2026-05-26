import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "My Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
        padding: scrolled ? "14px 0" : "24px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Damilola Michael
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-medium transition-colors duration-200"
              style={{
                color: active === link.href.replace("#", "") ? "var(--accent)" : "var(--text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
              {active === link.href.replace("#", "") && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </a>
          ))}

          {/* Resume button */}
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 hover:bg-white hover:text-black"
            style={{
              border: "1px solid #444",
              color: "var(--text-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Mobile hamburger placeholder */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-px bg-white block" />
          <span className="w-4 h-px bg-white block" />
          <span className="w-6 h-px bg-white block" />
        </div>
      </div>
    </motion.nav>
  );
}
