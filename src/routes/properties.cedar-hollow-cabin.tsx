import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/properties/cedar-hollow-cabin")({
  head: () => ({
    meta: [
      { title: "Cedar Hollow Cabin \u2014 Leavenworth Mountain Escape | Savage Vacations" },
      { name: "description", content: "A cozy 1-bedroom cabin with a sleeping loft outside Leavenworth, WA. Private hot tub under a forest gazebo, walk to the Bavarian village \u2014 book direct for zero service fees." },
      { property: "og:title", content: "Cedar Hollow Cabin \u2014 Leavenworth Mountain Escape | Savage Vacations" },
      { property: "og:description", content: "A cozy cabin outside Leavenworth, WA, with a private hot tub under a forest gazebo and an easy walk to the Bavarian village. Book direct for zero service fees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Leavenworth%2C%20WA%20-%20Obertal%20Mall%20and%20Inn.jpg" },
      { name: "twitter:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Leavenworth%2C%20WA%20-%20Obertal%20Mall%20and%20Inn.jpg" },
    ],
    links: [{ rel: "stylesheet", href: "/css/prop-cedar.css" }],
  }),
  component: PropCedarPage,
});

const html = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "name": "Cedar Hollow Cabin — Leavenworth Escape",
  "description": "A cozy one-bedroom cabin with a sleeping loft, tucked among evergreens outside Leavenworth, Washington, with a private hot tub under a forest gazebo.",
  "url": "https://www.savagevacations.com/properties/cedar-hollow-cabin",
  "telephone": "+1-555-247-8239",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leavenworth",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.59500,
    "longitude": -120.66278
  },
  "numberOfRooms": 1,
  "petsAllowed": true,
  "containsPlace": {
    "@type": "Accommodation",
    "name": "Cedar Hollow Cabin",
    "numberOfBedrooms": 1,
    "numberOfBathroomsTotal": 1,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 4
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Private Hot Tub", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Fire Pit", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Forest Gazebo", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.92",
    "reviewCount": "86"
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
  <div class="breadcrumb-strip" style="margin-top:22px;">Home <span>/</span> Properties <span>/</span> Cedar Hollow Cabin</div>
</div>

<section class="page-head">
  <div class="container">
    <div class="eyebrow">Mountain Escape &nbsp;·&nbsp; Sleeps 4</div>
    <h1>Cedar Hollow Cabin — Leavenworth Escape</h1>
    <div class="meta-row">
      <span class="rating-badge">★ 4.92 · 86 reviews</span>
      <span class="location">📍 Leavenworth, Washington</span>
    </div>
  </div>
</section>

<div class="container gallery">
  <div class="gallery-grid">
    <div class="ph-photo main has-photo" style="background-image:var(--img-cedar-hollow-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Cedar Hollow Cabin living area and kitchen" onclick="openLightbox(0)"></div>
    <div class="thumb-col">
      <div class="ph-photo has-photo" style="background-image:var(--img-cedar-hollow-02), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Rustic kitchen with corrugated-metal accents" onclick="openLightbox(1)"></div>
      <div class="ph-photo has-photo" style="background-image:var(--img-cedar-hollow-03), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Private hot tub under the forest gazebo" onclick="openLightbox(2)"></div>
      <div class="ph-photo has-photo" style="background-image:var(--img-cedar-hollow-04), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Grassy yard among the evergreens" onclick="openLightbox(3)"></div>
    </div>
    <button class="view-all-btn" onclick="openLightbox(0)">View all photos</button>
  </div>
</div>

<div class="container">
  <div class="stats-strip">
    <div class="stat-box"><div class="num">1</div><div class="lbl">Bedroom + Loft</div></div>
    <div class="stat-box"><div class="num">1</div><div class="lbl">Bathroom</div></div>
    <div class="stat-box"><div class="num">2–4</div><div class="lbl">Guests</div></div>
  </div>

  <div class="content-grid">
    <div>

      <section class="block">
        <h2>About this home</h2>
        <p>Tucked among tall evergreens a short drive from Leavenworth's Bavarian village, Cedar Hollow Cabin is a snug wood-lined retreat built for two — or a small family piled onto the loft's second bed. Knotty pine walls, a vaulted ceiling, and a kitchen island make the whole cabin feel bigger than its footprint.</p>
        <p>Step outside to a private hot tub set under a timber-frame gazebo, with a fire pit and picnic tables scattered across the grassy, tree-lined lot. This is a cabin for quiet mountain mornings, easy walks into town, and evenings that end in the hot tub under a sky full of stars.</p>
      </section>

      <section class="block timeline-section">
        <h2>A Day at Cedar Hollow Cabin</h2>
        <p class="section-sub">This is a cabin built around the rhythm of a mountain day — not just a place to sleep.</p>
        <div class="timeline">
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.3M12 19.2v2.3M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"/></svg></span>
            <span class="t-time">Morning</span>
            <p>Coffee on the porch as light filters through the pines.</p>
          </div>
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l4-5 4 5v11"/><path d="M13 21v-7l4-4 4 4v7"/><path d="M3 21h18M7 14h0M17 15h0"/></svg></span>
            <span class="t-time">Afternoon</span>
            <p>An easy walk into Leavenworth's Bavarian village for lunch and a wander.</p>
          </div>
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c3.9 0 7-2.9 7-6.8 0-2.7-1.6-4.6-2.8-6.2-.4 1.7-1.5 2.5-1.5 2.5.3-2.8-.7-5.6-3.2-7.3.2 2.6-.6 4.3-2.3 6.1C7.8 10.7 7 12.5 7 14.2 7 18.1 8.9 21 12 21z"/></svg></span>
            <span class="t-time">Evening</span>
            <p>A fire pit dinner as the forest quiets down around you.</p>
          </div>
          <div class="t-item">
            <span class="t-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.8A8.2 8.2 0 1 1 9.2 4a6.8 6.8 0 0 0 10.8 10.8z"/></svg></span>
            <span class="t-time">Night</span>
            <p>The private hot tub under the gazebo, and a sky full of stars.</p>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Amenities</h2>
        <div class="amenity-grid">
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5a12 12 0 0 1 16 0"/><path d="M7.5 15a7.5 7.5 0 0 1 9 0"/><circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none"/></svg></span>WiFi Throughout</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3c0 1.4-1.4 1.6-1.4 3s1.4 1.6 1.4 3"/><path d="M12.5 3c0 1.4-1.4 1.6-1.4 3s1.4 1.6 1.4 3"/><path d="M18.5 3c0 1.4-1.4 1.6-1.4 3s1.4 1.6 1.4 3"/><rect x="3" y="12.5" width="18" height="7" rx="2"/></svg></span>Private Hot Tub</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c3.9 0 7-2.9 7-6.8 0-2.7-1.6-4.6-2.8-6.2-.4 1.7-1.5 2.5-1.5 2.5.3-2.8-.7-5.6-3.2-7.3.2 2.6-.6 4.3-2.3 6.1C7.8 10.7 7 12.5 7 14.2 7 18.1 8.9 21 12 21z"/></svg></span>Fire Pit &amp; Gazebo</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="13.5" r="6.5"/><path d="M19.5 4.5 15 9"/></svg></span>Full Kitchen</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 7.5 9.5h2.8L6 16h4.5v5h3v-5H18l-4.3-6.5h2.8z"/></svg></span>Screened Porch</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16.5V11l2-5.5h12l2 5.5v5.5"/><path d="M4 16.5h16"/><circle cx="7.5" cy="17" r="1.4" fill="currentColor" stroke="none"/><circle cx="16.5" cy="17" r="1.4" fill="currentColor" stroke="none"/></svg></span>Private + RV Parking</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M5 6.5l14 11M19 6.5l-14 11"/></svg></span>Heat &amp; A/C</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17.5V21"/></svg></span>Smart TV / Streaming</div>
          <div class="amenity-card"><span class="a-icon"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="7.2" cy="8.5" r="1.6"/><circle cx="12" cy="6.3" r="1.6"/><circle cx="16.8" cy="8.5" r="1.6"/><path d="M12 10.8c-3 0-5.6 2.3-5.6 5 0 1.8 1.5 2.8 3.1 2.2.9-.3 1.7-.4 2.5-.4s1.6.1 2.5.4c1.6.6 3.1-.4 3.1-2.2 0-2.7-2.6-5-5.6-5z"/></svg></span>Pet Friendly</div>
        </div>
      </section>

      <section class="block">
        <h2>Sleeping arrangements</h2>
        <div class="sleep-grid">
          <div class="sleep-card"><h4>Sleeping Loft</h4><p>1 Queen bed, ladder access</p></div>
          <div class="sleep-card"><h4>Living Room</h4><p>Queen sofa sleeper, extra guests</p></div>
        </div>
      </section>

      <section class="block host-card" id="host">
        <div class="host-avatar">DK</div>
        <div>
          <span class="host-badge">✓ Superhost</span>
          <h3>Hosted by Daniel K.</h3>
          <p class="host-meta">4.92 rating · Hosting since 2021 · Usually responds within a few hours</p>
          <p class="host-blurb">"We wanted a cabin that felt like a treehouse for grown-ups — small enough to feel cozy, with a hot tub view of nothing but trees."</p>
          <a class="btn btn-outline btn-sm" href="/#contact">Message Daniel</a>
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
              <li>15 min from downtown Leavenworth</li>
              <li>2 hrs 30 min drive from Seattle</li>
              <li>Gravel driveway parking, including RV/trailer pad</li>
              <li>Exact address shared after booking confirmation</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="block">
        <div class="attraction-grid">
          <div class="ph-photo attraction-card has-photo" style="align-items:flex-start; background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Leavenworth%2C%20WA%20-%20Obertal%20Mall%20and%20Inn.jpg?width=600')" role="img" aria-label="Bavarian-style village street in Leavenworth">
            <span class="tag">Restaurant</span>
          </div>
          <div class="ph-photo attraction-card has-photo" style="align-items:flex-start; background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Inside%20Bridgehead%20Coffee%20Shop%20%2829685669166%29.jpg?width=600')" role="img" aria-label="Cozy bakery-cafe interior">
            <span class="tag">Coffee</span>
          </div>
          <div class="ph-photo attraction-card has-photo" style="align-items:flex-start; background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Icicle%20Creek%20%28Washington%29.JPG?width=600')" role="img" aria-label="Icicle Creek forest trail">
            <span class="tag">Park</span>
          </div>
        </div>
        <div class="attraction-grid" style="margin-top:12px;">
          <div class="attraction-caption">
            <span class="a-title">München Haus</span><span class="a-sub">Bavarian sausages &amp; beer garden · 15 min drive</span>
          </div>
          <div class="attraction-caption">
            <span class="a-title">Argonaut Espresso Bar</span><span class="a-sub">Village coffee &amp; pastries · 15 min drive</span>
          </div>
          <div class="attraction-caption">
            <span class="a-title">Icicle Creek Nature Trail</span><span class="a-sub">Wheelchair-accessible river trail · 12 min drive</span>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Location</h2>
        <div class="map-box"><iframe title="Map" src="https://www.google.com/maps?q=Leavenworth,+Washington&output=embed&z=12" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        <p class="map-caption"><strong>Leavenworth, Washington</strong> · Exact address shared after booking</p>
      </section>

      <section class="block">
        <div class="reviews-head">
          <h2 style="margin:0;">Guest reviews <span style="font-size:1rem; color:var(--maroon);">★ 4.92 (86)</span></h2>
          <a href="/reviews">See all 86 reviews →</a>
        </div>
        <div class="review-grid">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Felt like staying in a treehouse. The hot tub under the gazebo at night was the highlight of our trip."</p>
            <div class="who"><strong>Priya Nair</strong><br>March 2026</div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"So much bigger than it looks in photos, and an easy walk into town for dinner. We'll be back."</p>
            <div class="who"><strong>Jonah Fischer</strong><br>February 2026</div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Quiet, cozy, and spotless. Exactly the mountain reset we were looking for."</p>
            <div class="who"><strong>Grace Whitfield</strong><br>January 2026</div>
          </div>
        </div>
      </section>

      <section class="block">
        <h2>Frequently asked questions</h2>
        <details class="faq-item">
          <summary>How far is it into Leavenworth?</summary>
          <p>The Bavarian village is about a 15-minute drive, with the Icicle Creek Nature Trail even closer.</p>
        </details>
        <details class="faq-item">
          <summary>Is the hot tub private?</summary>
          <p>Yes — the gazebo hot tub is exclusively for guests staying at Cedar Hollow Cabin.</p>
        </details>
        <details class="faq-item">
          <summary>Can I bring an RV or trailer?</summary>
          <p>Yes, there's a dedicated gravel parking pad alongside the driveway for RVs and trailers.</p>
        </details>
        <details class="faq-item">
          <summary>What is the cancellation policy for this property?</summary>
          <p>Full refund for cancellations made 30 days or more before check-in. See our full policy for details.</p>
        </details>
      </section>

      <section class="block">
        <h2>Similar stays you may love</h2>
        <div class="similar-grid">
          <a href="/properties/18-ocean-blvd" style="text-decoration:none; color:inherit;">
          <div class="similar-card">
            <div class="ph-photo has-photo" style="background-image:var(--img-ocean-blvd-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="18 Ocean Blvd"></div>
            <div class="similar-body">
              <div><h4>18 Ocean Blvd — Coastal Retreat</h4><span class="loc">📍 Ocean Shores, Washington · ★4.98</span></div>
              <span class="price">$412/night</span>
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
        <div class="ph-photo booking-thumb has-photo" style="background-image:var(--img-cedar-hollow-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Cedar Hollow Cabin"></div>
        <div>
          <div class="booking-price">$189 <span>/ night</span></div>
          <div class="booking-rating">★ 4.92 (86)</div>
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

      <label class="field-label" for="bookingGuests">Guests</label>
      <select id="bookingGuests">
        <option>2 guests</option>
        <option>3 guests</option>
        <option>4 guests</option>
      </select>

      <a class="btn btn-primary btn-full" href="#">Reserve — Book Direct</a>
      <div style="text-align:center; font-size:.72rem; color:var(--ink-faint); margin-top:8px;">You won't be charged yet</div>

      <div class="price-lines">
        <div><span id="nightsLabel">$189 × 4 nights</span><span id="subtotalVal">$756</span></div>
        <div><span>Cleaning fee</span><span>$95</span></div>
        <div><span>Service fee</span><span>$0</span></div>
        <div class="total"><span>Total</span><span id="totalVal">$851</span></div>
      </div>

      <div class="trust-row">
        🔒 Secure checkout &nbsp;·&nbsp; ✓ Best-rate guarantee<br>↺ Free cancellation, 30 days
      </div>
      <a class="ask-link" href="/#contact">Have a question? Ask Daniel</a>
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
  <div><strong>$189</strong> <span style="font-size:.78rem; color:var(--ink-faint);">/ night · ★4.92</span></div>
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
    const rate = 189, cleaning = 95;
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
    { v: '--img-cedar-hollow-01', label: 'Living area and kitchen' },
    { v: '--img-cedar-hollow-02', label: 'Rustic kitchen with corrugated-metal accents' },
    { v: '--img-cedar-hollow-03', label: 'Private hot tub under the forest gazebo' },
    { v: '--img-cedar-hollow-04', label: 'Grassy yard among the evergreens' }
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

function PropCedarPage() {
  return <PageShell html={html} script={script} />;
}
