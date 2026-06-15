import ProjectHeader from "../components/ProjectHeader";
import energifyHero from "../assets/EV Charging.png";
import inProgressIllustration from "../assets/No Cash.svg";
import "./EnergifyProject.css";

export default function EnergifyProject() {
  return (
    <div className="energify-page">
      <ProjectHeader />

      <main className="energify-content">

        {/* ── Hero ── */}
        <section className="en-hero">
          <div className="en-hero__info">
            <div className="en-hero__info-inner">
              <div className="en-hero__meta">
                <span>2025</span>
                <span>Web App</span>
              </div>

              <h1 className="en-hero__title">
                &ldquo;Powering Mobility Effortlessly: Your Ultimate Solution
                to Next-Generation EV Charging Stations!&rdquo;
              </h1>

              <div className="en-hero__details">
                <div>
                  <p className="en-hero__detail-label">Role</p>
                  <ul className="en-hero__detail-list">
                    <li>UX Researcher</li>
                    <li>Product Designer</li>
                  </ul>
                </div>

                <div>
                  <p className="en-hero__detail-label">Industry</p>
                  <ul className="en-hero__detail-list">
                    <li>Electric Vehicles, Transport</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="en-hero__visual">
            <div className="en-hero__visual-inner">
              <img
                src={energifyHero}
                alt="Energify EV charging station app mockup on mobile devices"
              />
            </div>
          </div>
        </section>

        {/* ── In Progress ── */}
        <section className="en-inprogress">
          <div className="en-inprogress__inner">
            <img
              src={inProgressIllustration}
              alt="Project in progress illustration"
              className="en-inprogress__illustration"
            />
            <h2 className="en-inprogress__heading">Case Study In Progress</h2>
            <p className="en-inprogress__text">
              This case study is currently being documented. Check back soon for the full
              breakdown — including research, design process, wireframes, and final screens.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
