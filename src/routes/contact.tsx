import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { name: "description", content: "Get in touch with Savage Vacations for questions about any of our 12 vacation rental properties across the Washington coast and Hawaii. Real hosts, real answers \u2014 usually within a day." },
      { property: "og:title", content: "Contact Us | Savage Vacations \u2014 Washington & Hawaii Vacation Rentals" },
      { property: "og:description", content: "Get in touch with Savage Vacations for questions about any of our 12 vacation rental properties across the Washington coast and Hawaii. Real hosts, real answers \u2014 usually within a day." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: "/css/contact.css" }],
  }),
  component: ContactPage,
});

const html = `<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="/"><span class="logo-mark">S</span>Savage <em>Vacations</em></a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/properties">Properties</a>
      <a href="/guides">Guides</a>
      <a href="/reviews">Reviews</a>
      <a href="/#contact" class="active">Contact Us</a>
    </nav>
    <div class="header-right">
      <a class="btn btn-primary btn-sm" href="/properties">Book Now</a>
    </div>
  </div>
</header>

<div class="container">
  <div class="breadcrumb-strip">Home <span>/</span> Contact</div>

  <section style="padding:22px 0 0;">
    <div class="eyebrow">Get in Touch</div>
    <h1>We're Here to Help</h1>
    <p style="max-width:560px;">Questions about a property, a date, or a group booking? Reach out — a real person on our team responds, not a ticketing queue.</p>
  </section>

  <div class="contact-grid">
    <div class="form-card">
      <h3 style="margin-bottom:18px;">Send Us a Message</h3>
      <form id="contactForm" onsubmit="handleContactSubmit(event)">
        <div class="two-col">
          <div class="field-row">
            <span class="field-label">Full Name</span>
            <input type="text" required placeholder="Your name">
          </div>
          <div class="field-row">
            <span class="field-label">Email</span>
            <input type="email" required placeholder="you@email.com">
          </div>
        </div>
        <div class="two-col">
          <div class="field-row">
            <span class="field-label">Property (optional)</span>
            <select>
              <option>General Inquiry</option>
              <option>18 Ocean Blvd — Coastal Retreat</option>
              <option>Cedar Hollow Cabin</option>
              <option>Firelight Cottage</option>
              <option>Kapalua Sunset Bungalow</option>
              <option>Other / Not Sure Yet</option>
            </select>
          </div>
          <div class="field-row">
            <span class="field-label">Preferred Dates (optional)</span>
            <input type="text" placeholder="e.g., Aug 12–16, 2026">
          </div>
        </div>
        <div class="field-row">
          <span class="field-label">Message</span>
          <textarea required placeholder="Tell us a bit about your trip..."></textarea>
        </div>
        <button class="btn btn-primary btn-full" type="submit">Send Message</button>
        <div class="form-msg" id="formMsg"></div>
      </form>
    </div>

    <div>
      <div class="info-card">
        <h3>Contact Details</h3>
        <div class="info-row">
          <div class="info-icon">✉</div>
          <div><span class="label">Email</span><p>stay@savagevacations.com</p></div>
        </div>
        <div class="info-row">
          <div class="info-icon">☎</div>
          <div><span class="label">Phone</span><p>+1 (555) 247-8239</p></div>
        </div>
        <div class="info-row">
          <div class="info-icon">🕐</div>
          <div><span class="label">Hours</span><p>7 days a week, 8am–8pm PT</p></div>
        </div>
        <span class="response-badge">Usually responds within 1 business day</span>
      </div>

      <div class="map-box">
        <div class="pin"></div>
        <strong>Serving WA &amp; HI Guests</strong>
        <span style="font-size:.8rem; color:var(--ink-faint);">Serving guests across WA &amp; HI</span>
      </div>

      <div class="faq-teaser">
        Looking for a quick answer? <a href="/#faq">Check our FAQ →</a>
      </div>
    </div>
  </div>
</div>

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

const script = `function handleContactSubmit(e){
    e.preventDefault();
    document.getElementById('formMsg').textContent = "Thanks — we've got your message and will reply within 1 business day.";
    e.target.reset();
  }`;

function ContactPage() {
  return <PageShell html={html} script={script} />;
}
