/**
 * Single source of truth for site-wide metadata and vendor integration points.
 *
 * Every outbound integration (booking, forms, analytics) is resolved here so
 * that swapping a vendor is a one-file change. Values are read from public
 * environment variables with safe in-repo fallbacks, so the site builds and
 * behaves sensibly before any vendor account exists. No secrets belong here:
 * anything referenced by `import.meta.env.PUBLIC_*` ships to the browser.
 */

const env = import.meta.env;

export const site = {
  name: 'Hello Machine',
  /** Canonical origin. Override per environment with PUBLIC_SITE_URL. */
  url: env.PUBLIC_SITE_URL ?? 'https://hellomachine.ai',
  tagline: 'Expert-led websites, accelerated by AI.',
  description:
    'Hello Machine builds and runs expert-led websites, accelerated by AI. Strategy, design, content, build, hosting, SEO/AEO and ongoing care — supervised by people who stay accountable.',
  locale: 'en',
  /** Locales the site is planned to serve. `available: false` renders as a placeholder. */
  languages: [
    { code: 'en', label: 'EN', name: 'English', href: '/', available: true },
    { code: 'es', label: 'ES', name: 'Español', href: '/es/', available: false },
  ],
} as const;

/**
 * Integration points. These are deliberately indirect.
 *
 * `booking.url` is currently an internal anchor so the primary CTA always
 * resolves to something real. When the scheduler (HubSpot Meetings or similar)
 * is provisioned, set PUBLIC_BOOKING_URL and the CTA becomes an external link
 * everywhere it appears — no component changes required.
 */
export const integrations = {
  booking: {
    url: env.PUBLIC_BOOKING_URL ?? '/contact/#book',
    get isExternal() {
      return /^https?:\/\//.test(this.url);
    },
  },
  contact: {
    /** Placeholder inbox. Replace with the real address before launch. */
    email: env.PUBLIC_CONTACT_EMAIL ?? 'hello@hellomachine.ai',
    /**
     * Form POST target. Empty by default: the contact form then renders in
     * "no endpoint configured" mode and falls back to a mailto link rather
     * than silently losing submissions.
     */
    endpoint: env.PUBLIC_FORM_ENDPOINT ?? '',
  },
} as const;

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Absolute URL helper for canonical tags, Open Graph and the sitemap. */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}
