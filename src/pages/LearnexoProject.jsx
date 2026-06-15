import ProjectHeader from "../components/ProjectHeader";
import learnexoHero from "../assets/Learnexo.png";
import mockup17 from "../assets/Mockup 17.jpg";
import inProgressIllustration from "../assets/Learnexo.svg";
import "./LearnexoProject.css";

export default function LearnexoProject() {
  return (
    <div className="learnexo-page">
      <ProjectHeader />

      <main className="learnexo-content">

        {/* ── Hero ── */}
        <section className="lx-hero">
          <div className="lx-hero__info">
            <div className="lx-hero__info-inner">
              <div className="lx-hero__meta">
                <span>2025</span>
                <span>Web App</span>
              </div>

              <h1 className="lx-hero__title">
                &ldquo;Learnexo: An AI-Driven Learning Platform That Adapts to
                Every Learner, An Inclusive Learning Experience Designed
                Around You&rdquo;
              </h1>

              <div className="lx-hero__details">
                <div>
                  <p className="lx-hero__detail-label">Role</p>
                  <ul className="lx-hero__detail-list">
                    <li>UX Researcher</li>
                    <li>Product Designer</li>
                  </ul>
                </div>

                <div>
                  <p className="lx-hero__detail-label">Industry</p>
                  <ul className="lx-hero__detail-list">
                    <li>AI Learning Management System</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lx-hero__visual">
            <div className="lx-hero__visual-inner">
              <img
                src={learnexoHero}
                alt="Learnexo AI-powered learning platform mockup on laptop"
              />
            </div>
          </div>
        </section>

        {/* ── In Progress ── */}
        <section className="lx-inprogress">
          <div className="lx-inprogress__inner">
            <img
              src={inProgressIllustration}
              alt="Project in progress illustration"
              className="lx-inprogress__illustration"
            />
            <h2 className="lx-inprogress__heading">Case Study In Progress</h2>
            <p className="lx-inprogress__text">
              This case study is currently being documented. Check back soon for the full
              breakdown — including research, design process, wireframes, and final screens.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
