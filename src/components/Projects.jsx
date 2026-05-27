import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import see9jaImg     from "../assets/See9ja.png";
import noCashImg     from "../assets/No Cash.png";
import hospitalityImg from "../assets/Hospitality.png";
import farmIlyImg    from "../assets/Farmily.png";
import learnexoImg   from "../assets/Learnexo.png";
import evChargingImg from "../assets/EV Charging.png";

const projects = [
  {
    id: 1,
    title: '"Discover Nigeria Effortlessly: Your Ultimate Solution to Seamless Tourism Adventures!"',
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: see9jaImg,
    bg: "#111a11",
    link: "#",
  },
  {
    id: 2,
    title: '"Reimagining Everyday Mobility in Africa: A Unified App for Transport Payments, Wallets, and Smart Ride Sharing Access"',
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: noCashImg,
    bg: "#0f180f",
    link: "#",
  },
  {
    id: 3,
    title: '"Redefining Hospitality: Designing an App to Connect Users with Restaurants, Hotels, and Events Across Africa"',
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: hospitalityImg,
    bg: "#1a1208",
    link: "#",
  },
  {
    id: 4,
    title: '"Farmily: Revolutionizing Online Grocery Shopping and Fresh Farm Produce Delivery in Africa"',
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: farmIlyImg,
    bg: "#0d1a0d",
    link: "#",
  },
  {
    id: 5,
    title: '"Learnexo: An AI-Driven Learning Platform That Adapts to Every Learner, An Inclusive Learning Experience Designed Around You"',
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: learnexoImg,
    bg: "#080f28",
    link: "#",
  },
  {
    id: 6,
    title: '"Powering Mobility Effortlessly: Your Ultimate Solution to Next-Generation EV Charging Stations!"',
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: evChargingImg,
    bg: "#081520",
    link: "#",
  },
];

const STICKY_TOP  = 108;   // px from top where all cards pin
const LANE_HEIGHT = 420;   // scroll distance each card occupies

function StackCard({ project, index, total }) {
  const laneRef = useRef(null);

  // Track scroll progress within this card's lane
  const { scrollYProgress } = useScroll({
    target: laneRef,
    offset: ["start start", "end start"],
  });

  // As you scroll PAST this card, it shrinks into the background
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1 - 0.04 * (total - index)]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.55]);
  const y       = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <div
      ref={laneRef}
      style={{ height: `${LANE_HEIGHT}px`, position: "relative" }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: `${STICKY_TOP}px`,
          scale,
          opacity,
          y,
          transformOrigin: "top center",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #222",
          display: "grid",
          gridTemplateColumns: "45% 55%",
          background: "#111111",
          minHeight: "300px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* LEFT — image */}
        <div style={{ background: project.bg, overflow: "hidden", minHeight: "300px" }}>
          <img
            src={project.image}
            alt={`Project ${project.id}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* RIGHT — content */}
        <div
          style={{
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "24.5px",
              fontWeight: 400,
              color: "#f0f0f0",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {project.title}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#777",
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: "999px",
                  padding: "4px 12px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              alignSelf: "flex-start",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#fff",
              background: "#1e1e1e",
              border: "1px solid #303030",
              borderRadius: "999px",
              padding: "8px 20px",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2a2a2a";
              e.currentTarget.style.borderColor = "#444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1e1e1e";
              e.currentTarget.style.borderColor = "#303030";
            }}
          >
            View Project <span style={{ fontSize: "14px" }}>→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--bg-primary)", padding: "60px 0 100px" }}
    >
      {/* Section heading */}
      <div style={{ maxWidth: "984px", margin: "0 auto 28px", padding: "0 20px" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 800,
            color: "#ffffff",
            margin: 0,
          }}
        >
          Explore My Projects
        </p>
      </div>

      {/* Stacking cards */}
      <div style={{ maxWidth: "984px", margin: "0 auto", padding: "0 20px" }}>
        {projects.map((project, index) => (
          <StackCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
