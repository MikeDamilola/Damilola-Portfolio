import item1  from "../assets/Item 1.png";
import item2  from "../assets/Item 2.png";
import item3  from "../assets/Item 3.png";
import item4  from "../assets/Item 4.png";
import item5  from "../assets/Item 5.png";
import item6  from "../assets/Item 6.png";
import item7  from "../assets/Item 7.png";
import item8  from "../assets/Item 8.png";
import item9  from "../assets/Item 9.png";
import item10 from "../assets/Item 10.png";
import item11 from "../assets/Item 11.png";
import item12 from "../assets/Item 12.png";

const tools = [
  { src: item1,  name: "Item 1"  },
  { src: item2,  name: "Item 2"  },
  { src: item3,  name: "Item 3"  },
  { src: item4,  name: "Item 4"  },
  { src: item5,  name: "Item 5"  },
  { src: item6,  name: "Item 6"  },
  { src: item7,  name: "Item 7"  },
  { src: item8,  name: "Item 8"  },
  { src: item9,  name: "Item 9"  },
  { src: item10, name: "Item 10" },
  { src: item11, name: "Item 11" },
  { src: item12, name: "Item 12" },
];

// Triple so the loop is seamless on any screen width
const marqueeItems = [...tools, ...tools, ...tools];

function ToolCard({ src, name }) {
  return (
    <div
      title={name}
      style={{
        width: "62px",
        height: "62px",
        borderRadius: "14px",
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
        padding: "10px",
      }}
    >
      <img
        src={src}
        alt={name}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default function Tools() {
  return (
    <section
      id="tools"
      style={{
        background: "var(--bg-primary)",
        padding: "20px 0 50px",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          fontWeight: 500,
          color: "#cccccc",
          textAlign: "center",
          marginBottom: "32px",
          letterSpacing: "0.01em",
        }}
      >
        Tools i use on a daily basis
      </p>

      {/* Scrolling row */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            width: "max-content",
            animation: "toolsMarquee 28s linear infinite",
          }}
        >
          {marqueeItems.map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} {...tool} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes toolsMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
