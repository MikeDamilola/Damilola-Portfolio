import gallery1 from "../assets/Gallery 1.jpg";
import gallery2 from "../assets/Gallery 2.jpg";
import gallery3 from "../assets/Gallery 3.jpg";
import gallery4 from "../assets/Gallery 4.jpg";
import gallery5 from "../assets/Gallery 5.jpg";
import gallery6 from "../assets/Gallery 6.jpg";
import gallery7 from "../assets/Gallery 7.jpg";
import gallery8 from "../assets/Gallery 8.jpg";
import gallery9  from "../assets/Gallery 9.jpg";
import gallery10 from "../assets/Gallery 10.jpg";
import gallery11 from "../assets/Gallery 11.jpg";
import gallery12 from "../assets/Gallery 12.jpg";
import gallery13 from "../assets/Gallery 13.jpg";
import gallery14 from "../assets/Gallery 14.jpg";
import gallery15 from "../assets/Gallery 15.jpg";

// Top row uses Gallery 1–8
const rowTop    = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];
// Bottom row uses Gallery 9–15
const rowBottom = [gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15];

function GalleryImage({ src, alt }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "420px",
        height: "280px",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #222",
        background: "#111",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

export default function DesignGallery() {
  return (
    <section
      id="gallery"
      style={{
        background: "var(--bg-primary)",
        padding: "70px 0 90px",
        overflow: "hidden",
      }}
    >
      {/* "View Design Gallery" pill button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 600,
            color: "#ffffff",
            background: "#1a1a1a",
            border: "1px solid #2e2e2e",
            borderRadius: "999px",
            padding: "12px 28px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#252525")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}
        >
          View Design Gallery
        </a>
      </div>

      {/* Row 1 — scrolls RIGHT to LEFT */}
      <div
        style={{
          overflow: "hidden",
          marginBottom: "20px",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            animation: "galleryLeft 30s linear infinite",
          }}
        >
          {[...rowTop, ...rowTop, ...rowTop].map((src, i) => (
            <GalleryImage key={`top-${i}`} src={src} alt={`Gallery top ${i}`} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls LEFT to RIGHT */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            animation: "galleryRight 30s linear infinite",
          }}
        >
          {[...rowBottom, ...rowBottom, ...rowBottom].map((src, i) => (
            <GalleryImage key={`bottom-${i}`} src={src} alt={`Gallery bottom ${i}`} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes galleryLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes galleryRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
