import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { name: "description", content: "Read real guest reviews of Savage Vacations properties across the Washington coast and Hawaii \u2014 4.96 average rating across 448+ stays, booked direct." },
      { property: "og:title", content: "Guest Reviews | Savage Vacations" },
      { property: "og:description", content: "Real guest reviews from stays across the Washington coast and Hawaii \u2014 4.96 average rating, booked direct with Savage Vacations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: "/css/reviews.css" }],
  }),
  component: ReviewsPage,
});

const html = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Savage Vacations",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.96",
    "reviewCount": "448"
  }
}
</script>

<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/"><span class="logo-mark">S</span>Savage <em>Vacations</em></a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/properties">Properties</a>
      <a href="/guides">Guides</a>
      <a href="/reviews" class="active">Reviews</a>
      <a href="/#contact">Contact Us</a>
    </nav>
    <div class="header-right">
      <a class="btn btn-primary btn-sm" href="/properties">Book Now</a>
    </div>
  </div>
</header>

<main>

<section class="page-head hero-photo">
  <div class="container">
    <div class="eyebrow" style="justify-content:center;">Guest Stories</div>
    <h1>Loved by travelers <em>across Washington &amp; Hawaii</em></h1>
    <p class="lede">Real words from real stays. Every review below comes from a guest who booked direct — no third-party filters, no incentivized reviews.</p>
  </div>
</section>

<div class="stats-strip">
  <div class="container stats-grid">
    <div><div class="num">4.96</div><div class="lbl">Average Rating</div></div>
    <div><div class="num">448+</div><div class="lbl">Guest Reviews</div></div>
    <div><div class="num">3</div><div class="lbl">Properties Reviewed</div></div>
    <div><div class="num">98%</div><div class="lbl">Would Book Again</div></div>
  </div>
</div>

<div class="container">
  <div class="filter-bar">
    <div>
      <label class="field-label" for="filterProperty">Property</label>
      <select id="filterProperty" onchange="applyReviewFilter()">
        <option value="all">All Properties</option>
        <option value="ocean-blvd">18 Ocean Blvd — Coastal Retreat</option>
        <option value="cedar-hollow">Cedar Hollow Cabin</option>
        <option value="firelight">Firelight Cottage</option>
      </select>
    </div>
    <div>
      <label class="field-label" for="sortReviews">Sort By</label>
      <select id="sortReviews" onchange="applyReviewFilter()">
        <option value="recent">Most Recent</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  </div>
  <div class="results-count" id="resultsCount">Showing 10 of 10 reviews</div>
</div>

<section class="review-section">
  <div class="container">
    <div class="review-grid" id="reviewGrid">

      <div class="review-card" data-property="ocean-blvd" data-rating="5" data-date="2026-03-15">
        <div class="stars">★★★★★</div>
        <p class="quote">"From the moment we arrived, everything about 18 Ocean Blvd exceeded expectations — the detail, the warmth, the sheer beauty of the surroundings."</p>
        <div class="who"><div class="who-avatar">A</div><div><span class="who-name">Alexandra M.</span><span class="who-loc">Seattle, Washington</span></div></div>
        <a class="review-property" href="/properties/18-ocean-blvd">Check Property →</a>
        <div class="review-date">March 2026</div>
      </div>

      <div class="review-card" data-property="ocean-blvd" data-rating="5" data-date="2026-02-20">
        <div class="stars">★★★★★</div>
        <p class="quote">"We brought the whole family and the house was nothing short of magical. The deck, the fire pit, the string lights — our kids are still talking about it."</p>
        <div class="who"><div class="who-avatar">JP</div><div><span class="who-name">James &amp; Priya K.</span><span class="who-loc">San Francisco, California</span></div></div>
        <a class="review-property" href="/properties/18-ocean-blvd">Check Property →</a>
        <div class="review-date">February 2026</div>
      </div>

      <div class="review-card" data-property="ocean-blvd" data-rating="5" data-date="2026-01-18">
        <div class="stars">★★★★★</div>
        <p class="quote">"Booking direct saved us almost $300 versus the listing site, and the host answered every message within minutes. We won't book anywhere else now."</p>
        <div class="who"><div class="who-avatar">C</div><div><span class="who-name">Charlotte R.</span><span class="who-loc">Portland, Oregon</span></div></div>
        <a class="review-property" href="/properties/18-ocean-blvd">Check Property →</a>
        <div class="review-date">January 2026</div>
      </div>

      <div class="review-card" data-property="ocean-blvd" data-rating="5" data-date="2026-03-02">
        <div class="stars">★★★★★</div>
        <p class="quote">"Absolutely stunning home. Every corner was thoughtfully designed and the location could not be beat."</p>
        <div class="who"><div class="who-avatar">SB</div><div><span class="who-name">Sophia Bennett</span><span class="who-loc">Bend, Oregon</span></div></div>
        <a class="review-property" href="/properties/18-ocean-blvd">Check Property →</a>
        <div class="review-date">March 2026</div>
      </div>

      <div class="review-card" data-property="cedar-hollow" data-rating="5" data-date="2026-03-05">
        <div class="stars">★★★★★</div>
        <p class="quote">"Felt like staying in a treehouse. The hot tub under the gazebo at night was the highlight of our trip."</p>
        <div class="who"><div class="who-avatar">PN</div><div><span class="who-name">Priya Nair</span><span class="who-loc">Bellevue, Washington</span></div></div>
        <a class="review-property" href="/properties/cedar-hollow-cabin">Check Property →</a>
        <div class="review-date">March 2026</div>
      </div>

      <div class="review-card" data-property="cedar-hollow" data-rating="5" data-date="2026-02-11">
        <div class="stars">★★★★★</div>
        <p class="quote">"So much bigger than it looks in photos, and an easy walk into town for dinner. We'll be back."</p>
        <div class="who"><div class="who-avatar">JF</div><div><span class="who-name">Jonah Fischer</span><span class="who-loc">Spokane, Washington</span></div></div>
        <a class="review-property" href="/properties/cedar-hollow-cabin">Check Property →</a>
        <div class="review-date">February 2026</div>
      </div>

      <div class="review-card" data-property="cedar-hollow" data-rating="5" data-date="2026-01-09">
        <div class="stars">★★★★★</div>
        <p class="quote">"Quiet, cozy, and spotless. Exactly the mountain reset we were looking for."</p>
        <div class="who"><div class="who-avatar">GW</div><div><span class="who-name">Grace Whitfield</span><span class="who-loc">Boise, Idaho</span></div></div>
        <a class="review-property" href="/properties/cedar-hollow-cabin">Check Property →</a>
        <div class="review-date">January 2026</div>
      </div>

      <div class="review-card" data-property="firelight" data-rating="5" data-date="2026-03-10">
        <div class="stars">★★★★★</div>
        <p class="quote">"The garden and hot tub sold us the second we walked in. We spent every evening out there."</p>
        <div class="who"><div class="who-avatar">MC</div><div><span class="who-name">Melissa Choi</span><span class="who-loc">Los Angeles, California</span></div></div>
        <a class="review-property" href="/properties/firelight-cottage">Check Property →</a>
        <div class="review-date">March 2026</div>
      </div>

      <div class="review-card" data-property="firelight" data-rating="5" data-date="2026-02-24">
        <div class="stars">★★★★★</div>
        <p class="quote">"Perfectly located for Hanalei Bay and so quiet at night. Kalani checked in without being intrusive."</p>
        <div class="who"><div class="who-avatar">EA</div><div><span class="who-name">Ethan Alofa</span><span class="who-loc">Honolulu, Hawaii</span></div></div>
        <a class="review-property" href="/properties/firelight-cottage">Check Property →</a>
        <div class="review-date">February 2026</div>
      </div>

      <div class="review-card" data-property="firelight" data-rating="5" data-date="2026-01-27">
        <div class="stars">★★★★★</div>
        <p class="quote">"Spacious, spotless, and the kitchen had everything we needed for a week with the kids."</p>
        <div class="who"><div class="who-avatar">RK</div><div><span class="who-name">Rachel Kim</span><span class="who-loc">Denver, Colorado</span></div></div>
        <a class="review-property" href="/properties/firelight-cottage">Check Property →</a>
        <div class="review-date">January 2026</div>
      </div>

    </div>

    <div class="google-badge-wrap">
      <span class="google-badge">★ 4.9 out of 5 — based on 340+ Google reviews, plus 108 direct guest reviews</span>
    </div>

    <div class="cta-banner">
      <div class="eyebrow">Your Next Adventure Awaits</div>
      <h2>Ready to write your own review?</h2>
      <p style="max-width:440px; margin:0 auto; color:#dccdaa;">Guaranteed lowest rates. Zero service fees. A real host, not a call center.</p>
      <div class="cta-ctas">
        <a class="btn btn-primary" href="/properties">Browse Properties →</a>
        <a class="btn btn-outline-light" href="/#contact">Contact Us</a>
      </div>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <h5 style="color:#EDD9BC; font-family:'Playfair Display',serif; font-size:1.1rem; text-transform:none; letter-spacing:0;">Savage <em>Vacations</em></h5>
        <p>Thoughtfully curated luxury vacation homes across Washington and Hawaii, designed for comfort, adventure, and unforgettable memories.</p>
        <div class="footer-social" aria-label="Follow Savage Vacations on social media">
          <a href="#" class="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.1C15.9 4 15 4 14 4c-2.2 0-3.7 1.3-3.7 3.8V10H7.7v3h2.6V21h3.2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.2-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.2-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.2 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M16.6 2h-3.1v13.6c0 1.4-1.1 2.5-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5.3 0 .5 0 .8.1V10c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4S8 20.7 11 20.7s5.4-2.4 5.4-5.4V8.3c1.2.9 2.7 1.4 4.3 1.4V6.6c-2.3 0-4.1-1.9-4.1-4.2V2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22 12s0-3-.4-4.4a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.6a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.4a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.6a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12zM10 15V9l5.2 3-5.2 3z"/></svg></a>
        </div>
      </div>
      <div><h5>Explore</h5><a href="/">Home</a><a href="/properties">Properties</a><a href="/guides">Guides</a><a href="/#faq">FAQ</a></div>
      <div><h5>Contact</h5><a href="mailto:stay@savagevacations.com">stay@savagevacations.com</a><a href="tel:+15552478239">+1 (555) 247-8239</a></div>
      <div><h5>Newsletter</h5><p>Curated stays &amp; seasonal offers, straight to your inbox.</p></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Savage Vacations. All rights reserved.</span>
      <span>Direct Booking Hub — sample concept prepared for client review</span>
    </div>
  </div>
</footer>`;

const script = `function applyReviewFilter(){
    const prop = document.getElementById('filterProperty').value;
    const sort = document.getElementById('sortReviews').value;
    const grid = document.getElementById('reviewGrid');
    const cards = Array.from(grid.querySelectorAll('.review-card'));

    let visibleCount = 0;
    cards.forEach(c => {
      const match = (prop === 'all') || (c.dataset.property === prop);
      c.style.display = match ? '' : 'none';
      if(match) visibleCount++;
    });

    const sorted = cards.filter(c => c.style.display !== 'none').sort((a,b) => {
      if(sort === 'rating'){
        return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
      }
      return new Date(b.dataset.date) - new Date(a.dataset.date);
    });
    sorted.forEach(c => grid.appendChild(c));

    document.getElementById('resultsCount').textContent = \`Showing \${visibleCount} of \${cards.length} reviews\`;
  }`;

function ReviewsPage() {
  return <PageShell html={html} script={script} />;
}
