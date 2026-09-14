import type { Faq } from './types';

/**
 * Answers to the questions that actually decide whether someone books a call.
 * Every answer here is defensible from OFFER-AND-POSITIONING.md. Where a
 * detail is not yet decided (pricing, minimum engagement), the answer says so
 * rather than inventing a number.
 */
export const faqs: Faq[] = [
  {
    question: 'Is a person actually involved, or is this AI with someone rubber-stamping it?',
    answer:
      'A person leads the work and is accountable for it. AI is used where it genuinely helps — drafting, variants, migration, routine audits — and everything it produces is reviewed, edited and signed off before it reaches your site. If we cannot stand behind something, it does not ship.',
  },
  {
    question: 'Who owns the website?',
    answer:
      'You own your content, your domain and your brand in every engagement. On an ownership project the finished site and its accounts are handed over to you outright. On a subscription we build, host and maintain the site for as long as the subscription runs, and exit terms are agreed up front rather than buried.',
  },
  {
    question: 'How does the subscription differ from a one-time project?',
    answer:
      'A subscription replaces the project cycle: instead of scoping and quoting each change, you get an ongoing service covering design, build, hosting, maintenance, SEO/AEO and optimisation, with a standing queue for requests. A project has a defined scope, a defined end and a handover. Subscription suits sites that keep changing; ownership suits teams who want to take the wheel.',
  },
  {
    question: 'Can you migrate an existing site?',
    answer:
      'Yes — migration is one of the three ways to work. That covers moving platforms, bringing content across, preserving URLs and redirects, and fixing the problems that usually surface mid-migration. We audit first, so the scope reflects the site you actually have rather than the one described on the call.',
  },
  {
    question: 'Which platform do you build on?',
    answer:
      'We choose the platform for the job and explain why. The default is a fast, standards-based static or hybrid build with a CMS your team can use, because it is cheap to host, quick to load and straightforward to maintain. Where your situation calls for a specific platform — existing tooling, team skills, commerce needs — we work with it rather than argue with it.',
  },
  {
    question: 'Do you work in Spanish?',
    answer:
      'Yes. Engagements run in English or Spanish, and we build and maintain bilingual sites. This site is launching in English first, with the Spanish version to follow.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Pricing depends on scope and on which of the three ways to work fits, and we quote after discovery rather than from a rate card. You will get a written scope and a number before any commitment — and if the honest recommendation is a smaller engagement than you asked about, that is the one you will receive.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'On a subscription, ongoing care is the point: updates, monitoring, content changes, SEO/AEO and performance work continue as routine. On an ownership project we hand over a documented site your team can run, with support available as an option rather than a lock-in. Either way, launch day is not the end of the relationship.',
  },
];
