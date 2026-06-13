import ProjectHeader from "../components/ProjectHeader";
import hightableMockup from "../assets/Mockup 8.png";
import cuate1 from "../assets/cuate 1.svg";
import cuate2 from "../assets/cuate 2.svg";
import cuate3 from "../assets/cuate 3.svg";
import "./HightableProject.css";

export default function HightableProject() {
  return (
    <div className="hightable-page">
      <ProjectHeader />

      <main className="hightable-content">

        {/* ── Hero ── */}
        <section className="hightable-hero">
          <div className="hightable-hero__info">
            <div className="hightable-hero__info-inner">
              <div className="hightable-hero__meta">
                <span>2024</span>
                <span>App</span>
              </div>

              <h1 className="hightable-hero__title">
                &ldquo;Redefining Hospitality: Designing an App to Connect Users
                with Restaurants, Hotels, and Events Across Africa&rdquo;
              </h1>

              <div className="hightable-hero__details">
                <div>
                  <p className="hightable-hero__detail-label">Role</p>
                  <ul className="hightable-hero__detail-list">
                    <li>UX Researcher</li>
                    <li>Product Designer</li>
                  </ul>
                </div>

                <div>
                  <p className="hightable-hero__detail-label">Industry</p>
                  <ul className="hightable-hero__detail-list">
                    <li>Hospitality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hightable-hero__visual">
            <div className="hightable-hero__visual-inner">
              <img
                src={hightableMockup}
                alt="Hightable app mockup showcasing restaurant and dining experience screens"
              />
            </div>
          </div>
        </section>

        {/* ── Problem Statement ── */}
        <section className="ht-problem">
          <div className="ht-problem__inner">
            <h2 className="ht-problem__heading">Problem Statement</h2>
            <p className="ht-problem__text">
              In Africa, finding reliable information about nearby restaurants, hotels, and events is
              often a challenge due to fragmented resources, outdated directories, and a lack of
              centralized platforms. Travelers, locals, and event-goers frequently face difficulties
              in accessing accurate, up-to-date details about hospitality services and happenings in
              their vicinity. This leads to missed opportunities, poor planning, and a less-than-optimal
              experience. There is a need for a seamless, user-friendly solution that redefines
              hospitality by providing a comprehensive, real-time platform for discovering restaurants,
              hotels, and events tailored to the diverse needs of users across Africa.
            </p>
          </div>
        </section>

        {/* ── Project Goals ── */}
        <section className="ht-goals">
          <div className="ht-goals__inner">
            <div className="ht-goals__illustration">
              <img src={cuate1} alt="Project goals illustration" className="ht-illus-img" />
            </div>

            <div className="ht-goals__body">
              <h2 className="ht-goals__heading">Project Goals</h2>
              <p className="ht-goals__text">
                The goal of this hightable app is to create a seamless and user-friendly platform that
                empowers users across Africa to effortlessly discover and access information about
                nearby restaurants, hotels, and events. By leveraging real-time data, intuitive design,
                and personalized recommendations, the app aims to redefine the hospitality experience.
                Hightable aims to become the go-to solution for anyone looking to explore the best of
                African hospitality, bridging the gap between service providers and users while
                fostering vibrant experiences.
              </p>
            </div>
          </div>
        </section>

        {/* ── Solution ── */}
        <section className="ht-solution">
          <div className="ht-solution__inner">
            <div className="ht-solution__body">
              <h2 className="ht-solution__heading">Solution</h2>
              <p className="ht-solution__text">
                The Hightable app simplifies discovering restaurants, hotels, and events across Africa
                through a centralized platform. It provides a user-friendly interface for seamless
                navigation and exploration. Verified listings and real-time updates ensure accurate and
                reliable information. Users can make direct bookings and inquiries, enhancing
                convenience. Personalized recommendations enrich the experience by matching individual
                preferences. The app also supports local businesses by boosting their visibility
                and reach.
              </p>
            </div>

            <div className="ht-solution__illustration">
              <img src={cuate2} alt="Solution illustration" className="ht-illus-img" />
            </div>
          </div>
        </section>

        {/* ── Target Audience ── */}
        <section className="ht-audience">
          <div className="ht-audience__inner">
            <div className="ht-audience__illustration">
              <div className="ht-audience__watermark">HIGHTABLE</div>
              <img src={cuate3} alt="Target audience illustration" className="ht-illus-img ht-audience__illus-img" />
            </div>

            <div className="ht-audience__body">
              <h2 className="ht-audience__heading">Target Audience</h2>
              <p className="ht-audience__text">
                The hospitality app caters to travelers exploring Africa, providing reliable information
                about restaurants, hotels, and events. Local residents can find nearby dining,
                accommodation, or entertainment options for leisure or occasions. Business professionals
                benefit by easily booking hotels or venues for meetings. Event enthusiasts can discover
                cultural and recreational activities. Hospitality providers gain visibility, connecting
                with a broader audience. The app also appeals to Millennials and Gen Z, offering a
                modern, digital solution for quick and efficient service access.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
