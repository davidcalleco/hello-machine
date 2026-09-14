/**
 * Homepage composition copy.
 *
 * Structural content shared with other routes (engagements, practices,
 * process, FAQ) is imported from its own module — this file holds only the
 * text that belongs to the homepage's specific composition.
 */

export const homeMeta = {
  title: 'Hello Machine',
  description:
    'Hello Machine designs, builds and runs websites, AI systems and automation. Experienced people own the judgment; AI supplies the speed. Available as a subscription, a build to own, or a defined intervention.',
} as const;

export const hero = {
  /** The opening statement, split so the serif editing mark can land on the
   *  phrase a person would have underlined. */
  statement: { lead: 'Make the', mark: 'complex', tail: ' clear.' },
  standfirst:
    'Hello Machine designs, builds and runs websites, AI systems and automation. Experienced people own the judgment. AI supplies the speed.',
  note: {
    label: 'Working note / 01',
    body: 'Good digital work is not generated. It is edited, tested, and held to a standard.',
  },
  meta: [
    { label: 'Studio', value: 'Independent / founder-led' },
    { label: 'Practices', value: 'Websites, AI systems, automation' },
    { label: 'Field', value: 'English / Español' },
  ],
} as const;

export const offerSection = {
  index: '02',
  label: 'The offer',
  statement: { lead: 'Three ways to put a better website', mark: 'to work', tail: '.' },
  note: 'Choose the level of ownership, momentum or intervention you need. The accountability does not change with the tier.',
} as const;

export const judgment = {
  index: '03',
  label: 'The division of labour',
  statement: { lead: 'Speed is useful.', mark: 'Judgment', tail: ' is the product.' },
  lead: 'Plenty of studios now quietly ship machine output and hope nobody checks. We do the opposite: we tell you exactly where the machine helps, and a named person stays answerable for every decision that reaches your customers.',
  columns: [
    {
      key: 'machine',
      label: 'The machine runs at',
      title: 'Everything that rewards speed.',
      items: [
        'First drafts of copy, structure and layout',
        'Variants worth comparing, generated in minutes',
        'Bulk content migration and reformatting',
        'Routine audits: links, metadata, performance, accessibility',
        'Research synthesis and the first pass at anything repetitive',
      ],
    },
    {
      key: 'human',
      label: 'People run at',
      title: 'Everything that carries risk or needs taste.',
      items: [
        'Strategy, positioning and information architecture',
        'Editorial judgment on every published word',
        'Visual design, typography and interaction',
        'Implementation quality, accessibility and performance',
        'What ships, what does not, and what happens when it breaks',
      ],
    },
  ],
  assurance:
    'If a page is wrong, slow or inaccessible, that is ours to fix — not the tooling’s to excuse.',
} as const;

export const capabilitySection = {
  index: '04',
  label: 'Capability',
  statement: { lead: 'One accountable', mark: 'system', tail: ', not six suppliers.' },
  note: 'Strategy through maintenance under one roof, so nothing falls into the gap between agencies.',
  items: [
    {
      name: 'Strategy',
      description:
        'Positioning, audience and structure — the decisions that determine whether the rest of the work pays off.',
    },
    {
      name: 'Design',
      description:
        'Visual systems, typography, layout and interaction, documented so they hold as the site grows.',
    },
    {
      name: 'Content',
      description: 'Messaging, copy and content models. Drafted fast, edited hard, signed off.',
    },
    {
      name: 'Implementation',
      description: 'Semantic, standards-based front-end work and the integrations behind it.',
    },
    {
      name: 'Hosting & care',
      description: 'Deployment, domains, backups, updates, monitoring and a route to a human.',
    },
    {
      name: 'SEO & AEO',
      description:
        'Technical foundations, structured data and content shaped to be found and cited.',
    },
    {
      name: 'Automation',
      description: 'The handoffs between your tools, done by software instead of by re-typing.',
    },
    {
      name: 'Optimisation',
      description:
        'Core Web Vitals, accessibility conformance and iteration based on what the site actually does.',
    },
  ],
} as const;

export const proof = {
  index: '05',
  label: 'Evidence',
  statement: { lead: 'Built with', mark: 'judgment', tail: '.' },
  lead: 'Hello Machine is a young studio built on experience that is not. We would rather show you relevant work in a call, with context, than publish three vague case studies with the interesting parts removed.',
  points: [
    {
      index: '01',
      title: 'Founder-led delivery',
      description:
        'Every engagement is run by the founder, drawing on professional website strategy, design and implementation work.',
    },
    {
      index: '02',
      title: 'Selected work, shared directly',
      description:
        'We walk through relevant past work on a call. Public case studies are in preparation as client permissions are confirmed.',
    },
    {
      index: '03',
      title: 'No borrowed credibility',
      description:
        'You will not find invented metrics, stock testimonials or a logo wall here. When we have results we can evidence, they will appear.',
    },
  ],
  action: { label: 'See what we can show you', href: '/work/' },
} as const;

export const processSection = {
  index: '06',
  label: 'Process',
  statement: { lead: 'Signal in.', mark: 'Shipped work', tail: ' out.' },
  note: 'Five steps, in the same order every time, each with a named owner. The sequence is not novel — running it properly is the part most projects skip.',
  action: { label: 'The full process', href: '/process/' },
} as const;

export const faqSection = {
  index: '07',
  label: 'Questions',
  statement: { lead: 'The things worth', mark: 'asking first', tail: '.' },
} as const;

export const invitation = {
  index: '08',
  label: 'Invitation',
  statement: { lead: 'Tell us what the site', mark: 'needs to do', tail: '.' },
  lead: 'A short call is usually enough to work out which of the three ways to work fits, what it would take, and whether we are the right studio for it.',
  expectations: [
    'Thirty minutes, no deck, no pressure',
    'You describe the situation; we ask about constraints and outcomes',
    'You leave with a recommendation, including “not yet” if that is the honest one',
    'A written scope and a number follow if it is a fit',
  ],
} as const;
