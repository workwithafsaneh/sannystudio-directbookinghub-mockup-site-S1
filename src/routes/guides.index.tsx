import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Coastal & Island Guides | Savage Vacations Blog" },
      { name: "description", content: "Destination guides, local recommendations, and travel tips from Savage Vacations \u2014 real advice for the Washington coast and Hawaii, from the people who host you." },
      { property: "og:title", content: "Coastal & Island Guides | Savage Vacations" },
      { property: "og:description", content: "Destination guides, local recommendations, and travel tips for the Washington coast and Hawaii." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20shelter%20at%20Ocean%20Shores%2C%20WA%2002.jpg" },
      { name: "twitter:image", content: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20shelter%20at%20Ocean%20Shores%2C%20WA%2002.jpg" },
    ],
    links: [{ rel: "stylesheet", href: "/css/guides.css" }],
  }),
  component: GuidesPage,
});

const html = `<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/"><span class="logo-mark">S</span>Savage <em>Vacations</em></a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/properties">Properties</a>
      <a href="/guides" class="active">Guides</a>
      <a href="/reviews">Reviews</a>
      <a href="/#contact">Contact Us</a>
    </nav>
    <div class="header-right">
      <a class="btn btn-primary btn-sm" href="/properties">Book Now</a>
    </div>
  </div>
</header>

<main>

<div class="container">
  <div class="breadcrumb-strip">Home <span>/</span> Guides</div>

  <section style="padding:22px 0 0;">
    <div class="eyebrow">Coastal &amp; Island Guides</div>
    <h1>Stories From Where You'll Stay</h1>
    <p style="max-width:600px;">Local recommendations, destination guides, and travel tips from the team that actually hosts you — not a stock content calendar.</p>
  </section>

  <a href="/guides/driftwood-dunes-guide" style="display:block;">
    <div class="featured-post">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20shelter%20at%20Ocean%20Shores%2C%20WA%2002.jpg?width=900" alt="Boardwalk at Driftwood Dunes, Ocean Shores" loading="lazy" decoding="async">
        <span class="post-tag on-photo">Washington Coast</span>
      </div>
      <div class="featured-body">
        <span class="post-tag">Featured Guide</span>
        <h2>A Local's Guide to Driftwood Dunes: Ocean Shores' Best-Kept Secret</h2>
        <div class="post-meta">By Savage Vacations Team · 6 min read</div>
        <p>Ten minutes from 18 Ocean Blvd sits a stretch of boardwalk trails most visitors drive straight past. Here's when to go, what to bring, and where to eat afterward.</p>
        <span class="read-more">Read the Guide →</span>
      </div>
    </div>
  </a>

  <div class="filter-pills" id="filterPills">
    <button class="pill active" data-filter="all" onclick="filterPosts('all', this)">All Guides</button>
    <button class="pill" data-filter="washington" onclick="filterPosts('washington', this)">Washington Coast</button>
    <button class="pill" data-filter="hawaii" onclick="filterPosts('hawaii', this)">Hawaii</button>
    <button class="pill" data-filter="eats" onclick="filterPosts('eats', this)">Local Eats</button>
    <button class="pill" data-filter="things-to-do" onclick="filterPosts('things-to-do', this)">Things To Do</button>
    <button class="pill" data-filter="tips" onclick="filterPosts('tips', this)">Travel Tips</button>
  </div>

  <div class="post-grid" id="postGrid">

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="washington things-to-do">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Westport%2C%20WA%20-%20beach%20scene.jpg?width=700" alt="Westport, Washington waterfront" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Things To Do</span>
        <h3>5 Things To Do Near Westport Before You Even Unpack</h3>
        <p class="post-excerpt">The lighthouse, the surf break, and the one viewpoint most guests never find.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="washington eats">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Ultimate%20Seafood%20Platter%20at%20Landry%27s%20Seafood%20House.jpg?width=700" alt="Fresh seafood platter" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Local Eats</span>
        <h3>Where to Eat in Long Beach: 6 Spots We Actually Recommend</h3>
        <p class="post-excerpt">No tourist traps — just the places our own guests keep asking us about.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="hawaii things-to-do">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Haleiwa%20Beach%20and%20Maeaea%20Beach%20-%20Haleiwa%20Oahu%20Hawaii.jpg?width=700" alt="Haleiwa Beach, North Shore Oahu" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Things To Do</span>
        <h3>Your First 48 Hours on Oahu's North Shore</h3>
        <p class="post-excerpt">A simple, unhurried plan for your first two days at Hale Nalu Beach House.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="tips">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Stack%20of%20luggages%20%28Unsplash%29.jpg?width=700" alt="Packed suitcases and travel bags" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Travel Tips</span>
        <h3>Packing for the PNW Coast: What You Actually Need</h3>
        <p class="post-excerpt">Layers, tide charts, and the one thing every guest forgets.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="washington things-to-do">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Rocky%20coast%20tidepools%20%28Unsplash%29.jpg?width=700" alt="Rocky tide pools on the Washington coast" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Things To Do</span>
        <h3>The Best Tide Pools on the Washington Coast (And When to Go)</h3>
        <p class="post-excerpt">Timing is everything — here's how to check the tide chart like a local.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="hawaii eats">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Hanalei%20Beach%20at%20Sunset%20-%20Pacific%20Ocean%20-%20Kauai%20-%20Hawaii.jpg?width=700" alt="Hawaii beach at sunset" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Local Eats</span>
        <h3>Maui After Sunset: Our Favorite Quiet Evenings on Kapalua</h3>
        <p class="post-excerpt">Where to watch the sky change color without a crowd.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

    <a href="/guides/driftwood-dunes-guide" class="post-card" data-category="tips">
      <div class="ph-photo has-photo"><img class="ph-photo-img" src="/images/properties/ocean-blvd/04-deck-firepit.webp" alt="Deck at 18 Ocean Blvd, booked direct with Savage Vacations" loading="lazy" decoding="async"></div>
      <div class="post-body">
        <span class="post-tag">Travel Tips</span>
        <h3>How to Book Direct and Actually Save Money</h3>
        <p class="post-excerpt">The real math behind skipping third-party service fees.</p>
        <span class="read-more">Read More →</span>
      </div>
    </a>

  </div>

  <div class="no-results" id="noResults"><p>No guides in this category yet — check back soon.</p></div>

  <div class="newsletter-box">
    <div class="eyebrow">Stay Inspired</div>
    <h2>Letters From the Places We Love</h2>
    <form class="newsletter-form" onsubmit="event.preventDefault(); document.getElementById('nlMsg').textContent='Thanks — check your inbox to confirm.'; this.reset();">
      <input type="email" aria-label="Your email address" placeholder="Your email address" required>
      <button class="btn btn-primary" type="submit">Get Early Access →</button>
    </form>
    <div class="newsletter-msg" id="nlMsg"></div>
  </div>
</div>

</main>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <p class="footer-h" style="color:#EDD9BC; font-family:'Playfair Display',serif; font-size:1.1rem; text-transform:none; letter-spacing:0;">Savage <em>Vacations</em></p>
        <p>Thoughtfully curated luxury vacation homes across Washington and Hawaii, designed for comfort, adventure, and unforgettable memories.</p>
        <div class="footer-social" aria-label="Follow Savage Vacations on social media">
          <a href="#" class="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.1C15.9 4 15 4 14 4c-2.2 0-3.7 1.3-3.7 3.8V10H7.7v3h2.6V21h3.2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.2-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.2-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.2 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M16.6 2h-3.1v13.6c0 1.4-1.1 2.5-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5.3 0 .5 0 .8.1V10c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4S8 20.7 11 20.7s5.4-2.4 5.4-5.4V8.3c1.2.9 2.7 1.4 4.3 1.4V6.6c-2.3 0-4.1-1.9-4.1-4.2V2z"/></svg></a>
          <a href="#" class="social-icon" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22 12s0-3-.4-4.4a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.6a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.4a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.6a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12zM10 15V9l5.2 3-5.2 3z"/></svg></a>
        </div>
      </div>
      <div><p class="footer-h">Explore</p><a href="/">Home</a><a href="/properties">Properties</a><a href="/guides">Guides</a><a href="/#faq">FAQ</a></div>
      <div><p class="footer-h">Contact</p><a href="mailto:stay@savagevacations.com">stay@savagevacations.com</a><a href="tel:+15552478239">+1 (555) 247-8239</a></div>
      <div><p class="footer-h">Newsletter</p><p>Curated stays &amp; seasonal offers, straight to your inbox.</p></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Savage Vacations. All rights reserved.</span>
      <span>Direct Booking Hub — sample concept prepared for client review</span>
    </div>
  </div>
</footer>`;

const script = `function filterPosts(category, btn){
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const cards = document.querySelectorAll('.post-card');
    let visible = 0;
    cards.forEach(card => {
      const cats = card.dataset.category.split(' ');
      const show = category === 'all' || cats.includes(category);
      card.classList.toggle('hidden', !show);
      if(show) visible++;
    });
    document.getElementById('noResults').classList.toggle('show', visible === 0);
  }`;

function GuidesPage() {
  return <PageShell html={html} script={script} />;
}
