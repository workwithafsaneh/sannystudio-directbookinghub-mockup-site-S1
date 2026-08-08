import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/properties/18-ocean-blvd")({
  head: () => ({
    meta: [
      { title: "18 Ocean Blvd \u2014 Coastal Retreat | Ocean Shores, WA | Savage Vacations" },
      { name: "description", content: "Sleeps 10 in this 5-bed, 3-bath coastal retreat in Ocean Shores, WA. Private hot tub, fire pit, and wraparound deck \u2014 book direct with Savage Vacations for zero service fees." },
      { property: "og:title", content: "18 Ocean Blvd \u2014 Coastal Retreat | Savage Vacations" },
      { property: "og:description", content: "Sleeps 10 in this 5-bed, 3-bath coastal retreat in Ocean Shores, WA. Private hot tub, fire pit, and wraparound deck \u2014 book direct for zero service fees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Ultimate%20Seafood%20Platter%20at%20Landry%27s%20Seafood%20House.jpg" },
      { name: "twitter:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Ultimate%20Seafood%20Platter%20at%20Landry%27s%20Seafood%20House.jpg" },
    ],
    links: [{ rel: "stylesheet", href: "/css/prop-ocean.css" }],
  }),
  component: PropOceanPage,
});

const html = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "name": "18 Ocean Blvd — Coastal Retreat",
  "description": "A five-bedroom coastal retreat above the treeline in Ocean Shores, Washington, with a wraparound deck, private fire pit, and covered hot tub.",
  "url": "https://www.savagevacations.com/properties/18-ocean-blvd",
  "telephone": "+1-555-247-8239",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ocean Shores",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.97556,
    "longitude": -124.15583
  },
  "numberOfRooms": 5,
  "petsAllowed": true,
  "containsPlace": {
    "@type": "Accommodation",
    "name": "18 Ocean Blvd",
    "numberOfBedrooms": 5,
    "numberOfBathroomsTotal": 3,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 10
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Private Hot Tub", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Fire Pit", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.98",
    "reviewCount": "212"
  },
  "priceRange": "$$$"
}
</script>

<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/"><span class="logo-mark">S</span>Savage <em>Vacations</em></a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/properties" class="active">Properties</a>
      <a href="/guides">Guides</a>
      <a href="/reviews">Reviews</a>
      <a href="/#contact">Contact Us</a>
    </nav>
    <div class="header-right">
      <a class="btn btn-primary btn-sm" href="#booking">Book Now</a>
    </div>
  </div>
</header>

<main>

<div class="container">
  <div class="breadcrumb-strip" style="margin-top:22px;">Home <span>/</span> Properties <span>/</span> 18 Ocean Blvd</div>
</div>

<section class="page-head">
  <div class="container">
    <div class="eyebrow">Coastal Retreat &nbsp;·&nbsp; Sleeps 10</div>
    <h1>18 Ocean Blvd — Coastal Retreat</h1>
    <div class="meta-row">
      <span class="rating-badge">★ 4.98 · 212 reviews</span>
      <span class="location">📍 Ocean Shores, Washington</span>
    </div>
  </div>
</section>

<div class="container gallery">
  <div class="gallery-grid">
    <div class="ph-photo main has-photo" style="background-image:var(--img-ocean-blvd-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="18 Ocean Blvd exterior at dusk" onclick="openLightbox(0)"></div>
    <div class="thumb-col">
      <div class="ph-photo has-photo" style="background-image:var(--img-ocean-blvd-04), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Deck, fire pit, and treeline view" onclick="openLightbox(1)"></div>
      <div class="ph-photo has-photo" style="background-image:var(--img-ocean-blvd-03), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Vaulted great room with leather sectional" onclick="openLightbox(2)"></div>
      <div class="ph-photo has-photo" style="background-image:var(--img-ocean-blvd-02), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Covered hot tub under the deck" onclick="openLightbox(3)"></div>
    </div>
    <button class="view-all-btn" onclick="openLightbox(0)">View all photos</button>
  </div>
</div>

<div class="container">
  <div class="stats-strip">
    <div class="stat-box"><div class="num">5</div><div class="lbl">Bedrooms</div></div>
    <div class="stat-box"><div class="num">3</div><div class="lbl">Bathrooms</div></div>
    <div class="stat-box"><div class="num">8–10</div><div class="lbl">Guests</div></div>
  </div>

  <div class="content-grid">
    <div>

      <section class="block">
        <h2>About this home</h2>
        <p>Perched above the treeline with sweeping sunset views, 18 Ocean Blvd is a five-bedroom coastal retreat built for gathering. Floor-to-ceiling windows fill the vaulted great room with light, while the wraparound deck — strung with lights and anchored by a private fire pit — becomes the natural heart of every evening.</p>
        <p>Soak in the covered hot tub after a day at the coast, cook together in the open kitchen, or simply watch the sky change color from the upper deck. This is a home designed for slow mornings, long dinners, and the kind of trip your family will want to repeat every year.</p>
      </section>

      <section class="block timeline-section">
        <h2>A Day at 18 Ocean Blvd</h2>
        <p class="section-sub">This is a home built around the rhythm of a coastal day — not just a place to sleep.</p>
        <div class="timeline">
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.3M12 19.2v2.3M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"/></svg></span>
            <span class="t-time">Morning</span>
            <p>Coffee on the upper deck as fog lifts off the treeline.</p>
          </div>
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 14.5c1.6-2 3.6-2 5.2 0s3.6 2 5.2 0 3.6-2 5.2 0 3.6 2 5.2 0"/><path d="M2 9.5c1.6-2 3.6-2 5.2 0s3.6 2 5.2 0 3.6-2 5.2 0 3.6 2 5.2 0"/></svg></span>
            <span class="t-time">Afternoon</span>
            <p>A short drive to Driftwood Dunes, back in time for lunch on the deck.</p>
          </div>
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c3.9 0 7-2.9 7-6.8 0-2.7-1.6-4.6-2.8-6.2-.4 1.7-1.5 2.5-1.5 2.5.3-2.8-.7-5.6-3.2-7.3.2 2.6-.6 4.3-2.3 6.1C7.8 10.7 7 12.5 7 14.2 7 18.1 8.9 21 12 21z"/></svg></span>
            <span class="t-time">Evening</span>
            <p>Dinner from the open kitchen, then the fire pit as the sky turns pink.</p>
          </div>
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.8A8.2 8.2 0 1 1 9.2 4a6.8 6.8 0 0 0 10.8 10.8z"/></svg></span>
            <span class="t-time">Night</span>
            <p>The covered hot tub, string lights, and a sky full of stars.</p>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Amenities</h2>
        <div class="amenity-grid">
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5a12 12 0 0 1 16 0"/><path d="M7.5 15a7.5 7.5 0 0 1 9 0"/><circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none"/></svg></span>WiFi Throughout</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c3.9 0 7-2.9 7-6.8 0-2.7-1.6-4.6-2.8-6.2-.4 1.7-1.5 2.5-1.5 2.5.3-2.8-.7-5.6-3.2-7.3.2 2.6-.6 4.3-2.3 6.1C7.8 10.7 7 12.5 7 14.2 7 18.1 8.9 21 12 21z"/></svg></span>Private Fire Pit</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3c0 1.4-1.4 1.6-1.4 3s1.4 1.6 1.4 3"/><path d="M12.5 3c0 1.4-1.4 1.6-1.4 3s1.4 1.6 1.4 3"/><path d="M18.5 3c0 1.4-1.4 1.6-1.4 3s1.4 1.6 1.4 3"/><rect x="3" y="12.5" width="18" height="7" rx="2"/></svg></span>Covered Hot Tub</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="13.5" r="6.5"/><path d="M19.5 4.5 15 9"/></svg></span>Full Kitchen</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 7.5 9.5h2.8L6 16h4.5v5h3v-5H18l-4.3-6.5h2.8z"/></svg></span>Wraparound Deck</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16.5V11l2-5.5h12l2 5.5v5.5"/><path d="M4 16.5h16"/><circle cx="7.5" cy="17" r="1.4" fill="currentColor" stroke="none"/><circle cx="16.5" cy="17" r="1.4" fill="currentColor" stroke="none"/></svg></span>Private Parking</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7"/><circle cx="12" cy="13" r="3"/><path d="M7.5 6.5 8.5 4M16.5 6.5 15.5 4"/></svg></span>In-Unit Laundry</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17.5V21"/></svg></span>Smart TV / Streaming</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="7.2" cy="8.5" r="1.6"/><circle cx="12" cy="6.3" r="1.6"/><circle cx="16.8" cy="8.5" r="1.6"/><path d="M12 10.8c-3 0-5.6 2.3-5.6 5 0 1.8 1.5 2.8 3.1 2.2.9-.3 1.7-.4 2.5-.4s1.6.1 2.5.4c1.6.6 3.1-.4 3.1-2.2 0-2.7-2.6-5-5.6-5z"/></svg></span>Pet Friendly</div>
        </div>
      </section>

      <section class="block">
        <h2>Sleeping arrangements</h2>
        <div class="sleep-grid">
          <div class="sleep-card"><h4>Primary Suite</h4><p>1 King bed, en-suite bath, deck access</p></div>
          <div class="sleep-card"><h4>Bedroom Two</h4><p>1 Queen bed, treeline view</p></div>
          <div class="sleep-card"><h4>Bedroom Three</h4><p>2 Twin beds, ideal for kids</p></div>
          <div class="sleep-card"><h4>Bedroom Four</h4><p>1 Queen bed, shared bath</p></div>
          <div class="sleep-card"><h4>Bedroom Five</h4><p>1 Queen bed, ground floor</p></div>
          <div class="sleep-card"><h4>Living Room</h4><p>Sofa sleeper, extra guests</p></div>
        </div>
      </section>

      <section class="block host-card" id="host">
        <div class="host-avatar">ER</div>
        <div>
          <span class="host-badge">✓ Superhost</span>
          <h3>Hosted by Elena R.</h3>
          <p class="host-meta">4.98 rating · Hosting since 2019 · Usually responds within an hour</p>
          <p class="host-blurb">"We built this house for our own family first — every detail, from the fire pit to the reading nook, comes from years of our own summers here."</p>
          <a class="btn btn-outline btn-sm" href="/#contact">Message Elena</a>
        </div>
      </section>

      <section class="block">
        <h2>House rules &amp; nearby attractions</h2>
        <div class="rules-box">
          <div>
            <h3 style="font-size:1rem;">House Rules</h3>
            <ul>
              <li>Check-in after 4:00 PM</li>
              <li>Check-out before 10:00 AM</li>
              <li>No smoking anywhere on property</li>
              <li>Quiet hours after 9:00 PM</li>
              <li>Pets welcome with prior approval</li>
            </ul>
          </div>
          <div>
            <h3 style="font-size:1rem;">Getting There</h3>
            <ul>
              <li>25 min from Bowerman Airport (HQM)</li>
              <li>2 hrs 15 min drive from Seattle</li>
              <li>Private driveway parking for 4 vehicles</li>
              <li>Exact address shared after booking confirmation</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="block">
        <div class="attraction-grid">
          <div class="ph-photo attraction-card has-photo" style="align-items:flex-start; background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Ultimate%20Seafood%20Platter%20at%20Landry%27s%20Seafood%20House.jpg?width=600')" role="img" aria-label="Wood-fired seafood platter">
            <span class="tag">Restaurant</span>
          </div>
          <div class="ph-photo attraction-card has-photo" style="align-items:flex-start; background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Inside%20Bridgehead%20Coffee%20Shop%20%2829685669166%29.jpg?width=600')" role="img" aria-label="Cozy harbor-view coffee shop interior">
            <span class="tag">Coffee</span>
          </div>
          <div class="ph-photo attraction-card has-photo" style="align-items:flex-start; background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20shelter%20at%20Ocean%20Shores%2C%20WA%2002.jpg?width=600')" role="img" aria-label="Boardwalk and dunes at Ocean Shores">
            <span class="tag">Park</span>
          </div>
        </div>
        <div class="attraction-grid" style="margin-top:12px;">
          <div class="attraction-caption">
            <span class="a-title">The Salted Plank</span><span class="a-sub">Wood-fired seafood · 8 min drive</span>
          </div>
          <div class="attraction-caption">
            <span class="a-title">Tidewater Coffee Roasters</span><span class="a-sub">Small-batch, harbor view · 6 min drive</span>
          </div>
          <div class="attraction-caption">
            <span class="a-title">Driftwood Dunes Park</span><span class="a-sub">Boardwalk trails · 10 min drive</span>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Location</h2>
        <div class="map-box"><iframe title="Map" src="https://www.google.com/maps?q=Ocean+Shores,+Washington&output=embed&z=12" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        <p class="map-caption"><strong>Ocean Shores, Washington</strong> · Exact address shared after booking</p>
      </section>

      <section class="block">
        <div class="reviews-head">
          <h2 style="margin:0;">Guest reviews <span style="font-size:1rem; color:var(--maroon);">★ 4.98 (212)</span></h2>
          <a href="/reviews">See all 212 reviews →</a>
        </div>
        <div class="review-grid">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Absolutely stunning home. Every corner was thoughtfully designed and the location could not be beat."</p>
            <div class="who"><strong>Sophia Bennett</strong><br>March 2026</div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The host went above and beyond. We'll be booking again next season without hesitation."</p>
            <div class="who"><strong>Marcus Lee</strong><br>February 2026</div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Spotless, serene, and full of character. Photos don't do this place justice."</p>
            <div class="who"><strong>Ava Rodriguez</strong><br>January 2026</div>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Frequently asked questions</h2>
        <details class="faq-item">
          <summary>How far is the nearest beach?</summary>
          <p>Driftwood Dunes Park is a short 10-minute drive, with several coves within walking distance once you arrive.</p>
        </details>
        <details class="faq-item">
          <summary>Is the hot tub private?</summary>
          <p>Yes — the covered hot tub is exclusively for guests staying at 18 Ocean Blvd, accessible directly from the deck.</p>
        </details>
        <details class="faq-item">
          <summary>Do you provide beach gear?</summary>
          <p>Beach chairs, towels, and a fire-pit starter kit are provided. Bikes are available on request.</p>
        </details>
        <details class="faq-item">
          <summary>What is the cancellation policy for this property?</summary>
          <p>Full refund for cancellations made 30 days or more before check-in. See our full policy for details.</p>
        </details>
      </section>

      <section class="block">
        <h2>Similar stays you may love</h2>
        <div class="similar-grid">
          <a href="/properties/cedar-hollow-cabin" style="text-decoration:none; color:inherit;">
          <div class="similar-card">
            <div class="ph-photo has-photo" style="background-image:var(--img-cedar-hollow-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Cedar Hollow Cabin"></div>
            <div class="similar-body">
              <div><h4>Cedar Hollow Cabin</h4><span class="loc">📍 Leavenworth, Washington · ★4.92</span></div>
              <span class="price">$189/night</span>
            </div>
          </div>
          </a>
          <a href="/properties/firelight-cottage" style="text-decoration:none; color:inherit;">
          <div class="similar-card">
            <div class="ph-photo has-photo" style="background-image:var(--img-firelight-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Firelight Cottage"></div>
            <div class="similar-body">
              <div><h4>Firelight Cottage</h4><span class="loc">📍 Princeville, Kauai, HI · ★4.95</span></div>
              <span class="price">$415/night</span>
            </div>
          </div>
          </a>
        </div>
      </section>

    </div>

    <aside class="booking-card" id="booking">
      <div class="booking-head">
        <div class="ph-photo booking-thumb has-photo" style="background-image:var(--img-ocean-blvd-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="18 Ocean Blvd"></div>
        <div>
          <div class="booking-price">$412 <span>/ night</span></div>
          <div class="booking-rating">★ 4.98 (212)</div>
        </div>
      </div>

      <div class="date-range-label" id="dateRangeLabel">Select your dates</div>

      <div class="calendar">
        <div class="cal-month">August 2026</div>
        <div class="cal-grid">
          <div class="dow">Su</div><div class="dow">Mo</div><div class="dow">Tu</div><div class="dow">We</div><div class="dow">Th</div><div class="dow">Fr</div><div class="dow">Sa</div>
          <div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div><div class="cal-day blank"></div>
          <div class="cal-day" data-day="1" onclick="pick(this)">1</div>
          <div class="cal-day" data-day="2" onclick="pick(this)">2</div>
          <div class="cal-day" data-day="3" onclick="pick(this)">3</div>
          <div class="cal-day" data-day="4" onclick="pick(this)">4</div>
          <div class="cal-day" data-day="5" onclick="pick(this)">5</div>
          <div class="cal-day unavail" data-day="6">6</div>
          <div class="cal-day unavail" data-day="7">7</div>
          <div class="cal-day" data-day="8" onclick="pick(this)">8</div>
          <div class="cal-day" data-day="9" onclick="pick(this)">9</div>
          <div class="cal-day" data-day="10" onclick="pick(this)">10</div>
          <div class="cal-day" data-day="11" onclick="pick(this)">11</div>
          <div class="cal-day" data-day="12" onclick="pick(this)">12</div>
          <div class="cal-day" data-day="13" onclick="pick(this)">13</div>
          <div class="cal-day" data-day="14" onclick="pick(this)">14</div>
          <div class="cal-day" data-day="15" onclick="pick(this)">15</div>
          <div class="cal-day" data-day="16" onclick="pick(this)">16</div>
          <div class="cal-day" data-day="17" onclick="pick(this)">17</div>
          <div class="cal-day unavail" data-day="18">18</div>
          <div class="cal-day unavail" data-day="19">19</div>
          <div class="cal-day" data-day="20" onclick="pick(this)">20</div>
          <div class="cal-day" data-day="21" onclick="pick(this)">21</div>
          <div class="cal-day" data-day="22" onclick="pick(this)">22</div>
          <div class="cal-day" data-day="23" onclick="pick(this)">23</div>
          <div class="cal-day" data-day="24" onclick="pick(this)">24</div>
          <div class="cal-day" data-day="25" onclick="pick(this)">25</div>
          <div class="cal-day" data-day="26" onclick="pick(this)">26</div>
          <div class="cal-day" data-day="27" onclick="pick(this)">27</div>
          <div class="cal-day" data-day="28" onclick="pick(this)">28</div>
          <div class="cal-day" data-day="29" onclick="pick(this)">29</div>
          <div class="cal-day" data-day="30" onclick="pick(this)">30</div>
          <div class="cal-day" data-day="31" onclick="pick(this)">31</div>
        </div>
      </div>

      <span class="field-label">Guests</span>
      <select>
        <option>6 guests</option>
        <option>4 guests</option>
        <option>8 guests</option>
        <option>10 guests</option>
      </select>

      <a class="btn btn-primary btn-full" href="#">Reserve — Book Direct</a>
      <div style="text-align:center; font-size:.72rem; color:var(--ink-faint); margin-top:8px;">You won't be charged yet</div>

      <div class="price-lines">
        <div><span id="nightsLabel">$412 × 4 nights</span><span id="subtotalVal">$1,648</span></div>
        <div><span>Cleaning fee</span><span>$140</span></div>
        <div><span>Service fee</span><span>$0</span></div>
        <div class="total"><span>Total</span><span id="totalVal">$1,788</span></div>
      </div>

      <div class="trust-row">
        🔒 Secure checkout &nbsp;·&nbsp; ✓ Best-rate guarantee<br>↺ Free cancellation, 30 days
      </div>
      <a class="ask-link" href="/#contact">Have a question? Ask Elena</a>
    </aside>
  </div>
</div>

<div class="lightbox" id="lightbox">
  <div class="lightbox-inner">
    <div class="lightbox-topbar">
      <span class="lightbox-counter" id="lightboxCounter">1 / 4</span>
      <button class="lightbox-close" onclick="closeLightbox()">Close ✕</button>
    </div>
    <div class="lightbox-stage">
      <div class="lightbox-arrow lightbox-prev" onclick="prevPhoto()" aria-label="Previous photo">‹</div>
      <div class="lightbox-photo" id="lightboxPhoto"></div>
      <div class="lightbox-arrow lightbox-next" onclick="nextPhoto()" aria-label="Next photo">›</div>
    </div>
    <div class="lightbox-caption" id="lightboxCaption"></div>
    <div class="lightbox-thumbs" id="lightboxThumbs"></div>
  </div>
</div>

</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <h5 style="color:#EDD9BC; font-family:'Playfair Display',serif; font-size:1.1rem; text-transform:none; letter-spacing:0;">Savage <em>Vacations</em></h5>
        <p>Handpicked luxury vacation homes across the Washington coast and Hawaii, designed for unforgettable experiences.</p>
        <div class="footer-social" aria-label="Follow Savage Vacations on social media">
          <a href="#" class="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.1C15.9 4 15 4 14 4c-2.2 0-3.7 1.3-3.7 3.8V10H7.7v3h2.6V21h3.2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.2-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.2-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.2 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M16.6 2h-3.1v13.6c0 1.4-1.1 2.5-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5.3 0 .5 0 .8.1V10c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4S8 20.7 11 20.7s5.4-2.4 5.4-5.4V8.3c1.2.9 2.7 1.4 4.3 1.4V6.6c-2.3 0-4.1-1.9-4.1-4.2V2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22 12s0-3-.4-4.4a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.6a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.4a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.6a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12zM10 15V9l5.2 3-5.2 3z"/></svg></a>
        </div>
      </div>
      <div>
        <h5>Quick Links</h5>
        <a href="/">Home</a><a href="/properties">Properties</a><a href="/#faq">FAQ</a>
      </div>
      <div>
        <h5>Contact</h5>
        <a href="mailto:stay@savagevacations.com">stay@savagevacations.com</a><a href="tel:+15552478239">+1 (555) 247-8239</a>
      </div>
      <div>
        <h5>Newsletter</h5>
        <p>Join our list for exclusive stays &amp; early access.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Savage Vacations. All rights reserved.</span>
      <span>Direct Booking Hub — sample concept prepared for client review</span>
    </div>
  </div>
</footer>

<div class="mobile-bar">
  <div><strong>$412</strong> <span style="font-size:.78rem; color:var(--ink-faint);">/ night · ★4.98</span></div>
  <a class="btn btn-primary btn-sm" href="#booking">Reserve</a>
</div>`;

const script = `let checkin = null, checkout = null;

  function pick(el){
    const day = parseInt(el.dataset.day, 10);
    if(checkin === null || (checkin && checkout)){
      clearSelection();
      checkin = day;
      el.classList.add('sel-start');
    } else if(day > checkin){
      checkout = day;
      highlightRange();
    } else {
      clearSelection();
      checkin = day;
      el.classList.add('sel-start');
    }
    updateSummary();
  }

  function clearSelection(){
    document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('sel-start','sel-end','in-range'));
    checkin = null; checkout = null;
  }

  function highlightRange(){
    document.querySelectorAll('.cal-day[data-day]').forEach(d => {
      const day = parseInt(d.dataset.day, 10);
      if(day === checkin) d.classList.add('sel-start');
      else if(day === checkout) d.classList.add('sel-end');
      else if(day > checkin && day < checkout) d.classList.add('in-range');
    });
  }

  function updateSummary(){
    const rate = 412, cleaning = 140;
    const nights = (checkin && checkout) ? (checkout - checkin) : 4;
    const subtotal = nights * rate;
    const total = subtotal + cleaning;
    document.getElementById('nightsLabel').textContent = \`$\${rate} × \${nights} night\${nights !== 1 ? 's' : ''}\`;
    document.getElementById('subtotalVal').textContent = \`$\${subtotal.toLocaleString()}\`;
    document.getElementById('totalVal').textContent = \`$\${total.toLocaleString()}\`;
    document.getElementById('dateRangeLabel').textContent = (checkin && checkout)
      ? \`Aug \${checkin} – Aug \${checkout}, 2026\`
      : 'Select your dates';
  }

  const galleryPhotos = [
    { v: '--img-ocean-blvd-01', label: 'Exterior at dusk' },
    { v: '--img-ocean-blvd-04', label: 'Deck, fire pit, and treeline view' },
    { v: '--img-ocean-blvd-03', label: 'Vaulted great room with leather sectional' },
    { v: '--img-ocean-blvd-02', label: 'Covered hot tub under the deck' }
  ];
  let lightboxIndex = 0;

  function renderLightbox(){
    const photo = galleryPhotos[lightboxIndex];
    const stage = document.getElementById('lightboxPhoto');
    stage.style.backgroundImage = \`var(\${photo.v})\`;
    document.getElementById('lightboxCaption').textContent = photo.label;
    document.getElementById('lightboxCounter').textContent = \`\${lightboxIndex + 1} / \${galleryPhotos.length}\`;
    const thumbs = document.getElementById('lightboxThumbs');
    thumbs.innerHTML = galleryPhotos.map((p, i) =>
      \`<div class="lightbox-thumb\${i === lightboxIndex ? ' active' : ''}" style="background-image:var(\${p.v})" onclick="jumpToPhoto(\${i})"></div>\`
    ).join('');
  }

  function openLightbox(index){ lightboxIndex = index || 0; renderLightbox(); document.getElementById('lightbox').classList.add('open'); }
  function closeLightbox(){ document.getElementById('lightbox').classList.remove('open'); }
  function nextPhoto(){ lightboxIndex = (lightboxIndex + 1) % galleryPhotos.length; renderLightbox(); }
  function prevPhoto(){ lightboxIndex = (lightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length; renderLightbox(); }
  function jumpToPhoto(i){ lightboxIndex = i; renderLightbox(); }

  document.getElementById('lightbox').addEventListener('click', function(e){
    if(e.target === this) closeLightbox();
  });
  document.addEventListener('keydown', function(e){
    if(!document.getElementById('lightbox').classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') nextPhoto();
    if(e.key === 'ArrowLeft') prevPhoto();
  });`;

function PropOceanPage() {
  return <PageShell html={html} script={script} />;
}
