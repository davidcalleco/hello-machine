import type { Engagement, Practice } from './types';

/**
 * Two orthogonal axes, deliberately kept apart:
 *
 *   PRACTICES    what the work is        → /services/websites/ etc.
 *   ENGAGEMENTS  how the work is bought  → subscription / ownership / project
 *
 * A visitor picks one of each. Collapsing them into a single list of
 * "services" is what makes agency sites unreadable.
 *
 * CONTENT DEPENDENCY — discovery question 1 ("which service categories are
 * commercially real for launch?") is not yet answered. Websites is the core
 * practice and is written with full confidence. AI systems and Automation are
 * written as genuine but scoped-per-engagement practices, with no claim of
 * productised packages, published deployments or delivery volume. If David
 * confirms these are not commercially real for launch, remove them from this
 * array and their routes disappear with them.
 */

export const engagements: Engagement[] = [
  {
    id: 'subscription',
    index: '01',
    name: 'Continuous',
    line: 'A website, continuously handled.',
    summary:
      'Your site as an ongoing service. We design, build, host and keep improving it for a recurring fee, with a standing queue for changes instead of a new quote every time something needs doing.',
    bestFor: 'Teams who want the site to keep moving without hiring for it.',
    includes: [
      'Design and build, then continuous iteration',
      'Hosting, monitoring, updates and maintenance',
      'SEO and AEO work as a routine, not a project',
      'A standing request queue with a named owner',
    ],
    boundary:
      'This is a service, not a licence. If you stop, we hand over what you own and document what you are taking with you.',
    action: { label: 'Talk through a subscription', href: '/contact/?interest=subscription' },
  },
  {
    id: 'ownership',
    index: '02',
    name: 'Ownership',
    line: 'A complete site, built to own.',
    summary:
      'A finished website as a one-time project. We run it end to end, then hand over the site, the accounts and the documentation so your team can manage it without us.',
    bestFor: 'Teams with in-house capacity who want to own and run the result.',
    includes: [
      'Strategy, content, design and build as one fixed engagement',
      'Built for your team to edit, not only for us to maintain',
      'Full handover: code, hosting, domains, documentation, walkthrough',
      'Optional support afterwards, never a requirement',
    ],
    boundary:
      'We will tell you honestly if the thing you want to own needs more in-house capacity than you have.',
    action: { label: 'Scope an ownership project', href: '/contact/?interest=ownership' },
  },
  {
    id: 'project',
    index: '03',
    name: 'Intervention',
    line: 'Bring the problem. We make it work better.',
    summary:
      'Focused work on a defined problem: a build, a migration, an implementation your team cannot staff this quarter, or a clean-up on something that already exists.',
    bestFor: 'Teams with a specific job to do and a date it needs doing by.',
    includes: [
      'New builds and platform migrations, content included',
      'Implementation support alongside your existing team',
      'Technical clean-up: performance, accessibility, SEO foundations',
      'Ongoing support afterwards if you want it',
    ],
    boundary:
      'We audit before we quote. A fixed price on a site nobody has opened yet is a guess, and guesses get paid for twice.',
    action: { label: 'Describe the project', href: '/contact/?interest=project' },
  },
];

export const practices: Practice[] = [
  {
    slug: 'websites',
    index: '01',
    name: 'Websites',
    shortName: 'Websites',
    summary:
      'Strategy, content, design, build, hosting and the continuous improvement afterwards. The core practice, and the one everything else attaches to.',
    statement: { lead: 'A website is a', mark: 'sequence of decisions', tail: ', made visible.' },
    lead: 'Most websites do not fail because of the technology. They fail because nobody decided what the site was for, and the decisions were made by whoever happened to be in the room. We make those decisions deliberately, write them down, and build to them.',
    meta: {
      title: 'Websites',
      description:
        'Website strategy, content, design, build, hosting and continuous improvement from Hello Machine — expert-led, AI-accelerated, and accountable after launch.',
    },
    definition: [
      'We design and build websites end to end: positioning and structure first, then content, then the visual system, then the implementation that holds it all together.',
      'The build is standards-based and fast by default — semantic markup, real accessibility, measured performance — because those are cheaper to get right at the start than to retrofit under pressure.',
      'Launch is a milestone, not a finish line. The site that earns its keep is the one that keeps being edited.',
    ],
    deliverables: [
      {
        name: 'Positioning and structure',
        description:
          'What the site is for, who it serves, what it must say first, and the information architecture that follows from those answers.',
      },
      {
        name: 'Content production',
        description:
          'Messaging, page copy and content models. Drafted quickly, edited hard, signed off by a person before it publishes.',
      },
      {
        name: 'Design system',
        description:
          'Typography, colour roles, layout and interaction designed as a system with documented components — not a stack of one-off pages.',
      },
      {
        name: 'Implementation',
        description:
          'Semantic front-end work and the integrations behind it: CMS, forms, CRM, analytics, commerce where it applies.',
      },
      {
        name: 'Hosting and care',
        description:
          'Deployment, domains, backups, updates, monitoring, and a route to a human when something needs attention.',
      },
      {
        name: 'SEO and AEO',
        description:
          'Technical foundations, structured data and content shaped to be found and cited — by search engines and by answer engines.',
      },
    ],
    signals: [
      'The site no longer matches what the business actually sells.',
      'Every change needs a developer, so changes stop happening.',
      'The pages load slowly, and nobody owns fixing it.',
      'You are about to rebrand, reposition, or move platform.',
      'The site converts, but nobody can explain why or repeat it.',
    ],
    boundaries: [
      'We do not take on a redesign without agreeing what the site is for first.',
      'We do not publish content we cannot stand behind, including content a client asks us to overstate.',
      'We do not build something your team has no way to maintain unless maintenance is part of the engagement.',
    ],
    division: {
      human: [
        'Positioning, structure and the arguments the site has to make',
        'Editorial judgment on every published word',
        'Visual design, typography and interaction',
        'Implementation review, accessibility and performance budgets',
        'What ships, and what does not',
      ],
      machine: [
        'First drafts of copy, structure and layout options',
        'Faster iteration across variants worth comparing',
        'Bulk content migration and reformatting',
        'Routine audits: links, metadata, performance, accessibility',
      ],
    },
    engagementNote:
      'Available as a continuous subscription, a one-time ownership build, or a defined intervention on an existing site.',
    engagementIds: ['subscription', 'ownership', 'project'],
    status: 'approved',
  },
  {
    slug: 'ai-systems',
    index: '02',
    name: 'AI systems',
    shortName: 'AI systems',
    summary:
      'Applied AI where it earns its place: assistants grounded in your own content, AI-assisted content operations, and agentic workflows when a simpler answer will not do.',
    statement: { lead: 'Useful AI is', mark: 'boring AI', tail: '. That is the point.' },
    lead: 'The interesting question is never "can AI do this?" — it is "what happens when it is wrong, and who notices?" We build AI into products and operations where the answer to that is satisfying, and we say so plainly when it is not.',
    meta: {
      title: 'AI systems',
      description:
        'Applied AI from Hello Machine: assistants grounded in your own content, AI-assisted content operations and agentic workflows — designed with human review where it matters.',
    },
    definition: [
      'We design and build AI features that sit inside real products and real operations: an assistant that answers from your own documentation, a system that drafts and classifies at volume, a workflow that reaches an agent only where an agent is genuinely warranted.',
      'Every system we build is designed around its failure mode first. What does it do when it does not know? Who reviews the output, and how quickly? What does the audit trail look like when someone asks how an answer was produced?',
      'A large share of this work ends with a smaller recommendation than the one you arrived with. That is a result, not a retreat.',
    ],
    deliverables: [
      {
        name: 'Opportunity assessment',
        description:
          'An honest read on where AI would help, where it would add risk, and what the simpler non-AI version of the same win looks like.',
      },
      {
        name: 'Grounded assistants',
        description:
          'Retrieval over your own content so answers cite something real, with the boundaries of what the assistant will and will not answer defined up front.',
      },
      {
        name: 'Content operations',
        description:
          'AI-assisted drafting, translation, restructuring and classification at volume, with a human review step designed into the workflow rather than bolted on.',
      },
      {
        name: 'Agentic workflows',
        description:
          'Multi-step systems that take actions, used where the task genuinely needs autonomy — with explicit scope, logging and a person who can stop it.',
      },
      {
        name: 'Evaluation and review',
        description:
          'How you will know whether it is working: test sets, review queues, and the measurements that tell you when quality drifts.',
      },
    ],
    signals: [
      'Your team answers the same questions from the same documents every week.',
      'You have a content or data volume problem that hiring will not solve economically.',
      'An AI feature was shipped, and nobody can tell whether it is helping.',
      'You need to explain to a stakeholder exactly where AI touches your process.',
    ],
    boundaries: [
      'We will not build a system whose failures nobody has budgeted to catch.',
      'We do not recommend AI where a form, a search index, or a written process would do the job better.',
      'We make no claim about model accuracy on your data until we have measured it on your data.',
    ],
    division: {
      human: [
        'Deciding whether the problem should be solved with AI at all',
        'Designing the review step, the escalation path and the stop button',
        'Prompt, retrieval and interface design',
        'Reading the evaluation results and acting on them',
      ],
      machine: [
        'Drafting, summarising, classifying and translating at volume',
        'Retrieval across a corpus no person can hold in their head',
        'Generating test cases and candidate edge cases for review',
      ],
    },
    engagementNote:
      'Usually starts as a defined intervention — an assessment or a first working system — and continues under subscription when the system needs ongoing tuning.',
    engagementIds: ['project', 'subscription'],
    status: 'approved',
  },
  {
    slug: 'automation',
    index: '03',
    name: 'Automation',
    shortName: 'Automation',
    summary:
      'The handoffs between your tools, done by software instead of by someone re-typing. CRM, forms, publishing, reporting and the marketing operations around them.',
    statement: { lead: 'Remove the', mark: 'copy and paste', tail: ' between systems.' },
    lead: 'Most operational drag is not a missing tool. It is the gap between two tools that someone crosses by hand, several times a day, and has stopped noticing. Automation is the unglamorous practice of closing those gaps and leaving them closed.',
    meta: {
      title: 'Automation',
      description:
        'Workflow and marketing automation from Hello Machine: CRM routing, forms, publishing, reporting and the integrations between the tools your team already uses.',
    },
    definition: [
      'We map the work as it actually happens — not as the process document says it happens — and then remove the steps that exist only because two systems do not talk to each other.',
      'The output is usually a mix of integrations, scheduled jobs and small internal tools, plus a written description of what now runs without a person and what still needs one.',
      'Automation that nobody can debug is a liability. Everything we build is observable: you can see what ran, what it did, and what happened when it failed.',
    ],
    deliverables: [
      {
        name: 'Workflow mapping',
        description:
          'A short, concrete map of the current process with the manual handoffs, duplicated data entry and silent failure points marked.',
      },
      {
        name: 'CRM and lifecycle automation',
        description:
          'Form capture, routing, lifecycle stages, notifications and the reporting that makes the pipeline legible. HubSpot-oriented where that is the stack.',
      },
      {
        name: 'Publishing and content workflows',
        description:
          'Getting content from where it is written to where it is published without a manual reformat in the middle.',
      },
      {
        name: 'Reporting',
        description:
          'Scheduled, boring, reliable reporting that arrives without anyone assembling it — and that says what it measured.',
      },
      {
        name: 'Handover and runbook',
        description:
          'Written documentation of what runs, when, and what to do when it breaks. Automation you cannot hand over is not finished.',
      },
    ],
    signals: [
      'The same record gets typed into two systems every day.',
      'Leads arrive, and routing them correctly depends on someone being at their desk.',
      'A monthly report takes a person a day to assemble.',
      'Something automated broke, and you found out from a customer.',
    ],
    boundaries: [
      'We do not automate a process that should be deleted instead. Mapping usually finds one.',
      'We do not build automation without an owner on your side who can be told when it fails.',
      'We do not take on integrations we cannot test against a real account.',
    ],
    division: {
      human: [
        'Deciding which steps should exist at all',
        'Designing the failure and escalation behaviour',
        'Integration architecture and data model decisions',
        'Verifying the automation against real cases before it goes live',
      ],
      machine: [
        'Drafting and scaffolding integration code',
        'Generating test fixtures and edge cases',
        'Monitoring runs and surfacing anomalies for review',
      ],
    },
    engagementNote:
      'Most often bought as a defined intervention. Ongoing monitoring and change requests fold into a subscription where the automation is business-critical.',
    engagementIds: ['project', 'subscription'],
    status: 'approved',
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((practice) => practice.slug === slug);
}

export function getEngagements(ids: string[]): Engagement[] {
  return ids
    .map((id) => engagements.find((engagement) => engagement.id === id))
    .filter((engagement): engagement is Engagement => Boolean(engagement));
}

export const servicesMeta = {
  title: 'Services',
  description:
    'Three practices — websites, AI systems and automation — and three ways to buy them: a continuous subscription, a build to own, or a defined intervention on what already exists.',
} as const;

export const servicesIntro = {
  statement: { lead: 'Three practices.', mark: 'Three ways', tail: ' to put them to work.' },
  lead: 'What the work is, and how you buy it, are separate questions. Pick one of each — or describe the problem and we will tell you which combination fits.',
  note: 'Every engagement is led by a named person who stays accountable after launch. AI is used throughout, and never as a substitute for that.',
} as const;
