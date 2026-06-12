import { FaCommentDots } from "react-icons/fa6";
import ProjectHeader from "../components/ProjectHeader";
import farmilyVisual from "../assets/Mockup 6.jpg";
import designProcessImg from "../assets/Mockup 7.png";
import amakaPhoto from "../assets/Farhah.jpg";
import adekunlePhoto from "../assets/Olajide.jpg";
import heroSectionImg from "../assets/Hero Section.png";
import productListingImg from "../assets/Product Listing.png";
import recipeMealKitImg from "../assets/Recipe Meal Kit Listings.png";
import productDetailsImg from "../assets/Product Details.png";
import cartCheckoutImg from "../assets/Cart & Checkout.png";
import orderConfirmationImg from "../assets/Order Confirmation.png";
import "./FarmilyProject.css";

export default function FarmilyProject() {
  return (
    <div className="farmily-page">
      <ProjectHeader />

      <main className="farmily-content">
        <section className="farmily-hero">
          <div className="farmily-hero__info">
            <div className="farmily-hero__info-inner">
              <div className="farmily-hero__meta">
                <span>2023</span>
                <span>Website</span>
              </div>

              <h1 className="farmily-hero__title">
                &ldquo;Farmily: Revolutionizing Online Grocery Shopping and Fresh Farm Produce Delivery in Africa&rdquo;
              </h1>

              <div className="farmily-hero__details">
                <div>
                  <p className="farmily-hero__detail-label">Role</p>
                  <ul className="farmily-hero__detail-list">
                    <li>UX Researcher</li>
                    <li>Product Designer</li>
                  </ul>
                </div>

                <div>
                  <p className="farmily-hero__detail-label">Industry</p>
                  <ul className="farmily-hero__detail-list">
                    <li>E-commerce</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="farmily-hero__visual">
            <div className="farmily-hero__visual-inner">
              <img src={farmilyVisual} alt="Farmily website showcase with desktop and tablet mockups" />
            </div>
          </div>
        </section>

        <section className="farmily-scope-role">
          <div className="farmily-scope-role__inner">
            <div className="farmily-scope-role__row">
              <h2 className="farmily-scope-role__heading">Project Scope</h2>
              <p className="farmily-scope-role__text">
                Farmily project scope involves creating a user-friendly e-commerce marketplace boasts an intuitive and
                user-friendly interface, making it easy for consumers to browse, select, and purchase farm-fresh produce.
                With streamlined navigation and search functionality, users can quickly find the products they desire and
                add them to their virtual shopping carts. Key features include responsive design, secure payments, and
                comprehensive product listings, along with customer reviews and a personalized shopping experience.
                Timelines and deliverables will be clearly defined for a smooth rollout.
              </p>
            </div>

            <div className="farmily-scope-role__divider" />

            <div className="farmily-scope-role__row">
              <h2 className="farmily-scope-role__heading">My Role</h2>
              <p className="farmily-scope-role__text">
                At farmily, I manage products, ensure customer satisfaction, and drive marketing strategies. I work with
                teams to improve user experience and operations while monitoring market trends to stay competitive.
              </p>
            </div>
          </div>
        </section>
        <section className="farmily-problem">
          <div className="farmily-problem__inner">
            <h2 className="farmily-problem__heading">Problem<br />Statement</h2>
            <p className="farmily-problem__text">
              AT Farmily, we understand the challenges of finding the perfect fresh farm produce and groceries that
              meet your needs. Whether its navigating through a vast selection or ensuring quality and affordability,
              we aim to simplify your shopping experience. Out platform is designed to connect you with the best
              options available, making your journey seamless, satisfactory, user-friendly and enjoyable.
            </p>
          </div>
        </section>

        <section className="farmily-design-process">
          <div className="farmily-design-process__inner">
            <h2 className="farmily-design-process__heading">Design Process</h2>

            <div className="farmily-design-process__diagram">
              <img
                src={designProcessImg}
                alt="Farmily design process: Empathize, Define, Ideate, Prototype, Test"
                className="farmily-design-process__img"
              />
            </div>
          </div>
        </section>

        <section className="farmily-research">
          <div className="farmily-research__inner">
            <div className="farmily-research__top">
              <h2 className="farmily-research__heading">User<br />Research</h2>
              <p className="farmily-research__intro">
                At our Farmily, we prioritize understanding our customers&apos; needs and preferences. We conduct surveys
                and interviews to gather insights on what styles, size, and features are most important to you. Our goal
                is to create a shopping experience that feels personalized and enjoyable. Whether you&apos;ve looking for the
                latest trends or comfortable everyday wear, we want to ensure you find the perfect pair of shoes that fits
                your lifestyle.
              </p>
            </div>

            <div className="farmily-research__bottom">
              <div className="farmily-research__col">
                <h3 className="farmily-research__col-heading">Pain point</h3>
                <ul className="farmily-research__list">
                  <li>Difficulty finding fresh, high-quality groceries, especially in urban areas.</li>
                  <li>Busy schedules prevent users from visiting physical markets or stores.</li>
                  <li>Long delivery times or unreliable delivery networks for groceries.</li>
                  <li>Difficulty trusting the source and quality of fresh produce.</li>
                </ul>
              </div>

              <div className="farmily-research__divider" aria-hidden="true" />

              <div className="farmily-research__col">
                <h3 className="farmily-research__col-heading">Goals</h3>
                <ul className="farmily-research__list">
                  <li>Effortlessly browse, purchase, and receive fresh groceries and ready-to-cook recipes.</li>
                  <li>Access farm-fresh, high-quality produce with clear sourcing information.</li>
                  <li>Timely and reliable delivery services tailored to their location.</li>
                  <li>Access to affordable, pre-curated ready-to-cook recipes for healthy meal preparation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="farmily-persona">
          <div className="farmily-persona__inner">
            <h2 className="farmily-persona__heading">Persona</h2>

            {/* Persona 1 — Amaka Okafor */}
            <article className="farmily-persona__card">
              <div className="farmily-persona__card-header">
                <img src={amakaPhoto} alt="Amaka Okafor" className="farmily-persona__photo" />
                <div className="farmily-persona__card-meta">
                  <div className="farmily-persona__meta-col">
                    <p><span>Name:</span> Amaka Okafor</p>
                    <p><span>Age:</span> 32</p>
                  </div>
                  <div className="farmily-persona__meta-col">
                    <p><span>Occupation:</span> Marketing Executive</p>
                    <p><span>Location:</span> Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="farmily-persona__card-body">
                <div className="farmily-persona__section">
                  <h3>About</h3>
                  <p>Amaka works long hours and has little time for grocery shopping. She values convenience and prefers online platforms that simplify her weekly grocery shopping. Amaka prioritizes fresh produce and is health-conscious, often looking for quick, ready-to-cook meal options.</p>
                </div>

                <div className="farmily-persona__section">
                  <h3>Goals</h3>
                  <ol className="farmily-persona__list farmily-persona__list--ordered">
                    <li>Save time by shopping online instead of visiting local markets.</li>
                    <li>Ensure the groceries she purchases are fresh and high-quality.</li>
                    <li>Explore recipe options to diversify her meals.</li>
                  </ol>
                </div>

                <div className="farmily-persona__section">
                  <h3>Pain Points</h3>
                  <ol className="farmily-persona__list farmily-persona__list--ordered">
                    <li>Difficulty finding reliable e-commerce platforms with fresh produce.</li>
                    <li>Frustration with late or incomplete deliveries.</li>
                    <li>Overwhelmed by complex interfaces of existing e-commerce apps.</li>
                  </ol>
                </div>
              </div>
            </article>

            {/* Persona 2 — Adekunle Adebayo */}
            <article className="farmily-persona__card">
              <div className="farmily-persona__card-header">
                <img src={adekunlePhoto} alt="Adekunle Adebayo" className="farmily-persona__photo" />
                <div className="farmily-persona__card-meta">
                  <div className="farmily-persona__meta-col">
                    <p><span>Name:</span> Adekunle Adebayo</p>
                    <p><span>Age:</span> 42</p>
                  </div>
                  <div className="farmily-persona__meta-col">
                    <p><span>Occupation:</span> Owner of a Local Restaurant</p>
                    <p><span>Location:</span> Ibadan, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="farmily-persona__card-body">
                <div className="farmily-persona__section">
                  <h3>About</h3>
                  <p>Adekunle runs a small restaurant and requires a consistent supply of fresh farm produce to maintain his business standards. He wants a reliable source for bulk purchases with transparent pricing and timely delivery.</p>
                </div>

                <div className="farmily-persona__section">
                  <h3>Goals</h3>
                  <ul className="farmily-persona__list farmily-persona__list--bulleted">
                    <li>Source fresh produce in bulk at competitive prices.</li>
                    <li>Simplify inventory management through pre-scheduled deliveries.</li>
                    <li>Avoid disruptions caused by unreliable suppliers.</li>
                  </ul>
                </div>

                <div className="farmily-persona__section">
                  <h3>Pain Points</h3>
                  <ol className="farmily-persona__list farmily-persona__list--ordered">
                    <li>Unpredictable delivery timelines affect his business operations.</li>
                    <li>Struggles to maintain produce quality during peak business periods.</li>
                    <li>Lack of an organized platform for bulk purchases and payment tracking.</li>
                  </ol>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="farmily-typography">
          <div className="farmily-typography__inner">
            <h2 className="farmily-typography__heading">Topography</h2>

            <div className="farmily-typography__font">
              <p className="farmily-typography__font-name">Nexa</p>
              <div className="farmily-typography__weights">
                <span className="farmily-typography__weight--bold">Bold</span>
                <span className="farmily-typography__dot" aria-hidden="true" />
                <span className="farmily-typography__weight--regular">Regular</span>
                <span className="farmily-typography__dot" aria-hidden="true" />
                <span className="farmily-typography__weight--light">Light</span>
              </div>
            </div>

            <div className="farmily-typography__swatches">
              <div className="farmily-typography__swatch" style={{ backgroundColor: "#F5A623" }} />
              <div className="farmily-typography__swatch" style={{ backgroundColor: "#212121" }} />
              <div className="farmily-typography__swatch" style={{ backgroundColor: "#00C853" }} />
              <div className="farmily-typography__swatch farmily-typography__swatch--mint" style={{ backgroundColor: "#A8D5B5" }} />
              <div className="farmily-typography__swatch farmily-typography__swatch--white" style={{ backgroundColor: "#FFFFFF" }} />
            </div>
          </div>
        </section>
        <section className="farmily-userflow">
          <div className="farmily-userflow__inner">
            <h2 className="farmily-userflow__heading">Userflow</h2>

            <div className="farmily-userflow__diagram">
              <svg
                viewBox="0 0 560 1380"
                className="farmily-userflow__svg"
                aria-label="Farmily userflow diagram"
              >
                <defs>
                  <marker id="uf-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#9ca3af" />
                  </marker>
                </defs>

                {/* ── CONNECTORS ── */}
                {/* Start → Home Screen */}
                <line x1="280" y1="68" x2="280" y2="122" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />

                {/* Home Screen → Product List */}
                <line x1="280" y1="158" x2="280" y2="212" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="189" fontSize="10" fill="#9ca3af" fontFamily="inherit">View Products</text>

                {/* Product List → Filters Applied? */}
                <line x1="280" y1="248" x2="280" y2="274" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="264" fontSize="10" fill="#9ca3af" fontFamily="inherit">Apply Filters</text>

                {/* Filters Applied? → Filtered Products (Yes, left) */}
                <path d="M 225,310 L 150,310 L 150,402" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="158" y="307" fontSize="10" fill="#9ca3af" fontFamily="inherit">Yes</text>

                {/* Filters Applied? → All Products (No, right) */}
                <path d="M 335,310 L 410,310 L 410,402" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="344" y="307" fontSize="10" fill="#9ca3af" fontFamily="inherit">No</text>

                {/* Filtered Products → Product Features */}
                <path d="M 150,438 L 150,478 L 278,478" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="82" y="456" fontSize="10" fill="#9ca3af" fontFamily="inherit">Select Items</text>

                {/* All Products → Product Features */}
                <path d="M 410,438 L 410,478 L 282,478" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="336" y="456" fontSize="10" fill="#9ca3af" fontFamily="inherit">Select Items</text>

                {/* Product Features → New Arrivals */}
                <line x1="280" y1="500" x2="280" y2="554" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="581" fontSize="10" fill="#9ca3af" fontFamily="inherit">View New Arrivals</text>

                {/* New Arrivals → Product Details */}
                <line x1="280" y1="610" x2="280" y2="664" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="690" fontSize="10" fill="#9ca3af" fontFamily="inherit">Select Product</text>

                {/* Product Details → My Cart */}
                <line x1="280" y1="718" x2="280" y2="772" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="798" fontSize="10" fill="#9ca3af" fontFamily="inherit">Add to Cart</text>

                {/* My Cart → Payment Method? */}
                <line x1="280" y1="826" x2="280" y2="868" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="853" fontSize="10" fill="#9ca3af" fontFamily="inherit">Choose Payment</text>

                {/* Payment Method? → Process Payment (Credit Card, left) */}
                <path d="M 215,910 L 90,910 L 90,1022" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="100" y="907" fontSize="10" fill="#9ca3af" fontFamily="inherit">Credit Card</text>

                {/* Payment Method? → Process Payment (middle, down) */}
                <line x1="280" y1="952" x2="280" y2="1022" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />

                {/* Payment Method? → Confirm Order (Cash on Delivery, right) */}
                <path d="M 345,910 L 470,910 L 470,1022" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="348" y="907" fontSize="10" fill="#9ca3af" fontFamily="inherit">Cash on Delivery</text>

                {/* Process Payment L → End */}
                <path d="M 90,1058 L 90,1148 L 230,1148" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="94" y="1108" fontSize="10" fill="#9ca3af" fontFamily="inherit">Success</text>

                {/* Process Payment M → End */}
                <line x1="280" y1="1058" x2="280" y2="1132" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#uf-arrow)" />
                <text x="285" y="1098" fontSize="10" fill="#9ca3af" fontFamily="inherit">Success</text>

                {/* Confirm Order → End */}
                <path d="M 470,1058 L 470,1130 L 330,1130" stroke="#9ca3af" strokeWidth="1.5" fill="none" markerEnd="url(#uf-arrow)" />
                <text x="380" y="1108" fontSize="10" fill="#9ca3af" fontFamily="inherit">Order Confirmed</text>

                {/* ── NODES ── */}
                {/* 1. Start */}
                <rect x="235" y="32" width="90" height="36" rx="18" fill="#F5C842" />
                <text x="280" y="54" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="600" fill="#1a1a1a" fontFamily="inherit">Start</text>

                {/* 2. Home Screen */}
                <rect x="220" y="122" width="120" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="140" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#1a1a1a" fontFamily="inherit">Home Screen</text>

                {/* 3. Product List */}
                <rect x="220" y="212" width="120" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="230" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#1a1a1a" fontFamily="inherit">Product List</text>

                {/* 4. Filters Applied? (diamond) — salmon */}
                <path d="M 280,274 L 335,310 L 280,346 L 225,310 Z" fill="#f4a09a" stroke="#e07a74" strokeWidth="1" />
                <text x="280" y="305" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1a1a1a" fontFamily="inherit">Filters</text>
                <text x="280" y="318" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1a1a1a" fontFamily="inherit">Applied?</text>

                {/* 5. Filtered Products */}
                <rect x="90" y="402" width="120" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="150" y="420" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#1a1a1a" fontFamily="inherit">Filtered Products</text>

                {/* 6. All Products */}
                <rect x="350" y="402" width="120" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="410" y="420" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#1a1a1a" fontFamily="inherit">All Products</text>

                {/* 7. Product Features */}
                <rect x="215" y="480" width="130" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="498" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#1a1a1a" fontFamily="inherit">Product Features</text>

                {/* 8. New Arrivals (darker green) */}
                <rect x="220" y="574" width="120" height="36" rx="8" fill="#6db88a" stroke="#4e9e6e" strokeWidth="1" />
                <text x="280" y="592" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#fff" fontFamily="inherit">New Arrivals</text>

                {/* 9. Product Details */}
                <rect x="220" y="682" width="120" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="700" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#1a1a1a" fontFamily="inherit">Product Details</text>

                {/* 10. My Cart */}
                <rect x="225" y="790" width="110" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="808" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#1a1a1a" fontFamily="inherit">My Cart</text>

                {/* 11. Payment Method? (diamond) — green */}
                <path d="M 280,868 L 345,910 L 280,952 L 215,910 Z" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="905" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1a1a1a" fontFamily="inherit">Payment</text>
                <text x="280" y="918" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#1a1a1a" fontFamily="inherit">Method?</text>

                {/* 12. Process Payment (left — Credit Card) */}
                <rect x="25" y="1022" width="130" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="90" y="1040" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#1a1a1a" fontFamily="inherit">Process Payment</text>

                {/* 13. Process Payment (middle) */}
                <rect x="215" y="1022" width="130" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="280" y="1040" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#1a1a1a" fontFamily="inherit">Process Payment</text>

                {/* 14. Confirm Order (right — Cash on Delivery) */}
                <rect x="405" y="1022" width="130" height="36" rx="8" fill="#b8dfc8" stroke="#88c4a8" strokeWidth="1" />
                <text x="470" y="1040" textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="#1a1a1a" fontFamily="inherit">Confirm Order</text>

                {/* 15. End */}
                <rect x="235" y="1132" width="90" height="36" rx="18" fill="#F5C842" />
                <text x="280" y="1150" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="600" fill="#1a1a1a" fontFamily="inherit">End</text>
              </svg>
            </div>
          </div>
        </section>
        <section className="farmily-design">
          <div className="farmily-design__inner">
            <h2 className="farmily-design__heading">Design</h2>

            <div className="farmily-design__screens">
              <div className="farmily-design__screen">
                <p className="farmily-design__label">Hero Section</p>
                <img src={heroSectionImg} alt="Farmily hero section design" className="farmily-design__img" />
              </div>

              <div className="farmily-design__screen">
                <p className="farmily-design__label">Product Listing</p>
                <img src={productListingImg} alt="Farmily product listing design" className="farmily-design__img" />
              </div>

              <div className="farmily-design__screen">
                <p className="farmily-design__label">Recipe Meal Kit Listings</p>
                <img src={recipeMealKitImg} alt="Farmily recipe meal kit listings design" className="farmily-design__img" />
              </div>

              <div className="farmily-design__screen">
                <p className="farmily-design__label">Product Details</p>
                <img src={productDetailsImg} alt="Farmily product details design" className="farmily-design__img" />
              </div>

              <div className="farmily-design__screen">
                <p className="farmily-design__label">Cart &amp; Checkout</p>
                <img src={cartCheckoutImg} alt="Farmily cart and checkout design" className="farmily-design__img" />
              </div>

              <div className="farmily-design__screen">
                <p className="farmily-design__label">Order Confirmation</p>
                <img src={orderConfirmationImg} alt="Farmily order confirmation design" className="farmily-design__img" />
              </div>
            </div>
          </div>
        </section>
        <section className="farmily-thanks">
          <div className="farmily-thanks__dots farmily-thanks__dots--left" aria-hidden="true" />
          <div className="farmily-thanks__dots farmily-thanks__dots--right" aria-hidden="true" />

          <div className="farmily-thanks__inner">
            <div className="farmily-thanks__illustration" aria-hidden="true">
              <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ── Plant (left) ── */}
                <rect x="34" y="152" width="18" height="22" rx="3" fill="#4e9e6e" />
                <ellipse cx="43" cy="152" rx="6" ry="3" fill="#4e9e6e" />
                <path d="M43 148 C43 132 30 126 22 130" stroke="#4e9e6e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M43 144 C43 130 56 124 64 128" stroke="#4e9e6e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M43 140 C43 128 34 120 28 122" stroke="#6db88a" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* ── Globe ── */}
                <circle cx="138" cy="108" r="68" fill="#1b4d30" />
                <circle cx="138" cy="108" r="68" stroke="#111827" strokeWidth="3" fill="none" />
                {/* Globe grid lines */}
                <ellipse cx="138" cy="108" rx="68" ry="32" stroke="#4e9e6e" strokeWidth="1.2" fill="none" />
                <ellipse cx="138" cy="108" rx="44" ry="68" stroke="#4e9e6e" strokeWidth="1.2" fill="none" />
                <line x1="138" y1="40" x2="138" y2="176" stroke="#4e9e6e" strokeWidth="1.2" />
                <line x1="70" y1="108" x2="206" y2="108" stroke="#4e9e6e" strokeWidth="1.2" />
                {/* Thumbs up icon on globe */}
                <circle cx="138" cy="108" r="34" fill="#ffffff" opacity="0.92" />
                {/* Thumb body */}
                <path d="M124 118 L124 104 C124 102 126 100 128 100 L132 100 L134 90 C134.5 87 137 86 139 87.5 C141 89 141 92 140 95 L138 100 L148 100 C150 100 152 102 152 104 C152 106 150.5 107.5 149 108 C150 109 150.5 111 149.5 112.5 C150 113.5 150 115.5 148.5 116.5 C148.5 118.5 147 120 145 120 L128 120 C126 120 124 119 124 118 Z" fill="#1b4d30" />
                <rect x="116" y="108" width="10" height="14" rx="2" fill="#1b4d30" />

                {/* ── Person (right) ── */}
                {/* Head */}
                <circle cx="218" cy="84" r="13" fill="#f2c9a0" />
                {/* Body */}
                <rect x="208" y="98" width="20" height="32" rx="4" fill="#1a1a1a" />
                {/* Legs */}
                <rect x="208" y="128" width="9" height="26" rx="3" fill="#374151" />
                <rect x="219" y="128" width="9" height="26" rx="3" fill="#374151" />
                {/* Arm reaching toward globe */}
                <path d="M208 110 L185 115" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
                {/* Leaning posture — torso tilt implied by arm */}
                <circle cx="218" cy="84" r="13" fill="#f2c9a0" />
                {/* Hair */}
                <path d="M206 82 C206 74 230 74 230 82" fill="#1a1a1a" />

                {/* ── Cord from globe ── */}
                <path d="M138 176 C138 186 128 190 120 192" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <h2 className="farmily-thanks__heading">Thank you for your time</h2>

            <p className="farmily-thanks__message">
              Feel free to provide your valuable suggestion and comments
              <FaCommentDots className="farmily-thanks__icon" aria-hidden="true" />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
