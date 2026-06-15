import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import see9jaImg from "../assets/See9ja.png";
import noCashImg from "../assets/No Cash.png";
import hospitalityImg from "../assets/Hospitality.png";
import farmIlyImg from "../assets/Farmily.png";
import learnexoImg from "../assets/Learnexo.png";
import evChargingImg from "../assets/EV Charging.png";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "See9ja",
    title:
      '"Discover Nigeria Effortlessly: Your Ultimate Solution to Seamless Tourism Adventures!"',
    mobileTitle:
      "Discover Nigeria Effortlessly: Your Ultimate Solution to Seamless Tourism Adventures!",
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    mobileTags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: see9jaImg,
    accent: "#e8a882",
    link: "/projects/see9ja",
  },
  {
    id: 2,
    name: "No Cash",
    title:
      '"Reimagining Everyday Mobility in Africa: A Unified App for Transport Payments, Wallets, and Smart Ride Sharing Access"',
    mobileTitle:
      "Reimagining Everyday Mobility in Africa: A Unified App for Transport Payments, Wallets, and Smart Ride Sharing Access",
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    mobileTags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: noCashImg,
    accent: "#ffb38e",
    link: "/projects/nocash",
  },
  {
    id: 3,
    name: "Hightable",
    title:
      '"Redefining Hospitality: Designing an App to Connect Users with Restaurants, Hotels, and Events Across Africa"',
    mobileTitle:
      "Redefining Hospitality: Designing an App to Connect Users with Restaurants, Hotels, and Events Across Africa",
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    mobileTags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: hospitalityImg,
    accent: "#d48c5b",
    link: "/projects/hightable",
  },
  {
    id: 4,
    name: "Farmily",
    title:
      '"Farmily: Revolutionizing Online Grocery Shopping and Fresh Farm Produce Delivery in Africa"',
    mobileTitle:
      "Farmily: Revolutionizing Online Grocery Shopping and Fresh Farm Produce Delivery in Africa",
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    mobileTags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: farmIlyImg,
    accent: "#e07a5f",
    link: "/projects/farmily",
  },
  {
    id: 5,
    name: "Learnexo",
    title:
      '"Learnexo: An AI-Driven Learning Platform That Adapts to Every Learner, An Inclusive Learning Experience Designed Around You"',
    mobileTitle:
      "Learnexo: An AI-Driven Learning Platform That Adapts to Every Learner, An Inclusive Learning Experience Designed Around You",
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    mobileTags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: learnexoImg,
    accent: "#ffb088",
    link: "/projects/learnexo",
  },
  {
    id: 6,
    name: "Energify",
    title:
      '"Powering Mobility Effortlessly: Your Ultimate Solution to Next-Generation EV Charging Stations!"',
    mobileTitle:
      "Powering Mobility Effortlessly: Your Ultimate Solution to Next-Generation EV Charging Stations!",
    tags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    mobileTags: ["UX Design", "UI Design", "Prototype", "User Testing"],
    image: evChargingImg,
    accent: "#e8a882",
    serifTitle: true,
    link: "/projects/energify",
  },
];

function DesktopProjectCard({ project }) {
  return (
    <div className="projects-stack-card">
      <div className="projects-stack-card__image">
        <img src={project.image} alt={project.name} />
      </div>

      <div className="projects-stack-card__content">
        <p
          className={`projects-stack-card__title${
            project.serifTitle ? " projects-stack-card__title--serif" : ""
          }`}
        >
          {project.title}
        </p>

        <div className="projects-stack-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <Link
          to={project.link}
          className="projects-stack-card__btn"
          style={{ "--project-accent": project.accent }}
        >
          View Project <span className="projects-stack-card__btn-arrow" aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}

function setupStackScroll(wrapper, cardElements) {
  cardElements.forEach((card, i) => {
    if (i === 0) {
      gsap.set(card, { y: 0, opacity: 1 });
    } else {
      gsap.set(card, { y: "100%", opacity: 0.5 });
    }
  });

  const totalCards = cardElements.length;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: `+=${(totalCards - 1) * 100}%`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  cardElements.forEach((card, i) => {
    if (i === 0) {
      tl.to(
        card,
        { opacity: 0.5, duration: 1, ease: "power2.inOut" },
        i
      );
    } else {
      const startTime = i - 1;

      tl.to(
        card,
        { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
        startTime
      );

      const prevCard = cardElements[i - 1];
      tl.to(
        prevCard,
        {
          opacity: i === 1 ? 0.5 : 0.3,
          duration: 1,
          ease: "power2.inOut",
        },
        startTime
      );
    }
  });
}

function useStackScrollAnimation(wrapperRef, cardsRef, query) {
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    if (!mediaQuery.matches || !wrapperRef.current) return undefined;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const cardElements = cardsRef.current.filter(Boolean);
    setupStackScroll(wrapperRef.current, cardElements);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [wrapperRef, cardsRef, query]);
}

export default function Projects() {
  const mobileWrapperRef = useRef(null);
  const mobileCardsRef = useRef([]);
  const desktopWrapperRef = useRef(null);
  const desktopCardsRef = useRef([]);

  useStackScrollAnimation(mobileWrapperRef, mobileCardsRef, "(max-width: 767px)");
  useStackScrollAnimation(desktopWrapperRef, desktopCardsRef, "(min-width: 768px)");

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p>Explore My Projects</p>
      </div>

      <div className="projects-mobile">
        <div ref={mobileWrapperRef} className="stack-wrapper stack-wrapper--mobile">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                mobileCardsRef.current[index] = el;
              }}
              className="stack-card"
              style={{ zIndex: index + 1 }}
            >
              <div className="stack-card__inner stack-card__inner--mobile">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-desktop">
        <div ref={desktopWrapperRef} className="stack-wrapper">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                desktopCardsRef.current[index] = el;
              }}
              className="stack-card"
              style={{ zIndex: index + 1 }}
            >
              <div className="stack-card__inner">
                <DesktopProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
