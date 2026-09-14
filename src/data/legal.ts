/**
 * Legal routes.
 *
 * CONTENT DEPENDENCY — PROJECT-BRIEF.md lists privacy/consent wording and
 * analytics IDs as pending, and legal copy is explicitly not yet supplied.
 * The privacy page below therefore does two things and no more:
 *
 *   1. describes, accurately, what this build actually does today — which is
 *      very little, because nothing is wired up yet;
 *   2. states in the page itself that it is a factual notice awaiting legal
 *      review, rather than posing as an approved policy.
 *
 * Every statement here is checkable against the source: there is no analytics
 * script, no cookie is set, fonts are self-hosted, and the enquiry form has no
 * endpoint until PUBLIC_FORM_ENDPOINT is configured. When the CRM, scheduler
 * and analytics land, this file must be revised in the same change.
 */

export const privacyMeta = {
  title: 'Privacy',
  description:
    'What this website collects, what it does not, and who to contact about it. A factual notice, pending legal review before launch.',
} as const;

export const privacyIntro = {
  statement: { lead: 'What this site', mark: 'actually does', tail: '.' },
  lead: 'A short, accurate description of how this website handles your information. It describes the site as it is built today, not as it might be configured later.',
  note: 'Working note — this is a factual notice written from the implementation. It has not yet been reviewed by a lawyer, and the reviewed policy will replace it before launch.',
} as const;

export interface PrivacySection {
  index: string;
  title: string;
  body: string[];
}

export const privacySections: PrivacySection[] = [
  {
    index: '01',
    title: 'What the site collects',
    body: [
      'Nothing automatically. This site loads no analytics, no advertising tags, no embedded social widgets and no third-party trackers, and it sets no cookies. Typefaces are served from this domain rather than from a font network, so visiting a page does not tell anyone else that you did.',
      'Your hosting provider will keep standard server logs — the usual request metadata, including IP address — for delivery and security purposes. That is a function of hosting any website, and the retention period is set by the host.',
    ],
  },
  {
    index: '02',
    title: 'What you send us',
    body: [
      'If you use the enquiry form, we receive the details you type into it: your name, email address, optionally your company, what your enquiry is about, your timing, and your message. We use those details to reply to you and to run the engagement if one follows.',
      'The form is not connected to a system yet. Until it is, the working route is email, and an email reaches us directly.',
    ],
  },
  {
    index: '03',
    title: 'Who else sees it',
    body: [
      'Once the CRM and scheduling tools are connected, enquiries and bookings will be processed by those providers on our behalf. This notice will name them, and what they hold, before that goes live.',
      'We do not sell personal information, and we do not share it for anyone else’s marketing.',
    ],
  },
  {
    index: '04',
    title: 'Your choices',
    body: [
      'You can ask us what we hold about you, ask for it to be corrected, or ask us to delete it. Write to the address below and we will confirm what we have done.',
      'If you have asked to hear from us and change your mind, say so in a reply and that is the end of it.',
    ],
  },
];

export const privacyPending = {
  title: 'Still to be settled before launch',
  items: [
    'Legal review of this notice, and the governing jurisdiction',
    'The registered company name, address and data-controller details',
    'Named processors once the CRM, scheduler and analytics are connected',
    'Consent and retention wording that matches the final CRM configuration',
    'A separate terms page, if one is required before launch',
  ],
} as const;

export const notFound = {
  meta: {
    title: 'Page not found',
    description: 'That page is not on this site. Here is the index instead.',
  },
  statement: { lead: 'That page is not', mark: 'on the sheet', tail: '.' },
  lead: 'The address does not match anything here — it may have moved, or it may never have existed. Everything the site does hold is indexed below.',
  note: 'If you followed a link from somewhere else and expected something specific, tell us and we will fix the trail.',
} as const;
