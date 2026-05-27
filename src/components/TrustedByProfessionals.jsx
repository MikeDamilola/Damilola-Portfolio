import { useRef } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const SCROLL_AMOUNT = 380;

export default function TrustedByProfessionals() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      style={{ background: "#f5f5f5", padding: "72px 48px" }}
    >
      {/* Badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <span
          style={{
            background: "#1a1a1a",
            color: "#ffffff",
            padding: "10px 24px",
            borderRadius: "999px",
            fontSize: "14px",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          Trusted By Professionals
        </span>
      </div>

      {/* Carousel wrapper */}
      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto" }}>

        {/* Left button */}
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
          className="hide-scrollbar"
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            alignItems: "stretch",
            paddingBottom: "4px",
          }}
        >
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} data={t} index={index} />
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
}
