/**
 * Single source of truth for site-wide metadata, navigation and vendor
 * integration points.
 *
 * Every outbound integration (booking, forms, analytics) resolves here so
 * swapping a vendor is a one-file change. Values read from public environment
 * variables with in-repo fallbacks, so the site builds and behaves sensibly
 * before any vendor account exists.
 *
 * No secrets belong in this file: anything read from `import.meta.env.PUBLIC_*`
 * is shipped to the browser.
 */

const env = import.meta.env;

export const site = {
  name: 'Hello Machine',
  url: env.PUBLIC_SITE_URL ?? 'https://hellomachine.ai',
  tagline: 'Expert-led websites, accelerated by AI.',
  description:
    'Hello Machine is an independent studio building websites, AI systems and automation. Experienced people own the judgment; AI supplies the speed. Strategy, design, build, hosting and continuous improvement.',
  locale: 'en',
  /** Locales the site is planned to serve. `available: false` renders as a
   *  clearly-marked placeholder rather than a dead link. See
   *  CONTENT-DEPENDENCIES.md for the Spanish launch plan. */
  languages: [
    { code: 'en', label: 'EN', name: 'English', href: '/', available: true },
    { code: 'es', label: 'ES', name: 'Español', href: '/es/', available: false },
  ],
} as const;

/**
 * Integration points, deliberately indirect.
 *
 * `booking.url` defaults to the on-site booking section so the primary CTA
 * always resolves to something real. When the scheduler is provisioned (see
 * CONTENT-DEPENDENCIES.md), set PUBLIC_BOOKING_URL and every CTA on the site
 * becomes an external link — no component changes required.
 */
export const integrations = {
  booking: {
    url: env.PUBLIC_BOOKING_URL ?? '/contact/#book',
    /** True once a real scheduler URL is configured. Drives the on-page copy
     *  so the site never implies a booking flow that does not exist yet. */
    isConfigured: Boolean(env.PUBLIC_BOOKING_URL),
  },
  contact: {
    /** Placeholder inbox — confirm the real address before launch. */
    email: env.PUBLIC_CONTACT_EMAIL ?? 'hello@hellomachine.ai',
    /**
     * Form POST target. Empty by default: the contact form then renders in
     * "no endpoint configured" mode and offers email instead of silently
     * discarding submissions. Point this at the HubSpot Forms endpoint when
     * the portal is available.
     */
    endpoint: env.PUBLIC_FORM_ENDPOINT ?? '',
    get isConfigured() {
      return this.endpoint.length > 0;
    },
  },
} as const;

export interface NavItem {
  index: string;
  label: string;
  href: string;
}

/** Primary navigation. The index numbers are part of the art direction: the
 *  header is the first line of the sheet's own index, not a utility bar. */
export const nav: NavItem[] = [
  { index: '01', label: 'Services', href: '/services/' },
  { index: '02', label: 'Work', href: '/work/' },
  { index: '03', label: 'Process', href: '/process/' },
  { index: '04', label: 'About', href: '/about/' },
  { index: '05', label: 'Contact', href: '/contact/' },
];

/** Absolute URL helper for canonical tags, Open Graph and structured data. */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}

/** Normalises a pathname so `/work` and `/work/` compare equal. */
export function normalisePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

/** True when `href` is the current page; parent sections stay marked while a
 *  child route is open (e.g. /services/websites/ marks Services). */
export function isCurrent(href: string, pathname: string): boolean {
  const target = normalisePath(href);
  const current = normalisePath(pathname);
  if (target === '') return current === '';
  return current === target || current.startsWith(`${target}/`);
}
