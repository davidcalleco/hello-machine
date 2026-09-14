import type { Faq, ProcessStep } from './types';

/**
 * The sequence from first conversation to shipped improvement.
 *
 * Every step names its human owner, because the whole positioning rests on
 * that being true. `owner` describes the role responsible, not a headcount
 * claim — Hello Machine is founder-led and the site says so elsewhere.
 */

export const processMeta = {
  title: 'Process',
  description:
    'Discover, Design, Build, Launch, Improve — the five steps Hello Machine runs on every engagement, each with a named person answerable for it.',
} as const;

export const processIntro = {
  statement: { lead: 'Signal in.', mark: 'Shipped work', tail: ' out.' },
  lead: 'Five steps, in the same order every time. The sequence is not novel. Running it properly, with someone answerable at each step, is the part most projects skip.',
  note: 'Working note — the process compresses for an intervention and repeats indefinitely on a subscription. It does not get skipped in either case.',
} as const;

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    name: 'Discover',
    intent: 'Agree what this is for.',
    description:
      'We establish what the site or system has to achieve, who it serves, and how we will know whether it worked. Where something already exists, we audit it before proposing anything — the current state is evidence, not an embarrassment.',
    outputs: [
      'A written statement of purpose and audience',
      'Audit findings where there is an existing site or system',
      'Scope, constraints and the success measures we will use',
    ],
    owner: 'Strategy lead. AI assists with research synthesis and audit passes.',
  },
  {
    index: '02',
    name: 'Design',
    intent: 'Decide before building.',
    description:
      'Structure first, then type, then surface. We design a system rather than a stack of pages, and we review it against real content — placeholder text hides every problem worth finding early.',
    outputs: [
      'Information architecture and content model',
      'Art direction and a documented component system',
      'Key page compositions reviewed at desktop and mobile',
    ],
    owner: 'Designer owns every visual decision. AI accelerates option generation.',
  },
  {
    index: '03',
    name: 'Build',
    intent: 'Make it real, and make it hold.',
    description:
      'Semantic markup, component architecture, and accessibility and performance treated as budgets rather than as a final audit. Content goes in as we build, so the system is tested against the thing it will actually carry.',
    outputs: [
      'Implemented, reviewable site or system',
      'Accessibility and performance checks against agreed budgets',
      'Integrations wired: CMS, forms, CRM, analytics',
    ],
    owner: 'Engineer reviews all code. AI drafts; nothing merges unreviewed.',
  },
  {
    index: '04',
    name: 'Launch',
    intent: 'Go live deliberately.',
    description:
      'Hosting, domains, redirects, metadata, analytics and cross-device QA, worked through as a checklist rather than as a memory exercise. Migrations get a rollback plan before they get a launch date.',
    outputs: [
      'Completed launch checklist, signed off',
      'Redirects and search-visibility continuity for migrations',
      'Handover documentation for the people who will run it',
    ],
    owner: 'A named owner runs the checklist and signs it off.',
  },
  {
    index: '05',
    name: 'Improve',
    intent: 'Keep editing.',
    description:
      'Most of the value appears after launch. We keep tuning, extending and correcting — continuously under a subscription, on request otherwise. What we learn goes back into the system, not into a slide.',
    outputs: [
      'Prioritised improvement queue with a visible status',
      'Ongoing SEO/AEO, performance and accessibility work',
      'Regular, plain-language reporting on what changed and why',
    ],
    owner: 'Same team, same accountability, after the invoice clears.',
  },
];

export const processPrinciples = [
  {
    index: '01',
    title: 'Decisions get written down.',
    description:
      'If a choice is worth arguing about, it is worth recording. You should never have to ask why a page is structured the way it is.',
  },
  {
    index: '02',
    title: 'Drafts are cheap. Publishing is not.',
    description:
      'We generate options quickly and discard most of them. Nothing reaches your customers without a person choosing it on purpose.',
  },
  {
    index: '03',
    title: 'Accessibility is structural.',
    description:
      'Semantics, contrast, focus order and keyboard operation are part of the build, not a remediation phase we quote for later.',
  },
  {
    index: '04',
    title: 'You can always leave.',
    description:
      'Code, content, domains and accounts are yours. We document what you hold so an exit is an administrative task, not a negotiation.',
  },
];

export const processFaqs: Faq[] = [
  {
    question: 'How long does a first engagement take?',
    answer:
      'It depends on scope and on how quickly content and decisions come back from your side, which is usually the real variable. We give a schedule after discovery, not before it, and we would rather commit to a date we have thought about than one that sounds good on a call.',
  },
  {
    question: 'What do you need from us?',
    answer:
      'A decision-maker who can approve direction, access to the systems involved, and whatever content, brand assets and product knowledge exist already. Where content does not exist, we produce it — that is part of the work, not an obstacle to it.',
  },
  {
    question: 'How do reviews work?',
    answer:
      'Structured review points at the end of each step, with a specific question attached rather than an open invitation to react. You see work in progress; you are not asked to approve a finished thing you saw for the first time that morning.',
  },
];
