import {
  FaHandHoldingHeart,
  FaMagnifyingGlassChart,
  FaLightbulb,
  FaPenRuler,
  FaClipboardCheck,
  FaCommentDots,
} from "react-icons/fa6";
import ProjectHeader from "../components/ProjectHeader";
import hightableMockup from "../assets/Mockup 8.png";
import cuate1 from "../assets/cuate 1.svg";
import cuate2 from "../assets/cuate 2.svg";
import cuate3 from "../assets/cuate 3.svg";
import hightableLogo from "../assets/Hightable logo.png";
import userFlowImg from "../assets/Mockup 9.png";
import wireframesImg from "../assets/Mockup 10.png";
import mockup11 from "../assets/Mockup 11.png";
import mockup12 from "../assets/Mockup 12.png";
import mockup13 from "../assets/Mockup 13.png";
import mockup14 from "../assets/Mockup 14.png";
import mockup15 from "../assets/Mockup 15.png";
import jamesPhoto from "../assets/Olajide.jpg";
import amaraPhoto from "../assets/Farhah.jpg";
import "./HightableProject.css";

const designSteps = [
  {
    id: "empathize",
    label: "Empathize",
    Icon: FaHandHoldingHeart,
    items: ["User Research", "User Interview", "User Analysis"],
  },
  {
    id: "define",
    label: "Define",
    Icon: FaMagnifyingGlassChart,
    items: ["User Persona", "User Journey Map", "Goal Statement", "Empathy Map"],
  },
  {
    id: "ideate",
    label: "Ideate",
    Icon: FaLightbulb,
    items: ["Brainstorming", "Card Sorting", "User Flow"],
  },
  {
    id: "design",
    label: "Design",
    Icon: FaPenRuler,
    items: ["Paper Wireframing", "Visual Design", "Prototype"],
  },
  {
    id: "test",
    label: "Test",
    Icon: FaClipboardCheck,
    items: ["Check Usability", "Survey Insight", "Improvements"],
  },
];

const ganttBars = [
  {
    id: "understand",
    label: "Understand",
    sub: "User Research, User Interview, Competitive Analysis",
    colStart: 1,
    colEnd: 3,
    row: 1,
  },
  {
    id: "define",
    label: "Define",
    sub: "User Persona, Empathy Map, User Journey",
    colStart: 2,
    colEnd: 4,
    row: 2,
  },
  {
    id: "ideate",
    label: "Ideate",
    sub: "User flow, Card sorting, Information Architecture",
    colStart: 3,
    colEnd: 5,
    row: 3,
  },
  {
    id: "design-gantt",
    label: "Design",
    sub: "Wireframes, Hi-fi Design, Prototype",
    colStart: 4,
    colEnd: 6,
    row: 4,
  },
  {
    id: "feedback",
    label: "Feedback",
    sub: "User Research, User Interview, Competitive Analysis",
    colStart: 5,
    colEnd: 7,
    row: 5,
  },
];

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

        {/* ── User Persona ── */}
        <section className="ht-persona">
          <div className="ht-persona__inner">

            {/* Section heading */}
            <div className="ht-persona__header">
              <img src={hightableLogo} alt="Hightable" className="ht-persona__logo" />
              <h2 className="ht-persona__heading">User Persona</h2>
            </div>

            {/* Persona 1 — James Akintunde */}
            <article className="ht-persona__card">
              <div className="ht-persona__profile">
                <img src={jamesPhoto} alt="James Akintunde" className="ht-persona__photo" />
                <p className="ht-persona__name">James Akintunde</p>
                <div className="ht-persona__meta">
                  <span className="ht-persona__meta-label">Age:</span>
                  <span className="ht-persona__meta-value">30</span>
                </div>
                <div className="ht-persona__meta">
                  <span className="ht-persona__meta-label">Occupation:</span>
                  <span className="ht-persona__meta-value">Software Engineer</span>
                </div>
                <div className="ht-persona__meta">
                  <span className="ht-persona__meta-label">Location:</span>
                  <span className="ht-persona__meta-value">Lagos, Nigeria</span>
                </div>
                <p className="ht-persona__bg-label">Background</p>
                <p className="ht-persona__bg-text">
                  James is a tech-savvy professional who enjoys exploring new cities across Africa
                  during his vacation. He values convenience and seeks digital solutions that
                  simplify his travel experience.
                </p>
              </div>

              <div className="ht-persona__details">
                <div className="ht-persona__detail-block">
                  <p className="ht-persona__detail-title">Goals:</p>
                  <ul className="ht-persona__list">
                    <li>To quickly find and book affordable hotels and quality restaurants in new locations.</li>
                    <li>To discover cultural events and entertainment options near him during his trips.</li>
                  </ul>
                </div>
                <div className="ht-persona__detail-block">
                  <p className="ht-persona__detail-title">Frustrations:</p>
                  <ul className="ht-persona__list">
                    <li>Difficulty finding reliable reviews for restaurants and hotels.</li>
                    <li>Challenges in locating events that match his interests in unfamiliar places.</li>
                    <li>Time-consuming manual searches for local attractions.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Persona 2 — Amara Obi */}
            <article className="ht-persona__card">
              <div className="ht-persona__profile">
                <img src={amaraPhoto} alt="Amara Obi" className="ht-persona__photo" />
                <p className="ht-persona__name">Amara Obi</p>
                <div className="ht-persona__meta">
                  <span className="ht-persona__meta-label">Age:</span>
                  <span className="ht-persona__meta-value">25</span>
                </div>
                <div className="ht-persona__meta">
                  <span className="ht-persona__meta-label">Occupation:</span>
                  <span className="ht-persona__meta-value">Content Creator</span>
                </div>
                <div className="ht-persona__meta">
                  <span className="ht-persona__meta-label">Location:</span>
                  <span className="ht-persona__meta-value">Nairobi, Kenya</span>
                </div>
                <p className="ht-persona__bg-label">Background</p>
                <p className="ht-persona__bg-text">
                  Amara is a social butterfly who loves attending events, trying out trendy
                  restaurants, and reviewing her experiences for her online audience. She often
                  searches for unique experiences to share on her platforms.
                </p>
              </div>

              <div className="ht-persona__details">
                <div className="ht-persona__detail-block">
                  <p className="ht-persona__detail-title">Goals:</p>
                  <ul className="ht-persona__list">
                    <li>To stay updated on upcoming events and activities in her city.</li>
                    <li>To discover and visit popular or unique dining spots for content creation.</li>
                  </ul>
                </div>
                <div className="ht-persona__detail-block">
                  <p className="ht-persona__detail-title">Frustrations:</p>
                  <ul className="ht-persona__list">
                    <li>Lack of centralized platforms for finding both events and restaurants in one place.</li>
                    <li>Difficulty in verifying the quality or popularity of venues without visiting.</li>
                    <li>Missing out on events due to late information or limited discovery tools.</li>
                  </ul>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* ── Empathy Map ── */}
        <section className="ht-empathy">
          <div className="ht-empathy__inner">

            <div className="ht-empathy__header">
              <img src={hightableLogo} alt="Hightable" className="ht-persona__logo" />
              <h2 className="ht-empathy__heading">Empathy Map</h2>
            </div>

            {/* Map 1 — James Akintunde */}
            <div className="ht-empathy__map">
              <div className="ht-empathy__grid">
                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">THINKING</p>
                  <ol className="ht-empathy__q-list">
                    <li>&ldquo;What if the hotel doesn&rsquo;t meet my expectations?&rdquo;</li>
                    <li>&ldquo;I wish I could have everything I need in one app.&rdquo;</li>
                    <li>&ldquo;How can I make the most of my limited time here?&rdquo;</li>
                  </ol>
                </div>

                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">FEELING</p>
                  <ol className="ht-empathy__q-list">
                    <li>Anxious about wasting time and money on poor services.</li>
                    <li>Excited to explore new places but wants a hassle-free experience.</li>
                    <li>Relieved when he finds reliable and efficient solutions.</li>
                  </ol>
                </div>

                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">SEEING</p>
                  <ol className="ht-empathy__q-list">
                    <li>&ldquo;I need a reliable app to quickly find quality hotels and restaurants.&rdquo;</li>
                    <li>&ldquo;Reviews are crucial for me to make confident choices.&rdquo;</li>
                    <li>&ldquo;It&rsquo;s frustrating to waste time searching for events in a new city.&rdquo;</li>
                  </ol>
                </div>

                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">DOING</p>
                  <ol className="ht-empathy__q-list">
                    <li>Checks multiple websites and apps to compare options.</li>
                    <li>Relies heavily on user reviews before making decisions.</li>
                    <li>Plans his itinerary ahead of time using digital tools.</li>
                  </ol>
                </div>
              </div>

              <div className="ht-empathy__avatar-wrap">
                <img src={jamesPhoto} alt="James Akintunde" className="ht-empathy__avatar" />
              </div>
            </div>

            {/* Map 2 — Amara Obi */}
            <div className="ht-empathy__map">
              <div className="ht-empathy__grid">
                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">THINKING</p>
                  <ol className="ht-empathy__q-list">
                    <li>&ldquo;What if the hotel doesn&rsquo;t meet my expectations?&rdquo;</li>
                    <li>&ldquo;I wish I could have everything I need in one app.&rdquo;</li>
                    <li>&ldquo;How can I make the most of my limited time here?&rdquo;</li>
                  </ol>
                </div>

                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">FEELING</p>
                  <ol className="ht-empathy__q-list">
                    <li>Anxious about wasting time and money on poor services.</li>
                    <li>Excited to explore new places but wants a hassle-free experience.</li>
                    <li>Relieved when he finds reliable and efficient solutions.</li>
                  </ol>
                </div>

                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">SEEING</p>
                  <ol className="ht-empathy__q-list">
                    <li>&ldquo;I need a reliable app to quickly find quality hotels and restaurants.&rdquo;</li>
                    <li>&ldquo;Reviews are crucial for me to make confident choices.&rdquo;</li>
                    <li>&ldquo;It&rsquo;s frustrating to waste time searching for events in a new city.&rdquo;</li>
                  </ol>
                </div>

                <div className="ht-empathy__quadrant">
                  <p className="ht-empathy__q-title">DOING</p>
                  <ol className="ht-empathy__q-list">
                    <li>Checks multiple websites and apps to compare options.</li>
                    <li>Relies heavily on user reviews before making decisions.</li>
                    <li>Plans his itinerary ahead of time using digital tools.</li>
                  </ol>
                </div>
              </div>

              <div className="ht-empathy__avatar-wrap">
                <img src={amaraPhoto} alt="Amara Obi" className="ht-empathy__avatar" />
              </div>
            </div>

          </div>
        </section>

        {/* ── User Flow ── */}
        <section className="ht-userflow">
          <div className="ht-userflow__inner">
            <h2 className="ht-userflow__heading">User Flow</h2>
            <div className="ht-userflow__visual">
              <img src={userFlowImg} alt="Hightable user flow diagram" />
            </div>
          </div>
        </section>

        {/* ── Design Process ── */}
        <section className="ht-dp">
          <div className="ht-dp__inner">

            {/* Header */}
            <div className="ht-dp__header">
              <img src={hightableLogo} alt="Hightable" className="ht-persona__logo" />
              <h2 className="ht-dp__heading">Design Process</h2>
            </div>

            {/* Step icons + arrows */}
            <div className="ht-dp__steps">
              {designSteps.map((step, i) => (
                <div key={step.id} className="ht-dp__step-group">
                  <div className="ht-dp__step">
                    <div className="ht-dp__icon-wrap">
                      <step.Icon className="ht-dp__icon" />
                    </div>
                    <p className="ht-dp__step-label">{step.label}</p>
                    <ul className="ht-dp__step-items">
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {i < designSteps.length - 1 && (
                    <div className="ht-dp__arrow" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Gantt timeline */}
            <div className="ht-dp__gantt">
              {/* Week headers */}
              <div className="ht-dp__gantt-header">
                {["1st week", "2nd week", "3rd week", "4th week", "5th week", "6th week"].map((w) => (
                  <div key={w} className="ht-dp__week-label">{w}</div>
                ))}
              </div>

              {/* Bars grid */}
              <div className="ht-dp__gantt-body">
                {/* Dashed column dividers */}
                {[1, 2, 3, 4, 5, 6].map((col) => (
                  <div
                    key={col}
                    className="ht-dp__gantt-col"
                    style={{ gridColumn: col }}
                  />
                ))}

                {/* Bars */}
                {ganttBars.map((bar) => (
                  <div
                    key={bar.id}
                    className="ht-dp__gantt-bar"
                    style={{
                      gridColumn: `${bar.colStart} / ${bar.colEnd}`,
                      gridRow: bar.row,
                    }}
                  >
                    <p className="ht-dp__bar-label">{bar.label}</p>
                    <p className="ht-dp__bar-sub">{bar.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Typography & Color Palette ── */}
        <section className="ht-brand">
          <div className="ht-brand__inner">

            {/* Typography */}
            <div className="ht-type">
              <div className="ht-type__header">
                <img src={hightableLogo} alt="Hightable" className="ht-persona__logo" />
                <h2 className="ht-type__heading">Typography</h2>
              </div>

              <div className="ht-type__body">
                <p className="ht-type__wordmark">NEXA</p>

                <div className="ht-type__alphabet">
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                </div>

                <div className="ht-type__weights">
                  <p style={{ fontWeight: 300 }}>Nexa Light</p>
                  <p style={{ fontWeight: 400 }}>Nexa Regular</p>
                  <p style={{ fontWeight: 700 }}>Nexa <strong>Bold</strong></p>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="ht-colors">
              <h2 className="ht-colors__heading">Color Palette</h2>

              <div className="ht-colors__swatches">
                {[
                  { hex: "#FDFDFD", label: "#FDFDFD", border: true },
                  { hex: "#070101", label: "#070101" },
                  { hex: "#F89508", label: "#F89508" },
                  { hex: "#FEE08E", label: "#FEE08E" },
                ].map(({ hex, label, border }) => (
                  <div key={hex} className="ht-colors__swatch-wrap">
                    <div
                      className="ht-colors__blob"
                      style={{
                        background: hex,
                        boxShadow: border ? "inset 0 0 0 1.5px #e5e7eb" : "none",
                      }}
                    />
                    <p className="ht-colors__hex">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Wireframes ── */}
        <section className="ht-wireframes">
          <div className="ht-wireframes__inner">
            <h2 className="ht-wireframes__heading">Wireframes</h2>
            <div className="ht-wireframes__visual">
              <img src={wireframesImg} alt="Hightable wireframe screens" />
            </div>
          </div>
        </section>

        {/* ── Design Screens ── */}
        <section className="ht-screens">
          <div className="ht-screens__inner">

            {/* 1 — Homepage: image left, text right */}
            <div className="ht-screens__row">
              <div className="ht-screens__img-wrap ht-screens__img-wrap--watermark">
                <img src={hightableLogo} alt="" className="ht-screens__watermark" aria-hidden="true" />
                <img src={mockup11} alt="Hightable homepage screen" className="ht-screens__mockup" />
              </div>
              <div className="ht-screens__copy">
                <h3 className="ht-screens__title">HOMEPAGE</h3>
                <p className="ht-screens__text">
                  The page of this hightable app consist of features like the discover, Restaurants,
                  Events, Hotel, and People. This features provides users the ability to get firsthand
                  to what they intend to do immediately they get to the homepage. All other features are
                  the review section, calendar wallet and notifications. Also to add you can add an event
                  on the homepage by simply making use of the event form section. You can also access the
                  cart section, search for restaurants, events, people and also the profile section.
                </p>
              </div>
            </div>

            {/* 2 — Restaurant: text left, image right */}
            <div className="ht-screens__row">
              <div className="ht-screens__copy">
                <h3 className="ht-screens__title">RESTAURANT SECTION</h3>
                <p className="ht-screens__text">
                  This page affords users the first hand experience of the details of their chosen
                  restaurant. With the features of been able to see the ratings of the restaurant, to
                  make reservations, check location, get to see the menu they have, Images, events
                  happening there, reviews and frequently asked questions among other exciting features.
                </p>
              </div>
              <div className="ht-screens__img-wrap ht-screens__img-wrap--watermark ht-screens__img-wrap--right">
                <img src={hightableLogo} alt="" className="ht-screens__watermark" aria-hidden="true" />
                <img src={mockup12} alt="Hightable restaurant section screen" className="ht-screens__mockup" />
              </div>
            </div>

            {/* 3 — Wallet: image left, text right */}
            <div className="ht-screens__row">
              <div className="ht-screens__img-wrap ht-screens__img-wrap--watermark">
                <img src={hightableLogo} alt="" className="ht-screens__watermark" aria-hidden="true" />
                <img src={mockup13} alt="Hightable wallet section screen" className="ht-screens__mockup" />
              </div>
              <div className="ht-screens__copy">
                <h3 className="ht-screens__title">WALLET SECTION</h3>
                <p className="ht-screens__text">
                  The wallet section embedded in this app will help users to be able to conveniently pay
                  for their orders from the restaurant. They can fund their wallet, make transfer from the
                  wallet and also add their debit cards to the wallet. They are also able to see other
                  transaction they make from the transaction history features.
                </p>
              </div>
            </div>

            {/* 4 — Cart: text left, image right */}
            <div className="ht-screens__row">
              <div className="ht-screens__copy">
                <h3 className="ht-screens__title">CART &amp; SUMMARY SECTION</h3>
                <p className="ht-screens__text">
                  This section helps users to be able to see the summary of their orders, provide them
                  the opportunity of removing from the card, been able to see the cart summary and the
                  total sum of money to be paid before proceeding to make payments and then checkout.
                </p>
              </div>
              <div className="ht-screens__img-wrap">
                <img src={mockup14} alt="Hightable cart and summary section screen" className="ht-screens__mockup" />
              </div>
            </div>

          </div>
        </section>

        {/* ── High Fidelity Mockups ── */}
        <section className="ht-hifi">
          <div className="ht-hifi__inner">
            <div className="ht-hifi__header">
              <img src={hightableLogo} alt="Hightable" className="ht-persona__logo" />
              <h2 className="ht-hifi__heading">High Fidelity Mockups</h2>
            </div>
            <div className="ht-hifi__visual">
              <img src={mockup15} alt="Hightable high fidelity mockup screens" />
            </div>
          </div>
        </section>

        {/* ── Thank You / Footer ── */}
        <section className="ht-thanks">
          <div className="ht-thanks__inner">

            {/* Inline SVG illustration */}
            <div className="ht-thanks__illustration" aria-hidden="true">
              <svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" className="ht-thanks__svg">

                {/* ── Plant (left) ── */}
                <line x1="52" y1="195" x2="52" y2="148" stroke="#8b7355" strokeWidth="3" strokeLinecap="round" />
                <ellipse cx="38" cy="145" rx="16" ry="9" fill="#c8a84b" transform="rotate(-30 38 145)" />
                <ellipse cx="66" cy="138" rx="16" ry="9" fill="#d4a017" transform="rotate(25 66 138)" />
                <ellipse cx="44" cy="128" rx="14" ry="8" fill="#c8a84b" transform="rotate(-15 44 128)" />
                <ellipse cx="60" cy="120" rx="13" ry="7" fill="#d4a017" transform="rotate(20 60 120)" />
                <ellipse cx="50" cy="112" rx="10" ry="6" fill="#c8a84b" transform="rotate(-10 50 112)" />

                {/* ── Globe (center) ── */}
                {/* Soft shadow blob */}
                <ellipse cx="152" cy="185" rx="54" ry="10" fill="#e5c97a" opacity="0.35" />
                {/* Main circle */}
                <circle cx="152" cy="112" r="68" fill="#F89508" />
                <circle cx="152" cy="112" r="68" stroke="#92670a" strokeWidth="2.5" fill="none" />
                {/* Grid lines */}
                <ellipse cx="152" cy="112" rx="68" ry="30" stroke="#fde087" strokeWidth="1.2" fill="none" opacity="0.6" />
                <ellipse cx="152" cy="112" rx="42" ry="68" stroke="#fde087" strokeWidth="1.2" fill="none" opacity="0.6" />
                <line x1="152" y1="44" x2="152" y2="180" stroke="#fde087" strokeWidth="1.2" opacity="0.6" />
                <line x1="84" y1="112" x2="220" y2="112" stroke="#fde087" strokeWidth="1.2" opacity="0.6" />
                {/* Inner white circle for thumbs up */}
                <circle cx="152" cy="112" r="36" fill="#ffffff" opacity="0.92" />
                {/* Thumbs up */}
                <path d="M138 122 L138 108 C138 106 140 104 142 104 L146 104 L148 94 C148.5 91 151 90 153 91.5 C155 93 155 96 154 99 L152 104 L162 104 C164 104 166 106 166 108 C166 110 164.5 111.5 163 112 C164 113 164.5 115 163.5 116.5 C164 117.5 164 119.5 162.5 120.5 C162.5 122.5 161 124 159 124 L142 124 C140 124 138 123 138 122 Z" fill="#F89508" />
                <rect x="130" y="112" width="10" height="14" rx="2" fill="#F89508" />
                {/* Cord */}
                <path d="M152 180 C152 190 142 193 134 195" stroke="#92670a" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                {/* ── Person (right) ── */}
                {/* Head */}
                <circle cx="242" cy="88" r="14" fill="#f2c9a0" />
                {/* Hair */}
                <path d="M229 86 C229 77 255 77 255 86" fill="#1a1a1a" />
                {/* Body */}
                <rect x="230" y="103" width="22" height="34" rx="4" fill="#1a1a1a" />
                {/* Arm reaching toward globe */}
                <path d="M230 114 L202 118" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
                {/* Legs */}
                <rect x="230" y="135" width="10" height="28" rx="3" fill="#374151" />
                <rect x="242" y="135" width="10" height="28" rx="3" fill="#374151" />
                {/* Shoes */}
                <ellipse cx="235" cy="163" rx="9" ry="4" fill="#111827" />
                <ellipse cx="247" cy="163" rx="9" ry="4" fill="#111827" />
              </svg>
            </div>

            <h2 className="ht-thanks__heading">Thank you for your time</h2>
            <p className="ht-thanks__message">
              Feel free to provide your valuable suggestion and comments
              <FaCommentDots className="ht-thanks__icon" aria-hidden="true" />
            </p>

          </div>
        </section>

      </main>
    </div>
  );
}
