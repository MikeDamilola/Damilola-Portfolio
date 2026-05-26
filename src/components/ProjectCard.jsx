import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(74,222,128,0.08)" }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-0`}
      >
        {/* Image */}
        <div className="md:w-1/2 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-56 md:h-full object-cover"
            style={{ minHeight: "280px" }}
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(74,222,128,0.1)", color: "var(--accent)", border: "1px solid rgba(74,222,128,0.2)" }}
            >
              {project.year}
            </span>
          </div>

          <h3
            className="text-xl md:text-2xl font-bold leading-snug"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "#1a1a1a",
                  color: "#999",
                  border: "1px solid #2a2a2a",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <button
              className="group inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
              style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}
            >
              View Case Study
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
