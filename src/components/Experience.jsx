import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      style={{ background: "#080808" }}
    >
      <div className="max-w-[896px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-sm font-medium mb-2"
            style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
          >
            Career Journey
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <a
            href="mailto:damiloladada@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{
              background: "var(--accent)",
              color: "#0a0a0a",
              fontFamily: "var(--font-body)",
            }}
          >
            Accept Challenge ✦
          </a>
        </motion.div>
      </div>
    </section>
  );
}
