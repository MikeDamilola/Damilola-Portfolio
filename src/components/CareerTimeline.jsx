import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function CareerTimeline() {
  return (
    <section
      id="experience"
      style={{
        background: "#0a0a0a",
        padding: "90px 24px 120px",
      }}
    >
      {/* Section badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "72px" }}>
        <span
          style={{
            background: "#1c1c1c",
            color: "#ffffff",
            padding: "10px 24px",
            borderRadius: "999px",
            fontSize: "13px",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            border: "1px solid #2a2a2a",
          }}
        >
          Career Timeline
        </span>
      </div>

      {/* Scroll container — tall enough for sticky to work per card */}
      <div
        style={{
          position: "relative",
          maxWidth: "740px",
          margin: "0 auto",
        }}
      >
        {/* Vertical timeline line */}
        <div
          style={{
            position: "absolute",
            left: "6px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, #333 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Cards */}
        <div style={{ paddingLeft: "40px" }}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              data={exp}
              index={index}
              totalCards={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
