/**
 * Homepage copy, kept out of the templates so that content can be edited
 * (and later localised or moved to a CMS) without touching markup.
 *
 * Content rule for this site: every claim here must be defensible from the
 * positioning brief. No client names, no metrics, no testimonials, no awards
 * until real ones are supplied and approved.
 */

export interface Offer {
  id: string;
  index: string;
  name: string;
  summary: string;
  bestFor: string;
  includes: string[];
  action: { label: string; href: string };
  featured?: boolean;
}

export interface Capability {
  name: string;
  description: string;
}

export interface ProcessStep {
  name: string;
  description: string;
  supervision: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const hero = {
  eyebrow: 'Website studio',
  title: 'Expert-led websites, accelerated by AI.',
  lead: 'Hello Machine designs, builds and runs websites for teams who need work that holds up. AI gives us speed and leverage. People stay accountable for the judgment calls — strategy, content, design, code, and everything that happens after launch.',
  note: 'Subscription, ownership, or a one-off build, migration or clean-up.',
} as const;

/** Small, honest counters for the hero motif. Structural facts only. */
export const heroFacts = [
  { label: 'Engagements', value: 'Three paths' },
  { label: 'Supervision', value: 'Human, named' },
  { label: 'Scope', value: 'Strategy to hosting' },
] as const;

export const trust = {
  eyebrow: 'How we work',
  title: 'AI-assisted. Expert-supervised.',
  lead: 'Plenty of studios now quietly ship machine output and hope nobody checks. We do the opposite: we tell you exactly where the machine helps, and we keep a person answerable for every decision that reaches your customers.',
  columns: [
    {
      title: 'What AI does here',
      description:
        'Removes the slow parts. Drafting, variations, boilerplate code, content restructuring, migration grunt work, routine audits and the first pass at anything repetitive.',
      items: [
        'First drafts, never final answers',
        'Faster iteration on layout and copy options',
        'Bulk content and data migration support',
        'Routine audits: links, metadata, performance, accessibility',
      ],
    },
    {
      title: 'What experts own',
      description:
        'Everything that carries risk or requires taste. A named person reviews, edits and signs off before anything ships — and stays responsible for it afterwards.',
      items: [
        'Strategy, positioning and information architecture',
        'Editorial judgment on every published word',
        'Visual design, interaction and brand consistency',
        'Implementation quality, accessibility and performance',
        'Hosting, maintenance and what happens when something breaks',
      ],
    },
  ],
  assurance:
    'If a page is wrong, slow or inaccessible, that is ours to fix — not the tooling’s to excuse.',
} as const;

export const offers: Offer[] = [
  {
    id: 'subscription',
    index: '01',
    name: 'Website Subscription',
    summary:
      'Your website as an ongoing service. We design, build, host and keep improving it for a recurring fee, with a standing queue for changes instead of a new quote every time.',
    bestFor: 'Teams who want the site to keep moving without hiring for it.',
    includes: [
      'Design and build, then continuous iteration',
      'Hosting, monitoring, updates and maintenance',
      'SEO/AEO and performance work as a routine, not a project',
      'A predictable request queue with a named owner',
    ],
    action: { label: 'Talk through a subscription', href: '/contact/?interest=subscription' },
    featured: true,
  },
  {
    id: 'ownership',
    index: '02',
    name: 'Website Ownership',
    summary:
      'A complete website as a one-time project. We run it end to end, then hand over the site, the accounts and the documentation so your team can manage it without us.',
    bestFor: 'Teams with in-house capacity who want to own and run the result.',
    includes: [
      'Strategy, content, design and build as one fixed engagement',
      'Built for your team to edit, not just for us to maintain',
      'Full handover: code, hosting, domains, documentation, walkthrough',
      'Optional support afterwards, never a requirement',
    ],
    action: { label: 'Scope an ownership project', href: '/contact/?interest=ownership' },
  },
  {
    id: 'build-migrate-improve',
    index: '03',
    name: 'Build, Migrate, or Improve',
    summary:
      'Focused work on a defined problem: a new build, a platform migration, an implementation your team cannot staff, or a technical clean-up on a site that already exists.',
    bestFor: 'Teams with a specific job to do and a date it needs doing by.',
    includes: [
      'New builds and platform migrations, content included',
      'Implementation support alongside your existing team',
      'Technical clean-up: performance, accessibility, SEO foundations',
      'Ongoing support afterwards if you want it',
    ],
    action: { label: 'Describe the project', href: '/contact/?interest=project' },
  },
];

export const capabilities: Capability[] = [
  {
    name: 'Strategy',
    description:
      'Positioning, audience, site structure and the decisions that determine whether the rest of the work pays off.',
  },
  {
    name: 'Design',
    description:
      'Visual systems, typography, layout and interaction — designed as components, documented so they hold together as the site grows.',
  },
  {
    name: 'Content',
    description:
      'Messaging, page copy and content structure. Drafted fast, edited hard, signed off by a person before it publishes.',
  },
  {
    name: 'Implementation',
    description:
      'Semantic, standards-based front-end work and the integrations behind it — CMS, forms, analytics, commerce.',
  },
  {
    name: 'Hosting & care',
    description:
      'Deployment, domains, backups, updates, monitoring and a route to a human when something needs attention.',
  },
  {
    name: 'SEO & AEO',
    description:
      'Technical foundations, structured data and content shaped to be found and cited — by search engines and by answer engines.',
  },
  {
    name: 'Optimisation',
    description:
      'Core Web Vitals, accessibility conformance and iterative improvement based on what the site actually does after launch.',
  },
];

export const process: ProcessStep[] = [
  {
    name: 'Discover',
    description:
      'We agree on what the site is for, who it serves and how success will be judged. Audit first when something already exists.',
    supervision: 'Led by a strategist. AI assists with research synthesis and audits.',
  },
  {
    name: 'Design',
    description:
      'Structure, then type, then surface. We design the system — not a stack of one-off pages — and review it on real content.',
    supervision: 'Designer owns every visual decision. AI accelerates option-generation.',
  },
  {
    name: 'Build',
    description:
      'Semantic markup, component architecture, real performance and accessibility budgets, content loaded as we go.',
    supervision: 'Engineer reviews all code. AI drafts, never merges unreviewed.',
  },
  {
    name: 'Launch',
    description:
      'Hosting, domains, redirects, analytics, metadata and pre-launch QA across devices — then we go live deliberately.',
    supervision: 'Named owner runs the launch checklist and signs it off.',
  },
  {
    name: 'Improve',
    description:
      'Post-launch is where most value appears. We keep editing, tuning and extending — continuously on subscription, on request otherwise.',
    supervision: 'Same team, same accountability, after the invoice clears.',
  },
];

export const proof = {
  eyebrow: 'Proof',
  title: 'Founder-led, and honest about it.',
  lead: 'Hello Machine is a young studio built on experience that is not. Engagements are led by the founder, not handed to a junior team, and the same person you scope with is the person accountable for what ships.',
  points: [
    {
      title: 'Founder-led delivery',
      description:
        'Every engagement is run by the founder, drawing on years of professional website strategy, design and implementation work.',
    },
    {
      title: 'Selected client work, shared directly',
      description:
        'We walk through relevant past work in a call, with context. Public case studies are being prepared — we would rather show you real examples now than publish vague ones.',
    },
    {
      title: 'No borrowed credibility',
      description:
        'You will not find invented metrics, stock testimonials or logo walls on this site. When we have results we can evidence and permission to publish, they will appear here.',
    },
  ],
  cta: { label: 'Ask to see relevant work', href: '/contact/?interest=work' },
} as const;

export const faqs: Faq[] = [
  {
    question: 'Is a human actually involved, or is this AI with a person rubber-stamping it?',
    answer:
      'A person leads the work and is accountable for it. AI is used where it genuinely helps — drafting, variations, migration, routine audits — and everything it produces is reviewed, edited and signed off before it reaches your site. If we cannot stand behind something, it does not ship.',
  },
  {
    question: 'Who owns the website?',
    answer:
      'You own your content, your domain and your brand in every engagement. On a Website Ownership project, the finished site and its accounts are handed over to you outright. On a subscription, we build, host and maintain the site for as long as the subscription runs; we will always discuss exit terms up front rather than leave them buried.',
  },
  {
    question: 'How does the subscription differ from a one-time project?',
    answer:
      'A subscription replaces the project cycle: instead of scoping and quoting each change, you have an ongoing service covering design, build, hosting, maintenance, SEO/AEO and optimisation, with a standing queue for requests. A one-time project has a defined scope, a defined end, and a handover. Subscription suits sites that keep changing. Ownership suits teams who want to take the wheel.',
  },
  {
    question: 'Can you migrate an existing site?',
    answer:
      'Yes — migration is one of the three paths. That includes moving platforms, bringing content across, preserving URLs and redirects, and fixing the problems that usually surface mid-migration. We audit first so the scope reflects the site you actually have.',
  },
  {
    question: 'Which platform do you build on?',
    answer:
      'We choose the platform for the job and tell you why. The default is a fast, standards-based static or hybrid build with a CMS your team can use, because it is cheap to host, quick to load and easy to maintain. If your situation calls for a specific platform — existing tooling, team skills, commerce needs — we work with that instead of arguing with it.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'On a subscription, ongoing care is the point: updates, monitoring, content changes, SEO/AEO and performance work continue as routine. On an ownership project, we hand over a documented site your team can run, and ongoing support is available as an option rather than a lock-in. Either way, launch day is not the end of the relationship.',
  },
];

export const finalCta = {
  eyebrow: 'Next step',
  title: 'Tell us what the site needs to do.',
  lead: 'A short call is usually enough to work out which of the three paths fits, what it would take, and whether we are the right studio for it. No pitch deck, no pressure.',
} as const;
