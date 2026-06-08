import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";
import "./CareerTimeline.css";

function MobileExperienceCard({ data, index }) {
  return (
    <motion.article
      className="career-card-mobile"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
    >
      <span className="career-card-mobile__dot" aria-hidden="true" />

      <div className="career-card-mobile__inner">
        <div className="career-card-mobile__header">
          <h3 className="career-card-mobile__role">
            {data.company} ({data.type})
          </h3>
          <span className="career-card-mobile__period">{data.period}</span>
        </div>

        <ul className="career-card-mobile__bullets">
          {data.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function CareerTimeline() {
  return (
    <section id="experience" className="career-timeline">
      <h2 className="career-timeline__title-mobile">Career Timeline</h2>

      <div className="career-timeline__badge-wrap">
        <span className="career-timeline__badge">Career Timeline</span>
      </div>

      <div className="career-timeline__mobile">
        <div className="career-timeline__line" aria-hidden="true" />
        {experiences.map((exp, index) => (
          <MobileExperienceCard key={exp.id} data={exp} index={index} />
        ))}
      </div>

      <div className="career-timeline__desktop">
        <div className="career-timeline__desktop-line" aria-hidden="true" />
        <div className="career-timeline__desktop-cards">
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
