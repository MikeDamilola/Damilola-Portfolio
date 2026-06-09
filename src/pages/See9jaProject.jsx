import { FaCommentDots, FaUser, FaUsers } from "react-icons/fa6";
import ProjectHeader from "../components/ProjectHeader";
import see9jaVisual from "../assets/See9ja.png";
import walletMockup from "../assets/Mockup1.png";
import productGoalsMockup from "../assets/Mockup 2.png";
import userflowMockup from "../assets/Mockup 3.png";
import onboardingMockup from "../assets/Mockup 4.png";
import designOverviewMockup from "../assets/Mockup 5.jpg";
import adaPhoto from "../assets/Farhah.jpg";
import ibrahimPhoto from "../assets/Felix.jpg";
import "./See9jaProject.css";

const designProcessSteps = [
  {
    id: "empathize",
    title: "Empathize",
    text: "I conducted interviews and surveys with local and international tourists to understand their challenges, needs, and expectations when exploring Nigeria. This helped me gain valuable insights into pain points like locating attractions and making secure payments.",
  },
  {
    id: "define",
    title: "Define",
    text: "I synthesized the research findings to identify key user problems, such as difficulty accessing tourist centers and managing cash transactions, and outlined clear design goals for the app.",
  },
  {
    id: "ideate",
    title: "Ideate",
    text: "I brainstormed solutions, including features like an interactive map, wallet integration, and a QR code scanner, to address user challenges and enhance the travel experience.",
  },
  {
    id: "competitive",
    title: "Competitive Analysis",
    text: "I analyzed similar tourism and travel apps to identify gaps and best practices, ensuring See9ja offers unique, user-centered features that stand out.",
  },
  {
    id: "ux",
    title: "UX Design",
    text: "I created user flows, wireframes, and low-fidelity prototypes to map the app's structure and navigation, focusing on simplicity and ease of use.",
  },
  {
    id: "ui",
    title: "UI Design & Prototyping",
    text: "I developed high-fidelity designs with visually appealing elements, consistent branding, and interactive prototypes to test and refine the app's functionality and aesthetics.",
  },
];

const researchGroups = [
  {
    id: "local",
    icon: FaUser,
    title: "Local Tourists",
    text: "They help in providing insights into popular destinations, common challenges, and expectations when traveling within Nigeria. Their feedback helps refine features like navigation and ticket purchasing.",
  },
  {
    id: "international",
    icon: FaUser,
    title: "International Tourists",
    text: "Their input highlights barriers such as language, cultural differences, and unfamiliarity with the country, aiding in creating a user-friendly and inclusive app.",
  },
  {
    id: "operators",
    icon: FaUsers,
    title: "Tour Operators and Guides",
    text: "They provide insights into popular destinations, common challenges, and expectations when traveling within Nigeria. Their feedback helps refine features like navigation and ticket purchasing.",
  },
  {
    id: "experts",
    icon: FaUser,
    title: "Tourism Industry Experts",
    text: "Their inputs helped in identifying trends, gaps in the market, and compliance requirements, guiding strategic decisions for app features and scalability.",
  },
];

const productGoals = [
  {
    id: "map",
    title: "Interactive Map",
    text: "They help in providing insights into popular destinations, common challenges, and expectations when traveling within Nigeria. Their feedback helps refine features like navigation and ticket purchasing.",
  },
  {
    id: "ticketing",
    title: "Ticketing and Payments",
    text: "With its wallet feature and QR code scanner, See9ja streamlines the payment process, enabling cashless transactions and quick ticket validation. This fosters convenience, reduces waiting times, and enhances user trust in the platform.",
  },
  {
    id: "interface",
    title: "User-Friendly Interface",
    text: "By offering a user-friendly interface and accessibility features, the app caters to a diverse audience, including international tourists and individuals with disabilities, ensuring inclusivity and ease of use for all.",
  },
];

const userPersonas = [
  {
    id: "ada",
    name: "Ada Johnson",
    photo: adaPhoto,
    age: "29",
    occupation: "Software Engineer",
    location: "Lagos, Nigeria",
    introduction:
      "Ada is an adventurous professional who loves exploring new destinations during her weekends and holidays. As a busy individual, she values convenience and efficient planning when traveling to new places. She often travels solo or with friends and prefers discovering both popular and hidden attractions.",
    goals: [
      "Discover tourist centers across Nigeria with detailed information and reviews.",
      "Simplify her trip planning by finding directions and booking tickets easily.",
    ],
    frustrations: [
      "Difficulty finding accurate and up-to-date information on tourist attractions.",
      "Long queues and tedious processes for buying tickets at tourist sites.",
    ],
  },
  {
    id: "ibrahim",
    name: "Ibrahim Musa",
    photo: ibrahimPhoto,
    age: "35",
    occupation: "Certified Tour Guide",
    location: "Abuja, Nigeria",
    introduction:
      "Ibrahim is a seasoned tour guide who organizes trips for tourists visiting Abuja and surrounding areas. He works with local businesses and enjoys sharing cultural and historical insights with visitors. However, he struggles to manage bookings efficiently and reach more potential clients.",
    goals: [
      "Provide a professional and seamless experience for tourists to boost his ratings and recommendations.",
      "Provide a professional and seamless experience for tourists to boost his ratings and recommendations.",
    ],
    frustrations: [
      "Limited access to a wide audience of tourists, especially international visitors.",
      "Inconsistent communication with clients due to a lack of a proper platform.",
    ],
  },
];

const designSystemColors = [
  { id: "vivid-green", name: "Vivid Green", label: "Primary Colour", hex: "#008B2C" },
  { id: "granny-apple", name: "Granny Apple", label: "Secondary Colour", hex: "#BFE2CB" },
  { id: "dark-green", name: "Dark Green", label: "Accent Colour", hex: "#44AD16" },
  { id: "white", name: "White", label: "Background Colour", hex: "#ffffff" },
  { id: "dark-grey", name: "Dark Grey", label: "Text Colour", hex: "#262626" },
];

const typographyScale = [
  { id: "h2", label: "H2", size: "48px", weight: 700 },
  { id: "h1", label: "H1", size: "40px", weight: 700 },
  { id: "h3", label: "H3", size: "32px", weight: 600 },
  { id: "h4", label: "H4", size: "28px", weight: 600 },
  { id: "h5", label: "H5", size: "24px", weight: 600 },
  { id: "h6", label: "H6", size: "20px", weight: 600 },
  { id: "p", label: "P", size: "16px", weight: 400 },
  { id: "sp", label: "SP", size: "14px", weight: 400 },
  { id: "xsmall", label: "X-Small", size: "12px", weight: 400 },
];

export default function See9jaProject() {
  return (
    <div className="see9ja-page">
      <ProjectHeader />

      <main className="see9ja-content">
        <section className="see9ja-hero">
          <div className="see9ja-hero__info">
            <div className="see9ja-hero__info-inner">
              <div className="see9ja-hero__meta">
                <span>2021</span>
                <span>Mobile, Website</span>
              </div>

              <h1 className="see9ja-hero__title">
                &ldquo;Discover Nigeria Effortlessly: Your Ultimate Solution to Seamless Tourism Adventures!&rdquo;
              </h1>

              <div className="see9ja-hero__details">
                <div>
                  <p className="see9ja-hero__detail-label">Role</p>
                  <ul className="see9ja-hero__detail-list">
                    <li>UX Researcher</li>
                    <li>Product Designer</li>
                  </ul>
                </div>

                <div>
                  <p className="see9ja-hero__detail-label">Industry</p>
                  <ul className="see9ja-hero__detail-list">
                    <li>Hospitality &amp; Tourism</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="see9ja-hero__visual">
            <img src={see9jaVisual} alt="See9ja app showcase with mobile mockups" />
          </div>
        </section>

        <section className="see9ja-about">
          <div className="see9ja-about__inner">
            <h2 className="see9ja-about__heading">About See9ja</h2>

            <div className="see9ja-about__text">
              <p>
                See9ja is a cutting-edge tourism app designed to transform the way tourists within
                and outside Nigeria experience the country. This innovative platform addresses common
                challenges faced by travelers, offering a seamless and convenient way to explore
                Nigeria&apos;s rich cultural heritage, breathtaking landscapes, and vibrant attractions.
              </p>
              <p>
                With See9ja, tourists can effortlessly locate top-rated tourist centers, hidden gems,
                and popular landmarks across Nigeria. The app provides detailed information about each
                destination, including reviews, operating hours, directions, and nearby services,
                ensuring that users have everything they need to plan their perfect itinerary.
              </p>
            </div>
          </div>
        </section>

        <section className="see9ja-wallet">
          <img
            src={walletMockup}
            alt="See9ja wallet app screen mockup"
            className="see9ja-wallet__mockup"
          />
        </section>

        <section className="see9ja-why">
          <div className="see9ja-why__inner">
            <h2 className="see9ja-why__heading">Why See9ja</h2>

            <div className="see9ja-why__text">
              <img
                src={see9jaVisual}
                alt=""
                aria-hidden="true"
                className="see9ja-why__watermark"
              />
              <p>
                As we all know that both foreign and indigent tourists needs an available info on
                their tours in any country of visit. This is why tourists should use See9ja for its
                seamless features that make exploring Nigeria stress-free and enjoyable. The app helps
                users easily locate top tourist attractions with detailed guides and reviews. Its wallet
                feature ensures secure and cashless payments, while the QR code scanner simplifies
                ticket purchases and validations. With real-time updates, personalized recommendations,
                and a user-friendly interface, See9ja is the ultimate travel companion for discovering
                Nigeria&apos;s beauty effortlessly.
              </p>
            </div>
          </div>
        </section>

        <section className="see9ja-process">
          <div className="see9ja-process__inner">
            <h2 className="see9ja-process__heading">My Design Process</h2>

            <div className="see9ja-process__diagram">
              <svg
                className="see9ja-process__lines"
                viewBox="0 0 1100 720"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <marker
                    id="see9ja-arrow"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0,0 L8,4 L0,8 Z" fill="#c9a882" />
                  </marker>
                </defs>
                <path
                  d="M520 120 L720 120 L720 200"
                  fill="none"
                  stroke="#c9a882"
                  strokeWidth="2"
                  markerEnd="url(#see9ja-arrow)"
                />
                <path
                  d="M820 260 L960 260 L960 340"
                  fill="none"
                  stroke="#c9a882"
                  strokeWidth="2"
                  markerEnd="url(#see9ja-arrow)"
                />
                <path
                  d="M900 420 L900 500 L700 500"
                  fill="none"
                  stroke="#c9a882"
                  strokeWidth="2"
                  markerEnd="url(#see9ja-arrow)"
                />
                <path
                  d="M620 500 L620 580 L480 580"
                  fill="none"
                  stroke="#c9a882"
                  strokeWidth="2"
                  markerEnd="url(#see9ja-arrow)"
                />
                <path
                  d="M320 580 L180 580 L180 360"
                  fill="none"
                  stroke="#c9a882"
                  strokeWidth="2"
                  markerEnd="url(#see9ja-arrow)"
                />
              </svg>

              <div className="see9ja-process__cards">
                {designProcessSteps.map((step) => (
                  <article
                    key={step.id}
                    className={`see9ja-process__card see9ja-process__card--${step.id}`}
                  >
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="see9ja-research">
          <div className="see9ja-research__inner">
            <div className="see9ja-research__header">
              <h2 className="see9ja-research__heading">Research</h2>

              <p className="see9ja-research__intro">
                I conducted my research by conducting an interview going through both quantitative
                and qualitative analysis. Talking of some people that are applicable to this kind of
                application which we have the users. Also creating this application we have other
                people to work in this field to make this project a success so I interviewed the
                following people.
              </p>
            </div>

            <div className="see9ja-research__groups">
              <img
                src={see9jaVisual}
                alt=""
                aria-hidden="true"
                className="see9ja-research__watermark"
              />

              {researchGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.id} className={`see9ja-research__group see9ja-research__group--${group.id}`}>
                    <Icon className="see9ja-research__icon" aria-hidden="true" />
                    <h3>{group.title}</h3>
                    <p>{group.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="see9ja-goals">
          <div className="see9ja-goals__pattern" aria-hidden="true" />

          <div className="see9ja-goals__inner">
            <div className="see9ja-goals__content">
              <h2 className="see9ja-goals__heading">Product Goals</h2>

              <p className="see9ja-goals__intro">
                See9ja is designed to revolutionize tourism in Nigeria by addressing critical
                challenges and enhancing the travel experience for both local and international
                tourists. The app leverages innovative features to simplify travel planning, ensure
                secure financial transactions, and provide seamless access to tourist attractions.
                The following product goals outline how these features play a pivotal role in
                achieving the vision of See9ja.
              </p>

              <div className="see9ja-goals__list">
                {productGoals.map((goal) => (
                  <article key={goal.id} className="see9ja-goals__item">
                    <h3>{goal.title}</h3>
                    <p>{goal.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="see9ja-goals__mockups">
              <img
                src={productGoalsMockup}
                alt="See9ja app mockups showing splash screen, destination map, and wallet"
                className="see9ja-goals__mockup-img"
              />
            </div>
          </div>
        </section>

        <section className="see9ja-userflow">
          <div className="see9ja-userflow__inner">
            <h2 className="see9ja-userflow__heading">Userflow</h2>

            <img
              src={userflowMockup}
              alt="See9ja app userflow diagram showing navigation from app launch through login to profile, reviews, wallet, and tourist center search"
              className="see9ja-userflow__diagram-img"
            />
          </div>
        </section>

        <section className="see9ja-personas">
          <div className="see9ja-personas__pattern" aria-hidden="true" />

          <div className="see9ja-personas__inner">
            <h2 className="see9ja-personas__heading">User Persona</h2>

            <div className="see9ja-personas__grid">
              {userPersonas.map((persona) => (
                <article key={persona.id} className="see9ja-personas__card">
                  <div className="see9ja-personas__card-header">
                    <img
                      src={persona.photo}
                      alt={persona.name}
                      className="see9ja-personas__photo"
                    />
                    <h3 className="see9ja-personas__name">{persona.name}</h3>
                  </div>

                  <div className="see9ja-personas__meta">
                    <p>
                      <span>Age:</span> {persona.age}
                    </p>
                    <p>
                      <span>Occupation:</span> {persona.occupation}
                    </p>
                    <p>
                      <span>Location:</span> {persona.location}
                    </p>
                  </div>

                  <div className="see9ja-personas__section">
                    <h4>Introduction:</h4>
                    <p>{persona.introduction}</p>
                  </div>

                  <div className="see9ja-personas__section">
                    <h4>Goals:</h4>
                    <ul>
                      {persona.goals.map((goal, index) => (
                        <li key={`${persona.id}-goal-${index}`}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="see9ja-personas__section">
                    <h4>Frustrations:</h4>
                    <ul>
                      {persona.frustrations.map((item, index) => (
                        <li key={`${persona.id}-frustration-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="see9ja-design-system">
          <img
            src={see9jaVisual}
            alt=""
            aria-hidden="true"
            className="see9ja-design-system__watermark see9ja-design-system__watermark--left"
          />
          <img
            src={see9jaVisual}
            alt=""
            aria-hidden="true"
            className="see9ja-design-system__watermark see9ja-design-system__watermark--right"
          />

          <div className="see9ja-design-system__inner">
            <h2 className="see9ja-design-system__heading">Design System</h2>

            <div className="see9ja-design-system__colors">
              <h3 className="see9ja-design-system__subheading">Color Styles</h3>

              <div className="see9ja-design-system__swatches">
                {designSystemColors.map((color) => (
                  <article key={color.id} className="see9ja-design-system__swatch">
                    <div
                      className="see9ja-design-system__swatch-color"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="see9ja-design-system__swatch-info">
                      <div className="see9ja-design-system__swatch-top">
                        <p className="see9ja-design-system__swatch-name">{color.name}</p>
                        <p className="see9ja-design-system__swatch-hex">{color.hex}</p>
                      </div>
                      <p className="see9ja-design-system__swatch-label">{color.label}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="see9ja-design-system__bottom">
              <div className="see9ja-design-system__typography">
                <h3 className="see9ja-design-system__subheading">Typography</h3>
                <p className="see9ja-design-system__font-family">Sans Serif</p>

                <div className="see9ja-design-system__type-scale">
                  {typographyScale.map((item) => (
                    <p
                      key={item.id}
                      className="see9ja-design-system__type-item"
                      style={{
                        fontSize: item.size,
                        fontWeight: item.weight,
                      }}
                    >
                      {item.label}
                    </p>
                  ))}
                </div>
              </div>

              <div className="see9ja-design-system__buttons">
                <h3 className="see9ja-design-system__subheading">Buttons</h3>

                <div className="see9ja-design-system__button-list">
                  <button type="button" className="see9ja-design-system__btn see9ja-design-system__btn--outline">
                    Pay With Wallet
                  </button>
                  <button type="button" className="see9ja-design-system__btn see9ja-design-system__btn--light">
                    Pay With Wallet
                  </button>
                  <button type="button" className="see9ja-design-system__btn see9ja-design-system__btn--solid">
                    Scan QR Code To Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="see9ja-experience">
          <div className="see9ja-experience__pattern see9ja-experience__pattern--top" aria-hidden="true" />
          <div className="see9ja-experience__pattern see9ja-experience__pattern--middle" aria-hidden="true" />
          <div className="see9ja-experience__pattern see9ja-experience__pattern--bottom" aria-hidden="true" />

          <div className="see9ja-experience__inner">
            <div className="see9ja-experience__header">
              <div className="see9ja-experience__titles">
                <h2 className="see9ja-experience__heading">The See9ja Experience</h2>
                <p className="see9ja-experience__subtitle">Splashscreen/Onboarding</p>
              </div>

              <p className="see9ja-experience__intro">
                The onboarding screen makes the users know what your app is all about and how to
                use its key features. This, in turn, improves user retention rates as they fully
                understand how your digital product helps solve their pain point, so they have a go
                reason to return to your app.
              </p>
            </div>

            <img
              src={onboardingMockup}
              alt="See9ja splash screen and onboarding flow showing explore, discover, maps, and connect screens"
              className="see9ja-experience__mockup"
            />
          </div>
        </section>

        <section className="see9ja-overview">
          <div className="see9ja-overview__inner">
            <h2 className="see9ja-overview__heading">Design Overview</h2>

            <img
              src={designOverviewMockup}
              alt="See9ja app design overview showing splash, onboarding, authentication, home, wallet, profile, favorites, booking, and payment screens"
              className="see9ja-overview__mockup"
            />
          </div>
        </section>

        <section className="see9ja-thanks">
          <div className="see9ja-thanks__pattern see9ja-thanks__pattern--left" aria-hidden="true" />
          <div className="see9ja-thanks__pattern see9ja-thanks__pattern--right" aria-hidden="true" />

          <div className="see9ja-thanks__inner">
            <div className="see9ja-thanks__illustration" aria-hidden="true">
              <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="72" cy="188" rx="28" ry="6" fill="#1a1a1a" opacity="0.15" />
                <rect x="118" y="118" width="18" height="52" rx="4" fill="#1a1a1a" />
                <rect x="108" y="96" width="38" height="28" rx="6" fill="#1a1a1a" />
                <rect x="96" y="168" width="18" height="24" rx="4" fill="#1b4d30" />
                <rect x="130" y="168" width="18" height="24" rx="4" fill="#1b4d30" />
                <circle cx="127" cy="88" r="14" fill="#f2c9a0" />
                <circle cx="127" cy="88" r="14" fill="#1a1a1a" opacity="0.08" />
                <path d="M152 126 L188 112 L188 132 L152 146 Z" fill="#1a1a1a" />
                <rect x="184" y="108" width="10" height="30" rx="3" fill="#1a1a1a" />
                <path d="M194 123 C210 123 220 130 220 140" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
                <rect x="52" y="118" width="10" height="58" rx="3" fill="#1b4d30" />
                <ellipse cx="57" cy="112" rx="16" ry="10" fill="#44ad16" />
                <path d="M48 104 C52 92 62 88 72 92" stroke="#1b4d30" strokeWidth="3" strokeLinecap="round" />
                <circle cx="236" cy="92" r="54" fill="#1b4d30" stroke="#1a1a1a" strokeWidth="3" />
                <circle cx="236" cy="92" r="44" fill="#ffffff" />
                <path
                  d="M214 104 C214 88 228 78 244 84 C256 88 262 100 258 112 C254 124 242 130 230 124 L220 138 L224 112 C216 112 214 108 214 104 Z"
                  fill="#1b4d30"
                />
              </svg>
            </div>

            <h2 className="see9ja-thanks__heading">Thank you for your time</h2>

            <p className="see9ja-thanks__message">
              Feel free to provide your valuable suggestion and comments
              <FaCommentDots className="see9ja-thanks__icon" aria-hidden="true" />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
