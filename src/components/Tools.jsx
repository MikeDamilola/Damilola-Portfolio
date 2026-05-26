import { motion } from "framer-motion";
import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiSketch,
  SiNotion,
  SiSlack,
  SiFramer,
  SiWebflow,
  SiMiro,
  SiVisualstudiocode,
  SiInvision,
  SiZeplin,
} from "react-icons/si";

const tools = [
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiAdobexd, name: "Adobe XD", color: "#FF61F6" },
  { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
  { icon: SiAdobeillustrator, name: "Illustrator", color: "#FF9A00" },
  { icon: SiAdobeaftereffects, name: "After Effects", color: "#9999FF" },
  { icon: SiAdobepremierepro, name: "Premiere Pro", color: "#9999FF" },
  { icon: SiSketch, name: "Sketch", color: "#F7B500" },
  { icon: SiNotion, name: "Notion", color: "#ffffff" },
  { icon: SiSlack, name: "Slack", color: "#4A154B" },
  { icon: SiFramer, name: "Framer", color: "#0055FF" },
  { icon: SiZeplin, name: "Zeplin", color: "#FFBE00" },
  { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
  { icon: SiInvision, name: "InVision", color: "#FF3366" },
  { icon: SiMiro, name: "Miro", color: "#FFD02F" },
  { icon: SiWebflow, name: "Webflow", color: "#4353FF" },
];

function ToolCard({ icon: Icon, name, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -4 }}
      className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl cursor-default"
      style={{
        background: "#0f0f0f",
        border: "1px solid var(--border)",
        minWidth: "80px",
        minHeight: "80px",
      }}
    >
      <Icon size={28} style={{ color }} />
      {/* Tooltip */}
      <span
        className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: "#222", color: "#fff", border: "1px solid #333" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Tools() {
  const doubled = [...tools, ...tools];

  return (
    <section
      id="tools"
      className="py-20 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-body)" }}>
            My Toolkit
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Tools I use on a daily basis
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div
          className="flex gap-4 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} {...tool} />
          ))}
        </div>
      </div>

      {/* Also show static grid on larger screens */}
      <div className="max-w-7xl mx-auto px-6 mt-8 hidden md:block">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={itemVariants}>
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
