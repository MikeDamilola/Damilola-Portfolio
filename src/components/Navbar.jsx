import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCloudArrowDown } from "react-icons/hi2";
import resumePdf from "../assets/Dada_Damilola_Michael_CV_UIUX 2026.pdf";

const RESUME_FILENAME = "Dada_Damilola_Michael_CV_UIUX_2026.pdf";

const navLinks = [
  { label: "My Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Career", href: "#experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="navbar"
      >
        <div className="navbar-inner">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="navbar-logo"
          >
            Damilola Michael
          </a>

          <div className="navbar-links">
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

            <a href={resumePdf} download={RESUME_FILENAME} className="navbar-resume">
              Download Resume
              <span className="navbar-resume-icon">
                <HiOutlineCloudArrowDown size={15} color="#f97316" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="navbar-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`navbar-hamburger-line ${menuOpen ? "is-open" : ""}`} />
            <span className={`navbar-hamburger-line navbar-hamburger-line--short ${menuOpen ? "is-open" : ""}`} />
            <span className={`navbar-hamburger-line ${menuOpen ? "is-open" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="navbar-mobile-menu"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => handleNavClick(e, link.href)}
                className="navbar-mobile-link"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={resumePdf}
              download={RESUME_FILENAME}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => setMenuOpen(false)}
              className="navbar-mobile-resume"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
