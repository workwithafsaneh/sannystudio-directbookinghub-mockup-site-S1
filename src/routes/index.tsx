import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Savage Vacations | Luxury Vacation Rentals in Washington & Hawaii \u2014 Book Direct, No Fees" },
      { name: "description", content: "Book direct and save. Handpicked vacation homes on the Washington coast and across Hawaii \u2014 zero service fees, guaranteed best rates, and a real host on call. Reserve in minutes." },
      { property: "og:title", content: "Savage Vacations | Luxury Vacation Rentals in Washington & Hawaii \u2014 Book Direct, No Fees" },
      { property: "og:description", content: "Handpicked vacation homes across Washington and Hawaii. Book direct for zero service fees, guaranteed best rates, and a real host on call." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: "/css/home.css" }],
  }),
  component: HomePage,
});

const html = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Savage Vacations",
  "description": "Curated luxury vacation home rentals across the Washington coast and Hawaii, bookable direct with no service fees.",
  "telephone": "+1-555-247-8239",
  "email": "stay@savagevacations.com",
  "priceRange": "$$$",
  "areaServed": ["Washington coast, USA", "Hawaii, USA"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "340"
  }
}
</script><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your cancellation & refund policy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Full refund for cancellations made 30 days or more before check-in. Details vary slightly by property and are shown at checkout." }
    },
    {
      "@type": "Question",
      "name": "What time is check-in and check-out?",
      "acceptedAnswer": { "@type": "Answer", "text": "Check-in is after 4:00 PM and check-out is before 10:00 AM. Early check-in or late check-out may be arranged directly with your host, subject to availability." }
    },
    {
      "@type": "Question",
      "name": "Why should I book direct instead of Airbnb or VRBO?",
      "acceptedAnswer": { "@type": "Answer", "text": "No service fees, a guaranteed lowest rate, and direct access to your host for flexible changes and local recommendations." }
    },
    {
      "@type": "Question",
      "name": "Are pets allowed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most properties are pet-friendly with prior approval. Look for the Pet Friendly amenity tag on each listing." }
    },
    {
      "@type": "Question",
      "name": "Is a security deposit required?",
      "acceptedAnswer": { "@type": "Answer", "text": "A refundable damage deposit is held for select properties and released within 7 days of checkout, provided no issues are reported." }
    }
  ]
}
</script>

<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="#top"><span class="logo-mark">S</span>Savage <em>Vacations</em></a>
    <nav class="nav">
      <a href="/" class="active">Home</a>
    <a href="/about">About</a>
      <a href="/properties">Properties</a>
      <a href="/guides">Guides</a>
      <a href="/reviews">Reviews</a>
      <a href="#contact">Contact Us</a>
    </nav>
    <div class="header-right">
      <a class="btn btn-primary btn-sm" href="/properties">Book Now</a>
      <button class="mobile-nav-toggle" onclick="toggleMobileNav()" aria-label="Open menu" aria-expanded="false" id="mobileNavBtn">☰</button>
    </div>
  </div>
  <nav class="mobile-nav" id="mobileNav">
    <a href="/about">About</a>
    <a href="/properties">Properties</a>
    <a href="/guides">Guides</a>
    <a href="/reviews">Reviews</a>
    <a href="#contact">Contact Us</a>
    <a class="btn btn-primary btn-sm" href="/properties">Book Now</a>
  </nav>
</header>

<main id="top">
<section class="hero">
  <div class="hero-content">
    <div class="eyebrow light" style="justify-content:center;">Washington Coast &nbsp;·&nbsp; Hawaii &nbsp;·&nbsp; Book Direct, Zero Fees</div>
    <h1>Every Great Journey<br><em>Starts With the Perfect Stay</em></h1>
    <p>Handpicked vacation homes on the Washington coast and across Hawaii. Book direct and every dollar you'd lose to fees goes back into your trip — no service charges, no middleman, just a real host on call.</p>
    <div class="hero-ctas">
      <a class="btn btn-maroon" href="/properties">Book Your Stay →</a>
      <a class="btn btn-outline-light" href="/properties">See Featured Homes</a>
    </div>
  </div>
</section>

<!-- ===== Ratings / Trust Section ===== -->
<div class="stats-strip">
  <div class="container stats-grid">
    <div><div class="num">4.9</div><div class="lbl">Average Guest Rating</div></div>
    <div><div class="num">9,400+</div><div class="lbl">Stays Hosted</div></div>
    <div><div class="num">12</div><div class="lbl">Curated Properties</div></div>
    <div><div class="num">0%</div><div class="lbl">Booking Fees, Direct</div></div>
  </div>
  <div class="container trust-chips">
    <div class="trust-chip"><span class="mark">✓</span>Verified guest reviews only</div>
    <div class="trust-chip"><span class="mark">✓</span>Local hosts — real humans, real fast</div>
    <div class="trust-chip"><span class="mark">✓</span>Best-rate guarantee, every stay</div>
  </div>
</div>

<div class="container search-wrap">
  <div class="search-bar">
    <div>
      <label class="field-label" for="destinationSelect">Destination</label>
      <select id="destinationSelect">
        <option>Anywhere</option>
        <option>Ocean Shores, WA</option>
        <option>Westport, WA</option>
        <option>Long Beach, WA</option>
        <option>Hawaii (all islands)</option>
      </select>
    </div>
    <div class="date-field">
      <label class="field-label" for="checkinInput">Check-in</label>
      <input type="text" id="checkinInput" class="date-trigger" placeholder="Add date" readonly onclick="toggleDatePopover()">
    <div class="date-popover" id="datePopover">
      <div class="date-popover-head">
        <span>Select your dates</span>
        <button type="button" class="popover-close" onclick="toggleDatePopover(false)">✕</button>
      </div>
      <div class="cal-month">August 2026</div>
      <div class="cal-grid">
        <div class="dow">Su</div><div class="dow">Mo</div><div class="dow">Tu</div><div class="dow">We</div><div class="dow">Th</div><div class="dow">Fr</div><div class="dow">Sa</div>
        <div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div>
        <div class="cal-day" data-day="1" onclick="pickLanding(this)">1</div>
        <div class="cal-day" data-day="2" onclick="pickLanding(this)">2</div>
        <div class="cal-day" data-day="3" onclick="pickLanding(this)">3</div>
        <div class="cal-day" data-day="4" onclick="pickLanding(this)">4</div>
        <div class="cal-day" data-day="5" onclick="pickLanding(this)">5</div>
        <div class="cal-day unavail" data-day="6">6</div>
        <div class="cal-day unavail" data-day="7">7</div>
        <div class="cal-day" data-day="8" onclick="pickLanding(this)">8</div>
        <div class="cal-day" data-day="9" onclick="pickLanding(this)">9</div>
        <div class="cal-day" data-day="10" onclick="pickLanding(this)">10</div>
        <div class="cal-day" data-day="11" onclick="pickLanding(this)">11</div>
        <div class="cal-day" data-day="12" onclick="pickLanding(this)">12</div>
        <div class="cal-day" data-day="13" onclick="pickLanding(this)">13</div>
        <div class="cal-day" data-day="14" onclick="pickLanding(this)">14</div>
        <div class="cal-day" data-day="15" onclick="pickLanding(this)">15</div>
        <div class="cal-day" data-day="16" onclick="pickLanding(this)">16</div>
        <div class="cal-day" data-day="17" onclick="pickLanding(this)">17</div>
        <div class="cal-day unavail" data-day="18">18</div>
        <div class="cal-day unavail" data-day="19">19</div>
        <div class="cal-day" data-day="20" onclick="pickLanding(this)">20</div>
        <div class="cal-day" data-day="21" onclick="pickLanding(this)">21</div>
        <div class="cal-day" data-day="22" onclick="pickLanding(this)">22</div>
        <div class="cal-day" data-day="23" onclick="pickLanding(this)">23</div>
        <div class="cal-day" data-day="24" onclick="pickLanding(this)">24</div>
        <div class="cal-day" data-day="25" onclick="pickLanding(this)">25</div>
        <div class="cal-day" data-day="26" onclick="pickLanding(this)">26</div>
        <div class="cal-day" data-day="27" onclick="pickLanding(this)">27</div>
        <div class="cal-day" data-day="28" onclick="pickLanding(this)">28</div>
        <div class="cal-day" data-day="29" onclick="pickLanding(this)">29</div>
        <div class="cal-day" data-day="30" onclick="pickLanding(this)">30</div>
        <div class="cal-day" data-day="31" onclick="pickLanding(this)">31</div>
      </div>
      <div class="cal-legend"><span class="dot"></span>Available <span class="dot unavail"></span>Booked</div>
    </div>
    </div>
    <div>
      <label class="field-label" for="checkoutInput">Check-out</label>
      <input type="text" id="checkoutInput" class="date-trigger" placeholder="Add date" readonly onclick="toggleDatePopover()">
    </div>
    <div>
      <label class="field-label" for="guestsSelect">Guests</label>
      <select id="guestsSelect">
        <option>2 guests</option>
        <option>4 guests</option>
        <option>6 guests</option>
        <option>8+ guests</option>
      </select>
    </div>
    <button class="btn btn-primary search-btn" onclick="document.getElementById('featured').scrollIntoView({behavior:'smooth'})">Search Stays</button>

  </div>
  <div class="search-note">12 curated homes across the Washington coast and Hawaii — real-time availability, no booking fees.</div>
</div>

<!-- ===== Featured Properties ===== -->
<section id="featured" class="container">
  <div class="section-head">
    <div>
      <div class="eyebrow">Featured Stays</div>
      <h2>Curated homes for the <em>discerning traveler</em></h2>
    </div>
    <a href="/properties">View All Properties →</a>
  </div>
  <div class="property-grid">
    <div class="property-card">
      <div class="ph-photo"><img class="ph-photo-img" src="/images/properties/ocean-blvd/01-exterior-dusk.webp" alt="18 Ocean Blvd coastal retreat, exterior at dusk" loading="lazy" decoding="async"><span class="card-tag">Signature Stay</span><span class="card-rating">★ 4.98</span></div>
      <div class="property-body">
        <div class="property-loc">📍 Ocean Shores, Washington</div>
        <h3>18 Ocean Blvd — Coastal Retreat</h3>
        <div class="property-meta">5 Bed · 3 Bath · Sleeps 10</div>
        <div class="property-footer">
          <div class="price">$412 <span>/ night</span></div>
          <a class="btn btn-primary btn-sm" href="/properties/18-ocean-blvd">View Stay</a>
        </div>
      </div>
    </div>
    <div class="property-card">
      <div class="ph-photo"><img class="ph-photo-img" src="/images/properties/cedar-hollow/01-living-kitchen.webp" alt="Cedar Hollow Cabin, Westport Washington" loading="lazy" decoding="async"><span class="card-tag">Family Favorite</span><span class="card-rating">★ 4.92</span></div>
      <div class="property-body">
        <div class="property-loc">📍 Westport, Washington</div>
        <h3>Cedar Hollow Cabin</h3>
        <div class="property-meta">3 Bed · 2 Bath · Sleeps 6</div>
        <div class="property-footer">
          <div class="price">$268 <span>/ night</span></div>
          <a class="btn btn-primary btn-sm" href="/properties/cedar-hollow-cabin">View Stay</a>
        </div>
      </div>
    </div>
    <div class="property-card">
      <div class="ph-photo"><img class="ph-photo-img" src="/images/properties/firelight/01-hot-tub-garden.webp" alt="Firelight Cottage, Long Beach Washington" loading="lazy" decoding="async"><span class="card-tag">Couples Escape</span><span class="card-rating">★ 4.95</span></div>
      <div class="property-body">
        <div class="property-loc">📍 Long Beach, Washington</div>
        <h3>Firelight Cottage</h3>
        <div class="property-meta">1 Bed · 1 Bath · Sleeps 2</div>
        <div class="property-footer">
          <div class="price">$189 <span>/ night</span></div>
          <a class="btn btn-primary btn-sm" href="/properties/firelight-cottage">View Stay</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== Why Book Direct ===== -->
<section id="why-direct" class="why-direct">
  <div class="container">
    <div class="eyebrow">The Difference Is Personal</div>
    <h2>Why guests book <em>direct</em> with us</h2>

    <div class="compare">
      <div class="compare-col direct">
        <h3>Booking Direct with Savage Vacations</h3>
        <ul>
          <li>Guaranteed lowest rate — no third-party markups</li>
          <li>Zero hidden service fees at checkout</li>
          <li>Real conversation with a local host, not a chatbot</li>
          <li>Flexible date changes handled personally</li>
          <li>Early access to new properties &amp; returning-guest perks</li>
        </ul>
      </div>
      <div class="compare-col third">
        <h3>Booking Through Third-Party Platforms</h3>
        <ul>
          <li>Service &amp; booking fees added at checkout</li>
          <li>Rates can shift depending on the app you use</li>
          <li>Support routed through a general help center</li>
          <li>Rigid cancellation windows, little flexibility</li>
          <li>No loyalty benefit for repeat stays</li>
        </ul>
      </div>
    </div>

    <div class="feature-grid">
      <div class="feature-card"><div class="feature-icon">🏡</div><h3>Luxury Vacation Homes</h3><p>Every property is personally vetted for comfort, design, and quality — no surprises, only exceptional stays.</p></div>
      <div class="feature-card"><div class="feature-icon">📍</div><h3>Prime Coastal Locations</h3><p>From beach boardwalks to old-growth forest trails, our properties sit in the most coveted corners of the Pacific coast.</p></div>
      <div class="feature-card"><div class="feature-icon">📅</div><h3>Effortless Direct Booking</h3><p>Real-time availability and transparent pricing — reserve in under two minutes.</p></div>
      <div class="feature-card"><div class="feature-icon">☎</div><h3>Concierge-Level Support</h3><p>A dedicated local team on call before, during, and after your stay — because a rental should feel hosted.</p></div>
    </div>
  </div>
</section>

<!-- ===== Guest Stories ===== -->
<section id="reviews" class="testimonials">
  <div class="container">
    <div class="eyebrow light" style="justify-content:center;">Guest Stories</div>
    <h2>Loved by travelers <em>worldwide</em></h2>
    <p class="section-sub">Real words from real stays — this is the experience we build every property around.</p>
    <div class="marquee-wrap">
      <button type="button" class="marquee-btn marquee-side marquee-prev" aria-label="Previous reviews" onclick="reviewNav(-1)">‹</button>
      <div class="review-marquee" id="reviewMarquee"><div class="review-track" id="reviewTrack">
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p>"From the moment we arrived, everything about 18 Ocean Blvd exceeded expectations — the detail, the warmth, the sheer beauty of the surroundings."</p>
          <div class="who"><div class="who-avatar">A</div><div><span class="who-name">Alexandra M.</span><span class="who-loc">Seattle, Washington</span></div></div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p>"We brought the whole family and the house was nothing short of magical. The deck, the fire pit, the string lights — our kids are still talking about it."</p>
          <div class="who"><div class="who-avatar">JP</div><div><span class="who-name">James &amp; Priya K.</span><span class="who-loc">San Francisco, California</span></div></div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p>"Booking direct saved us almost $300 versus the listing site, and the host answered every message within minutes. We won't book anywhere else now."</p>
          <div class="who"><div class="who-avatar">C</div><div><span class="who-name">Charlotte R.</span><span class="who-loc">Portland, Oregon</span></div></div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p>"Cedar Hollow was the perfect escape — the kids loved the loft, we loved the hot tub under the stars. Already planning our next trip back."</p>
          <div class="who"><div class="who-avatar">M</div><div><span class="who-name">Marcus T.</span><span class="who-loc">Denver, Colorado</span></div></div>
        </div>
        <div class="review-card">
          <div class="stars">★★★★★</div>
          <p>"Firelight Cottage is even better than the photos. Walkable to everything, spotless, and the host checked in without ever being intrusive."</p>
          <div class="who"><div class="who-avatar">SR</div><div><span class="who-name">Sarah &amp; Ravi D.</span><span class="who-loc">Austin, Texas</span></div></div>
        </div>
      </div></div>
      <button type="button" class="marquee-btn marquee-side marquee-next" aria-label="Next reviews" onclick="reviewNav(1)">›</button>
    </div>
    <div style="text-align:center;"><span class="google-badge">★ 4.9 out of 5 — based on 340+ Google reviews</span><br><a href="/reviews" style="display:inline-block; margin-top:16px; font-size:.85rem; color:var(--gold); border-bottom:1px solid var(--gold);">See all 448 guest reviews →</a></div>
  </div>
</section>

<!-- ===== Destination Highlights ===== -->
<section id="destinations" class="container">
  <div class="section-head">
    <div>
      <div class="eyebrow">Explore the Destinations</div>
      <h2>Two coastlines, endlessly worth <em>the trip</em></h2>
    </div>
  </div>
  <p style="max-width:640px; margin-bottom:34px;">Every stay comes with a place worth exploring right outside the door — from misty boardwalks on the Washington coast to warm tide pools in Hawaii.</p>

  <div class="destination-block">
    <div class="destination-label"><span class="region-dot wa"></span>Washington Coast</div>
    <div class="destination-grid">
      <div class="ph-photo destination-card"><img class="ph-photo-img" src="https://images.unsplash.com/photo-1653367621927-ccd602d03b23?auto=format&fit=crop&w=800&h=600&q=80&fm=webp" alt="Driftwood Dunes Park boardwalk trails" loading="lazy" decoding="async"><div class="ph-photo-overlay" style="background-image:linear-gradient(180deg, rgba(26,18,14,0) 40%, rgba(26,18,14,.82) 100%)" aria-hidden="true"></div><span class="d-title">Driftwood Dunes Park</span><span class="d-sub">Boardwalk trails · 10 min drive</span></div>
      <div class="ph-photo destination-card"><img class="ph-photo-img" src="https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?auto=format&fit=crop&w=800&h=600&q=80&fm=webp" alt="Tidewater Coffee Roasters, harbor view coffee shop" loading="lazy" decoding="async"><div class="ph-photo-overlay" style="background-image:linear-gradient(180deg, rgba(26,18,14,0) 40%, rgba(26,18,14,.82) 100%)" aria-hidden="true"></div><span class="d-title">Tidewater Coffee Roasters</span><span class="d-sub">Small-batch, harbor view · 6 min drive</span></div>
      <div class="ph-photo destination-card"><img class="ph-photo-img" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&h=600&q=80&fm=webp" alt="The Salted Plank wood-fired seafood restaurant" loading="lazy" decoding="async"><div class="ph-photo-overlay" style="background-image:linear-gradient(180deg, rgba(26,18,14,0) 40%, rgba(26,18,14,.82) 100%)" aria-hidden="true"></div><span class="d-title">The Salted Plank</span><span class="d-sub">Wood-fired seafood · 8 min drive</span></div>
    </div>
  </div>

  <div class="destination-block">
    <div class="destination-label"><span class="region-dot hi"></span>Hawaii</div>
    <div class="destination-grid">
      <div class="ph-photo destination-card"><img class="ph-photo-img" src="https://images.unsplash.com/photo-1629126799597-944b6e3150ca?auto=format&fit=crop&w=800&h=600&q=80&fm=webp" alt="Hidden lava-rock tide pools, Hawaii" loading="lazy" decoding="async"><div class="ph-photo-overlay" style="background-image:linear-gradient(180deg, rgba(26,18,14,0) 40%, rgba(26,18,14,.82) 100%)" aria-hidden="true"></div><span class="d-title">Hidden Tide Pools</span><span class="d-sub">Quiet lava-rock coves · short walk</span></div>
      <div class="ph-photo destination-card"><img class="ph-photo-img" src="https://images.unsplash.com/photo-1771154141872-e5ad3905a385?auto=format&fit=crop&w=800&h=600&q=80&fm=webp" alt="Local plate lunch spot near the harbor" loading="lazy" decoding="async"><div class="ph-photo-overlay" style="background-image:linear-gradient(180deg, rgba(26,18,14,0) 40%, rgba(26,18,14,.82) 100%)" aria-hidden="true"></div><span class="d-title">Harborside Plate Lunch</span><span class="d-sub">Local-style, family run · 5 min drive</span></div>
      <div class="ph-photo destination-card"><img class="ph-photo-img" src="https://images.unsplash.com/photo-1629118753599-6f0a473ba412?auto=format&fit=crop&w=800&h=600&q=80&fm=webp" alt="Calm water snorkeling cove at sunset" loading="lazy" decoding="async"><div class="ph-photo-overlay" style="background-image:linear-gradient(180deg, rgba(26,18,14,0) 40%, rgba(26,18,14,.82) 100%)" aria-hidden="true"></div><span class="d-title">Sunset Snorkel Cove</span><span class="d-sub">Calm-water reef · 10 min drive</span></div>
    </div>
  </div>
</section>

<!-- ===== Email Capture ===== -->
<section class="container" id="newsletter-section">
  <div class="newsletter-box">
    <div class="eyebrow light">Stay Inspired</div>
    <h2>Letters From the Places We Love</h2>
    <form class="newsletter-form" onsubmit="event.preventDefault(); document.getElementById('nlMsg').textContent='Thanks — check your inbox to confirm.'; this.reset();">
      <input type="email" aria-label="Your email address" placeholder="Your email address" required>
      <button class="btn btn-primary" type="submit">Get Early Access →</button>
    </form>
    <div class="newsletter-msg" id="nlMsg"></div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section id="faq" class="container">
  <div class="eyebrow" style="justify-content:center;">Good to Know</div>
  <h2 style="text-align:center;">Frequently asked <em>questions</em></h2>
  <div class="faq-wrap" style="margin-top:30px;">
    <details class="faq-item">
      <summary>What is your cancellation &amp; refund policy?</summary>
      <p>Full refund for cancellations made 30 days or more before check-in. Details vary slightly by property and are shown at checkout.</p>
    </details>
    <details class="faq-item">
      <summary>What time is check-in and check-out?</summary>
      <p>Check-in is after 4:00 PM and check-out is before 10:00 AM. Early check-in or late check-out may be arranged directly with your host, subject to availability.</p>
    </details>
    <details class="faq-item">
      <summary>Why should I book direct instead of Airbnb/VRBO?</summary>
      <p>No service fees, guaranteed lowest rate, and direct access to your host for flexible changes and local recommendations.</p>
    </details>
    <details class="faq-item">
      <summary>Are pets allowed?</summary>
      <p>Most properties are pet-friendly with prior approval. Look for the "Pet Friendly" amenity tag on each listing.</p>
    </details>
    <details class="faq-item">
      <summary>Is a security deposit required?</summary>
      <p>A refundable damage deposit is held for select properties and released within 7 days of checkout, provided no issues are reported.</p>
    </details>
  </div>
</section>

<!-- ===== Contact ===== -->
<section id="contact" class="container">
  <div class="contact-grid">
    <div class="contact-info">
      <div class="eyebrow">We're an Email or Call Away</div>
      <h2>Talk to a real person, <em>not a chatbot</em></h2>
      <p>Have a question before you book, or planning a stay for a group? Reach out directly — a local host, not a call center, will get back to you.</p>
      <div class="contact-detail"><span class="c-icon">✉</span>stay@savagevacations.com</div>
      <div class="contact-detail"><span class="c-icon">☎</span>+1 (555) 247-8239</div>
      <div class="contact-detail"><span class="c-icon">📍</span>Washington Coast &amp; Hawaii</div>
      <div class="response-note">We typically respond within an hour during the day, and always within 24 hours.</div>
    </div>
    <div class="contact-form-card">
      <form onsubmit="event.preventDefault(); document.getElementById('contactMsg').textContent='Thanks — we\\'ll be in touch shortly.'; this.reset();">
        <label for="cName">Name</label>
        <input id="cName" type="text" placeholder="Your full name" required>
        <label for="cEmail">Email</label>
        <input id="cEmail" type="email" placeholder="you@example.com" required>
        <label for="cMessage">Message</label>
        <textarea id="cMessage" placeholder="Tell us about your trip — dates, group size, and any questions." required></textarea>
        <button class="btn btn-primary btn-full" type="submit">Send Message →</button>
      </form>
      <div class="contact-msg" id="contactMsg"></div>
    </div>
  </div>
</section>

<!-- ===== Final CTA ===== -->
<section class="container">
  <div class="cta-banner">
    <div class="eyebrow">Your Next Adventure Awaits</div>
    <h2>Ready for your next coastal getaway?</h2>
    <p style="max-width:440px; margin:0 auto; color:#DCC29C;">Guaranteed lowest rates. Zero service fees. A real host, not a call center.</p>
    <div class="cta-ctas">
      <a class="btn btn-primary" href="/properties">Book Your Stay →</a>
      <a class="btn btn-outline-light" href="#contact">Contact Us</a>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <p class="footer-h" style="color:var(--cream-text); font-family:'Playfair Display',serif; font-size:1.1rem; text-transform:none; letter-spacing:0;">Savage <em>Vacations</em></p>
        <p>Thoughtfully curated luxury vacation homes across Washington and Hawaii, designed for comfort, adventure, and unforgettable memories.</p>
        <div class="social-icons">
          <a class="social-icon" href="#" aria-label="Facebook" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a class="social-icon" href="#" aria-label="Instagram" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793 0 1.44.645 1.44 1.439z"/></svg>
          </a>
          <a class="social-icon" href="#" aria-label="TikTok" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
          </a>
          <a class="social-icon" href="#" aria-label="YouTube" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a class="social-icon wordmark" href="#" aria-label="Airbnb" target="_blank" rel="noopener">airbnb</a>
          <a class="social-icon wordmark" href="#" aria-label="Vrbo" target="_blank" rel="noopener">vrbo</a>
        </div>
      </div>
      <div>
        <p class="footer-h">Explore</p>
        <a href="/about">About</a><a href="/properties">Properties</a><a href="/guides">Guides</a><a href="/reviews">Reviews</a><a href="#faq">FAQ</a>
      </div>
      <div>
        <p class="footer-h">Contact</p>
        <a href="mailto:stay@savagevacations.com">stay@savagevacations.com</a><a href="tel:+15552478239">+1 (555) 247-8239</a><a href="#contact">Contact Us</a>
      </div>
      <div>
        <p class="footer-h">Newsletter</p>
        <p>Curated stays &amp; seasonal offers, straight to your inbox.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Savage Vacations. All rights reserved.</span>
      <span>Direct Booking Hub — sample concept prepared for client review</span>
    </div>
  </div>
</footer>`;

const script = `/* ---------- Mobile nav ---------- */
  function toggleMobileNav(){
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('mobileNavBtn');
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
  document.querySelectorAll('#mobileNav a').forEach(a => a.addEventListener('click', () => {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('mobileNavBtn').setAttribute('aria-expanded','false');
  }));

  /* ---------- Search bar date picker ---------- */
  let landingCheckin = null, landingCheckout = null;

  function toggleDatePopover(forceOpen){
    const pop = document.getElementById('datePopover');
    if(forceOpen === false){ pop.classList.remove('open'); return; }
    pop.classList.toggle('open');
  }

  function pickLanding(el){
    const day = parseInt(el.dataset.day, 10);
    if(landingCheckin === null || (landingCheckin && landingCheckout)){
      clearLandingSelection();
      landingCheckin = day;
      el.classList.add('sel-start');
    } else if(day > landingCheckin){
      landingCheckout = day;
      highlightLandingRange();
    } else {
      clearLandingSelection();
      landingCheckin = day;
      el.classList.add('sel-start');
    }
    updateLandingInputs();
  }

  function clearLandingSelection(){
    document.querySelectorAll('#datePopover .cal-day[data-day]').forEach(d => d.classList.remove('sel-start','sel-end','in-range'));
    landingCheckin = null; landingCheckout = null;
  }

  function highlightLandingRange(){
    document.querySelectorAll('#datePopover .cal-day[data-day]').forEach(d => {
      const day = parseInt(d.dataset.day, 10);
      if(day === landingCheckin) d.classList.add('sel-start');
      else if(day === landingCheckout) d.classList.add('sel-end');
      else if(day > landingCheckin && day < landingCheckout) d.classList.add('in-range');
    });
  }

  function updateLandingInputs(){
    const ci = document.getElementById('checkinInput');
    const co = document.getElementById('checkoutInput');
    ci.value = landingCheckin ? \`Aug \${landingCheckin}, 2026\` : '';
    co.value = landingCheckout ? \`Aug \${landingCheckout}, 2026\` : '';
    if(landingCheckin && landingCheckout){
      setTimeout(() => toggleDatePopover(false), 350);
    }
  }

  document.addEventListener('click', function(e){
    const pop = document.getElementById('datePopover');
    const isTrigger = e.target.closest('.date-trigger');
    const isInsidePopover = e.target.closest('#datePopover');
    if(!isTrigger && !isInsidePopover){
      pop.classList.remove('open');
    }
  });

  /* ---------- Guest Stories carousel: slow auto-slide + side arrows ---------- */
  /* Autoplay only ever starts once the carousel is actually scrolled into
     view (IntersectionObserver). It can never run during initial page load,
     so it can never compete with, or be mistaken for, LCP/paint work. */
  function initReviewCarousel(){
    const track = document.getElementById('reviewTrack');
    const section = document.getElementById('reviewMarquee');
    if(!track) return;
    const cardStep = 362;
    let timer = null;
    let started = false;

    function advance(){
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
      if(atEnd){
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }
    function startAutoplay(){ if(timer) return; timer = setInterval(advance, 4500); }
    function stopAutoplay(){ clearInterval(timer); timer = null; }
    function resetAutoplay(){ stopAutoplay(); startAutoplay(); }

    window.reviewNav = function(dir){
      if(dir < 0){
        if(track.scrollLeft <= 10){
          track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -cardStep, behavior: 'smooth' });
        }
      } else {
        advance();
      }
      if(started) resetAutoplay();
    };
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', function(){ if(started) startAutoplay(); });
    track.addEventListener('touchstart', stopAutoplay, { passive: true });

    if('IntersectionObserver' in window && section){
      const io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting && !started){
            started = true;
            startAutoplay();
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(section);
    }
  }

  initReviewCarousel();`;

function HomePage() {
  return <PageShell html={html} script={script} />;
}
