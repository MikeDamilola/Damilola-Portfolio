import { socialLinks } from "../data/footer";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <div
      className="footer-outer"
      style={{
        background: "#e4e4e4",
        padding: "40px 48px",
      }}
    >
      <footer
        className="footer-card"
        style={{
          background: "#efefef",
          borderRadius: "24px",
          padding: "64px 80px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Social links — 3-column grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0 48px",
            marginBottom: "48px",
          }}
        >
          {socialLinks.map((link) => (
            <SocialLink key={link.id} data={link} />
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "15px",
            color: "#3a3a4a",
            textAlign: "center",
            margin: 0,
          }}
        >
          Damilola © 2026. Designed by Damilola Dada
        </p>
      </footer>
    </div>
  );
}
