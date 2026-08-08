import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/properties/")({
  head: () => ({
    meta: [
      { title: "All Properties | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { name: "description", content: "Browse all 12 curated Savage Vacations properties across the Washington coast and Hawaii. Filter by destination and guest count, then book direct \u2014 no service fees." },
      { property: "og:title", content: "All Properties | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { property: "og:description", content: "Browse all 12 curated Savage Vacations properties across the Washington coast and Hawaii. Filter by destination and guest count, then book direct \u2014 no service fees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20at%20Ocean%20Shores%2C%20WA%2001.jpg" },
      { name: "twitter:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20at%20Ocean%20Shores%2C%20WA%2001.jpg" },
    ],
    links: [{ rel: "stylesheet", href: "/css/properties.css" }],
  }),
  component: PropertiesPage,
});

const html = `<header class="site-header">
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
      <a class="btn btn-primary btn-sm" href="/#contact">Contact Us</a>
    </div>
  </div>
</header>

<main>

<div class="container">
  <div class="breadcrumb-strip">Home <span>/</span> Properties</div>

  <section class="page-head">
    <div class="eyebrow">All Properties</div>
    <h1>Explore Our Collection</h1>
    <p>12 curated homes across the Washington coast and Hawaii — every property personally vetted, every booking direct with zero service fees.</p>
  </section>

  <div class="filter-bar">
    <div>
      <label class="field-label" for="filterDestination">Destination</label>
      <select id="filterDestination">
        <option value="all">Anywhere</option>
        <option value="washington">Washington Coast</option>
        <option value="hawaii">Hawaii</option>
      </select>
    </div>
    <div>
      <label class="field-label" for="filterGuests">Guests</label>
      <select id="filterGuests">
        <option value="0">Any</option>
        <option value="2">2+ guests</option>
        <option value="4">4+ guests</option>
        <option value="6">6+ guests</option>
        <option value="8">8+ guests</option>
      </select>
    </div>
    <div>
      <label class="field-label" for="sortBy">Sort By</label>
      <select id="sortBy">
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
    <div class="date-field">
      <span class="field-label">Dates</span>
      <input type="text" id="dateInput" class="date-trigger" placeholder="Any dates" readonly onclick="togglePropDates()">
      <div class="date-popover" id="propDatePopover">
        <div class="date-popover-head">
          <span>Select your dates</span>
          <button type="button" class="popover-close" onclick="togglePropDates(false)">✕</button>
        </div>
        <div class="cal-month">August 2026</div>
        <div class="cal-grid" id="propCalGrid"></div>
        <div class="cal-legend"><span><span class="dot"></span>Available</span><span><span class="dot unavail"></span>Booked</span></div>
      </div>
    </div>
    <button class="btn btn-primary filter-btn" onclick="applyFilters()">Update Results</button>
  </div>

  <div class="results-row">
    <div class="results-count"><strong id="resultsCount">8</strong> of 12 properties shown</div>
    <a class="clear-filters" id="clearFilters" onclick="clearFilters()">Clear filters</a>
  </div>

  <section id="properties">
    <div class="property-grid" id="propertyGrid">

      <div class="property-card" data-region="washington" data-guests="10" data-price="412" data-rating="4.98">
        <div class="ph-photo has-photo" style="background-image:var(--img-ocean-blvd-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="18 Ocean Blvd exterior at dusk"><span class="card-tag">Signature Stay</span><span class="card-rating">★ 4.98</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Ocean Shores, Washington</div>
          <h2>18 Ocean Blvd — Coastal Retreat</h2>
          <div class="property-meta">5 Bed · 3 Bath · Sleeps 10</div>
          <div class="property-footer"><div class="price">$412 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="/properties/18-ocean-blvd">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="washington" data-guests="8" data-price="375" data-rating="4.89">
        <div class="ph-photo has-photo" style="background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20at%20Ocean%20Shores%2C%20WA%2001.jpg?width=700')" role="img" aria-label="Oceanfront view near Ocean Shores, Washington"><span class="card-tag">Oceanfront</span><span class="card-rating">★ 4.89</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Ocean Shores, Washington</div>
          <h2>Driftwood Point Villa</h2>
          <div class="property-meta">4 Bed · 3 Bath · Sleeps 8</div>
          <div class="property-footer"><div class="price">$375 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="#">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="washington" data-guests="4" data-price="189" data-rating="4.92">
        <div class="ph-photo has-photo" style="background-image:var(--img-cedar-hollow-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Cedar Hollow Cabin living area"><span class="card-tag">Cozy Getaway</span><span class="card-rating">★ 4.92</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Leavenworth, Washington</div>
          <h2>Cedar Hollow Cabin</h2>
          <div class="property-meta">1 Bed + Loft · 1 Bath · Sleeps 4</div>
          <div class="property-footer"><div class="price">$189 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="/properties/cedar-hollow-cabin">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="washington" data-guests="12" data-price="520" data-rating="4.94">
        <div class="ph-photo has-photo" style="background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Westport%2C%20WA%20-%20beach%20scene.jpg?width=700')" role="img" aria-label="Westport, Washington coastline"><span class="card-tag">Large Group</span><span class="card-rating">★ 4.94</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Westport, Washington</div>
          <h2>Pinecrest Lodge</h2>
          <div class="property-meta">6 Bed · 4 Bath · Sleeps 12</div>
          <div class="property-footer"><div class="price">$520 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="#">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="hawaii" data-guests="8" data-price="415" data-rating="4.95">
        <div class="ph-photo has-photo" style="background-image:var(--img-firelight-01), linear-gradient(135deg, #1A120E, #3B2A20 55%, #3B2A20)" role="img" aria-label="Firelight Cottage garden hot tub"><span class="card-tag">Island Home</span><span class="card-rating">★ 4.95</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Princeville, Kauai, Hawaii</div>
          <h2>Firelight Cottage</h2>
          <div class="property-meta">3 Bed · 2 Bath · Sleeps 8</div>
          <div class="property-footer"><div class="price">$415 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="/properties/firelight-cottage">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="hawaii" data-guests="4" data-price="329" data-rating="4.97">
        <div class="ph-photo has-photo" style="background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Kapalua%20Beach%20park%20Maui%20Hawaii%20%2845740255431%29.jpg?width=700')" role="img" aria-label="Kapalua Beach, Maui"><span class="card-tag">Island Escape</span><span class="card-rating">★ 4.97</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Kapalua, Maui, Hawaii</div>
          <h2>Kapalua Sunset Bungalow</h2>
          <div class="property-meta">2 Bed · 2 Bath · Sleeps 4</div>
          <div class="property-footer"><div class="price">$329 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="#">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="hawaii" data-guests="6" data-price="398" data-rating="4.91">
        <div class="ph-photo has-photo" style="background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Haleiwa%20Beach%20and%20Maeaea%20Beach%20-%20Haleiwa%20Oahu%20Hawaii.jpg?width=700')" role="img" aria-label="Haleiwa Beach, North Shore Oahu"><span class="card-tag">Beachfront</span><span class="card-rating">★ 4.91</span></div>
        <div class="property-body">
          <div class="property-loc">📍 North Shore, Oahu, Hawaii</div>
          <h2>Hale Nalu Beach House</h2>
          <div class="property-meta">3 Bed · 2 Bath · Sleeps 6</div>
          <div class="property-footer"><div class="price">$398 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="#">View Stay</a></div>
        </div>
      </div>

      <div class="property-card" data-region="hawaii" data-guests="4" data-price="284" data-rating="4.90">
        <div class="ph-photo has-photo" style="background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/Lanikai%20Beach%20-%20panoramio.jpg?width=700')" role="img" aria-label="Lanikai Beach, Kailua, Oahu"><span class="card-tag">Couples Escape</span><span class="card-rating">★ 4.90</span></div>
        <div class="property-body">
          <div class="property-loc">📍 Kailua, Oahu, Hawaii</div>
          <h2>Lanikai Palms Cottage</h2>
          <div class="property-meta">2 Bed · 1 Bath · Sleeps 4</div>
          <div class="property-footer"><div class="price">$284 <span>/ night</span></div><a class="btn btn-outline btn-sm" href="#">View Stay</a></div>
        </div>
      </div>

    </div>

    <div class="no-results" id="noResults">
      <p>No properties match those filters just yet — try widening your search.</p>
    </div>

    <div class="load-more-row">
      <a class="btn btn-primary load-more-btn" href="#">Load 4 More Properties</a>
      <div class="load-more-note">Showing 8 of 12 properties · this is a scrollable demo, real pagination connects to live inventory</div>
    </div>
  </section>
</div>

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
      <div><h5>Explore</h5><a href="/">Home</a><a href="/properties">Properties</a><a href="/#why-direct">Why Book Direct</a><a href="/#faq">FAQ</a></div>
      <div><h5>Contact</h5><a href="mailto:stay@savagevacations.com">stay@savagevacations.com</a><a href="tel:+15552478239">+1 (555) 247-8239</a></div>
      <div><h5>Newsletter</h5><p>Curated stays &amp; seasonal offers, straight to your inbox.</p></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Savage Vacations. All rights reserved.</span>
      <span>Direct Booking Hub — sample concept prepared for client review</span>
    </div>
  </div>
</footer>`;

const script = `var propStart = null, propEnd = null;
  var UNAVAIL = [6,7,18,19,20];
  function buildPropCal(){
    var grid = document.getElementById('propCalGrid');
    if(!grid || grid.dataset.built) return;
    var html = ['Su','Mo','Tu','We','Th','Fr','Sa'].map(function(d){return '<div class=\\'dow\\'>'+d+'</div>';}).join('');
    for(var b=0;b<6;b++){ html += '<div class="cal-day blank"></div>'; }
    for(var d=1; d<=31; d++){
      var un = UNAVAIL.indexOf(d) > -1;
      html += '<div class="cal-day'+(un?' unavail':'')+'" data-day="'+d+'"'+(un?'':' onclick="pickPropDay(this)"')+'>'+d+'</div>';
    }
    grid.innerHTML = html;
    grid.dataset.built = '1';
  }
  function togglePropDates(force){
    var pop = document.getElementById('propDatePopover');
    buildPropCal();
    var open = force === undefined ? !pop.classList.contains('open') : force;
    pop.classList.toggle('open', open);
  }
  function renderPropDates(){
    var days = document.querySelectorAll('#propCalGrid .cal-day');
    days.forEach(function(el){ el.classList.remove('sel-start','sel-end','in-range'); });
    days.forEach(function(el){
      var d = parseInt(el.dataset.day, 10);
      if(!d) return;
      if(d === propStart) el.classList.add('sel-start');
      if(d === propEnd) el.classList.add('sel-end');
      if(propStart && propEnd && d > propStart && d < propEnd) el.classList.add('in-range');
    });
    var input = document.getElementById('dateInput');
    if(propStart && propEnd) input.value = 'Aug ' + propStart + ' – Aug ' + propEnd + ', 2026';
    else if(propStart) input.value = 'Aug ' + propStart + ' – …';
    else input.value = '';
  }
  function pickPropDay(el){
    var d = parseInt(el.dataset.day, 10);
    if(propStart === null || (propStart !== null && propEnd !== null) || d <= propStart){ propStart = d; propEnd = null; }
    else { propEnd = d; }
    renderPropDates();
    if(propStart && propEnd) setTimeout(function(){ togglePropDates(false); }, 220);
  }
  document.addEventListener('click', function(e){
    var pop = document.getElementById('propDatePopover');
    var field = pop && pop.closest('.date-field');
    if(pop && field && !field.contains(e.target)) pop.classList.remove('open');
  });

  function applyFilters(){
    const dest = document.getElementById('filterDestination').value;
    const minGuests = parseInt(document.getElementById('filterGuests').value, 10);
    const sortVal = document.getElementById('sortBy').value;
    const grid = document.getElementById('propertyGrid');
    const cards = Array.from(grid.querySelectorAll('.property-card'));
    let visibleCount = 0;

    cards.forEach(card => {
      const region = card.dataset.region;
      const guests = parseInt(card.dataset.guests, 10);
      const matchDest = dest === 'all' || region === dest;
      const matchGuests = guests >= minGuests;
      const show = matchDest && matchGuests;
      card.classList.toggle('hidden', !show);
      if(show) visibleCount++;
    });

    // sort
    const sorted = cards.slice().sort((a,b) => {
      if(sortVal === 'price-asc') return a.dataset.price - b.dataset.price;
      if(sortVal === 'price-desc') return b.dataset.price - a.dataset.price;
      if(sortVal === 'rating') return b.dataset.rating - a.dataset.rating;
      return 0;
    });
    sorted.forEach(card => grid.appendChild(card));

    document.getElementById('resultsCount').textContent = visibleCount;
    document.getElementById('noResults').classList.toggle('show', visibleCount === 0);
    document.getElementById('clearFilters').classList.toggle('show', dest !== 'all' || minGuests !== 0);
  }

  function clearFilters(){
    propStart = null; propEnd = null; renderPropDates();
    document.getElementById('filterDestination').value = 'all';
    document.getElementById('filterGuests').value = '0';
    document.getElementById('sortBy').value = 'recommended';
    applyFilters();
  }`;

function PropertiesPage() {
  return <PageShell html={html} script={script} />;
}
