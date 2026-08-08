import { useEffect } from "react";

const SOCIAL_LINKS = `
  <a class="social-icon" href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
  <a class="social-icon" href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793 0 1.44.645 1.44 1.439z"/></svg></a>
  <a class="social-icon" href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg></a>
  <a class="social-icon" href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>

`;

const REVEAL_SELECTOR = [
  ".property-card",
  ".feature-card",
  ".review-card",
  ".host-card",
  ".guide-card",
  ".article-card",
  ".post-card",
  ".destination-card",
  ".compare-col",
  ".section-head",
  ".newsletter-box",
  ".cta-banner",
  ".contact-form-card",
  ".contact-info",
  ".story-split > *",
  ".faq-item",
  ".stats-grid > div",
  ".amenity-card",
  ".sleep-card",
  ".gallery-grid > *",
  ".info-card",
  ".form-card",
  ".booking-card",
  ".trust-strip > *",
  ".value-card",
  ".stat-card",
].join(",");

function enhance() {
  // Unify footer social icons across every page.
  document.querySelectorAll("footer .footer-social, footer .social-icons").forEach((el) => {
    el.innerHTML = SOCIAL_LINKS;
  });
  // Add a social row to footers that don't have one yet.
  const footerCol = document.querySelector("footer .footer-grid > div");
  if (footerCol && !footerCol.querySelector(".footer-social, .social-icons")) {
    const row = document.createElement("div");
    row.className = "footer-social";
    row.setAttribute("aria-label", "Follow Savage Vacations on social media");
    row.innerHTML = SOCIAL_LINKS;
    footerCol.appendChild(row);
  }

  // Scroll reveal.
  const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  if (typeof IntersectionObserver === "undefined") return undefined;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  nodes.forEach((node, i) => {
    node.setAttribute("data-reveal", "");
    node.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    observer.observe(node);
  });
  return () => observer.disconnect();
}

/**
 * Renders a fully-authored static page (markup + its inline behaviour script).
 * The markup is server-rendered so crawlers see the full content.
 */
export function PageShell({ html, script }: { html: string; script?: string }) {
  useEffect(() => {
    if (!script) return;
    const el = document.createElement("script");
    el.textContent = script;
    document.body.appendChild(el);
    return () => {
      el.remove();
    };
  }, [script]);

  useEffect(() => {
    const cleanup = enhance();

    // Support cross-page anchors such as /#contact
    const hash = window.location.hash;
    if (hash.length > 1) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
      }
    }
    return cleanup;
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
