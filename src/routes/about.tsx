import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { name: "description", content: "Meet the team behind Savage Vacations \u2014 a family-run collection of 12 curated vacation homes across the Washington coast and Hawaii, built on real hospitality and direct booking." },
      { property: "og:title", content: "About Us | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { property: "og:description", content: "Meet the team behind Savage Vacations \u2014 a family-run collection of 12 curated vacation homes across the Washington coast and Hawaii, built on real hospitality and direct booking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: "/css/about.css" }],
  }),
  component: AboutPage,
});

const html = `<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/"><span class="logo-mark">S</span>Savage <em>Vacations</em></a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/about" class="active">About</a>
      <a href="/properties">Properties</a>
      <a href="/guides">Guides</a>
      <a href="/reviews">Reviews</a>
      <a href="/#contact">Contact Us</a>
    </nav>
    <div class="header-right">
      <a class="btn btn-primary btn-sm" href="/properties">Book Now</a>
    </div>
  </div>
</header>

<div class="container">
  <div class="breadcrumb-strip">Home <span>/</span> About</div>
</div>

<section class="container" style="padding-bottom:20px;">
  <div class="eyebrow">Our Story</div>
  <h1>Built By People Who Love This Coast</h1>
  <p style="max-width:640px;">Savage Vacations started with one house on the Washington coast and a simple idea: guests deserve the same warmth and honesty a friend would offer, not a call center. Twelve properties later — from oceanfront cabins to island bungalows — that idea hasn't changed.</p>
</section>

<section class="container">
  <div class="story-split">
    <div>
      <h2>From One Family's Summer House to Twelve Properties</h2>
      <p>It began in 2019, when Mark and Elena Savage started renting out their own family home on the Washington coast during the off-season. What they noticed surprised them: guests didn't just want a clean, well-located house — they wanted to feel looked after. A recommendation for dinner. A quick reply when a question came up. Someone who actually knew the property answering the phone.</p>
      <p>That guest-first instinct became the whole business. Today, Savage Vacations manages a small, deliberately curated collection of homes across the Washington coast and Hawaii — each one personally vetted, each one booked direct, with a real person on the other end of every message.</p>
    </div>
    <div class="ph-photo" data-photo="The original Ocean Shores property, 2019"></div>
  </div>
</section>

<section class="why-direct">
  <div class="container">
    <div class="eyebrow">What We Believe</div>
    <h2>The values behind every property</h2>
    <div class="feature-grid">
      <div class="feature-card"><div class="feature-icon">🏡</div><h3>Thoughtfully Curated</h3><p>Every property is personally vetted for comfort, design, and quality before it joins the collection.</p></div>
      <div class="feature-card"><div class="feature-icon">🤝</div><h3>Real Hosts, Real Conversations</h3><p>No call centers or chatbots — every guest can reach an actual person who knows the property.</p></div>
      <div class="feature-card"><div class="feature-icon">💳</div><h3>Book Direct, No Middlemen</h3><p>Guaranteed lowest rates and zero hidden service fees, every time.</p></div>
      <div class="feature-card"><div class="feature-icon">🌲</div><h3>Rooted in the Community</h3><p>We work with local businesses and share what we love about each destination, not just the house.</p></div>
    </div>
  </div>
</section>

<div class="stats-strip">
  <div class="container stats-grid">
    <div><div class="num">4.9</div><div class="lbl">Average Guest Rating</div></div>
    <div><div class="num">9,400+</div><div class="lbl">Stays Hosted</div></div>
    <div><div class="num">12</div><div class="lbl">Curated Properties</div></div>
    <div><div class="num">2019</div><div class="lbl">Founded</div></div>
  </div>
</div>

<section class="container" id="team-section">
  <div class="section-head">
    <div class="eyebrow" style="justify-content:center;">Meet the Team</div>
    <h2>The people behind your stay</h2>
    <p>A small team, on purpose — so every guest gets a real person, not a rotation of strangers.</p>
  </div>
  <div class="host-grid">
    <div class="host-card">
      <div class="host-avatar">ER</div>
      <div>
        <span class="host-badge">✓ Co-Founder</span>
        <h3>Elena Savage</h3>
        <p class="host-meta">Hosting since 2019 · You'll also find her as the host of 18 Ocean Blvd</p>
        <p class="host-blurb">"We built this company for our own family first. Every property in our collection has to meet the bar we'd set for our own home."</p>
      </div>
    </div>
    <div class="host-card">
      <div class="host-avatar">MS</div>
      <div>
        <span class="host-badge">✓ Co-Founder</span>
        <h3>Mark Savage</h3>
        <p class="host-meta">Hosting since 2019 · Oversees new property partnerships</p>
        <p class="host-blurb">"Every new property gets walked through in person before it joins the collection — photos never tell the whole story."</p>
      </div>
    </div>
  </div>
</section>

<section class="container" id="about-cta-section">
  <div class="cta-banner">
    <div class="eyebrow">Come Stay With Us</div>
    <h2>Ready to find your stay?</h2>
    <p style="max-width:440px; margin:0 auto; color:#DCC29C;">Twelve homes, two coastlines, one team that actually answers the phone.</p>
    <div class="cta-ctas">
      <a class="btn btn-primary" href="/properties">Browse All Properties →</a>
      <a class="btn btn-outline-light" href="/#contact">Contact Us</a>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <h5 style="color:#EDD9BC; font-family:'Playfair Display',serif; font-size:1.1rem; text-transform:none; letter-spacing:0;">Savage <em>Vacations</em></h5>
        <p>Thoughtfully curated luxury vacation homes across Washington and Hawaii, designed for comfort, adventure, and unforgettable memories.</p>
      </div>
      <div><h5>Explore</h5><a href="/">Home</a><a href="/properties">Properties</a><a href="/guides">Guides</a><a href="/reviews">Reviews</a><a href="/#faq">FAQ</a></div>
      <div><h5>Contact</h5><a href="mailto:stay@savagevacations.com">stay@savagevacations.com</a><a href="tel:+15552478239">+1 (555) 247-8239</a><a href="/#contact">Contact Us</a></div>
      <div><h5>Newsletter</h5><p>Curated stays &amp; seasonal offers, straight to your inbox.</p></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Savage Vacations. All rights reserved.</span>
      <span>Direct Booking Hub — sample concept prepared for client review</span>
    </div>
  </div>
</footer>`;

const script = ``;

function AboutPage() {
  return <PageShell html={html} script={script} />;
}
