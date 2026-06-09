import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import DesignGallery from "../components/DesignGallery";
import CareerTimeline from "../components/CareerTimeline";
import TrustedByProfessionals from "../components/TrustedByProfessionals";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Tools />
      <Projects />
      <DesignGallery />
      <CareerTimeline />
      <TrustedByProfessionals />
      <Footer />
    </div>
  );
}
