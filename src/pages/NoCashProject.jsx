import ProjectHeader from "../components/ProjectHeader";
import noCashHero from "../assets/No Cash.png";
import inProgressIllustration from "../assets/No Cash.svg";
import "./NoCashProject.css";

export default function NoCashProject() {
  return (
    <div className="nocash-page">
      <ProjectHeader />

      <main className="nocash-content">

        {/* ── Hero ── */}
        <section className="nc-hero">
          <div className="nc-hero__info">
            <div className="nc-hero__info-inner">
              <div className="nc-hero__meta">
                <span>2024</span>
                <span>Mobile App</span>
              </div>

              <h1 className="nc-hero__title">
                &ldquo;Reimagining Everyday Mobility in Africa: A Unified App
                for Transport Payments, Wallets, and Smart Ride Sharing
                Access&rdquo;
              </h1>

              <div className="nc-hero__details">
                <div>
                  <p className="nc-hero__detail-label">Role</p>
                  <ul className="nc-hero__detail-list">
                    <li>UX Researcher</li>
                    <li>Product Designer</li>
                  </ul>
                </div>

                <div>
                  <p className="nc-hero__detail-label">Industry</p>
                  <ul className="nc-hero__detail-list">
                    <li>Transport &amp; Ride Sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nc-hero__visual">
            <div className="nc-hero__visual-inner">
              <img
                src={noCashHero}
                alt="No Cash app mockup showcasing transport payment and wallet screens"
              />
            </div>
          </div>
        </section>

        {/* ── In Progress ── */}
        <section className="nc-inprogress">
          <div className="nc-inprogress__inner">
            <img
              src={inProgressIllustration}
              alt="Project in progress illustration"
              className="nc-inprogress__illustration"
            />
            <h2 className="nc-inprogress__heading">Case Study In Progress</h2>
            <p className="nc-inprogress__text">
              This case study is currently being documented. Check back soon for the full
              breakdown — including research, design process, wireframes, and final screens.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
