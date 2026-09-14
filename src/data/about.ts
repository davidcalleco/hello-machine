/**
 * About / founder.
 *
 * CONTENT DEPENDENCY — discovery question 5 ("what claims, outcomes,
 * testimonials and founder credentials are approved?") is unanswered. This
 * page therefore states role and responsibility, which are structural facts,
 * and avoids anything unverified: no years of experience, no employer list,
 * no location claim, no team size, no certifications. Each of those is a
 * one-line addition once David supplies and approves the detail.
 */

export const aboutMeta = {
  title: 'About',
  description:
    'Hello Machine is an independent, founder-led studio. AI runs at the work that rewards speed; experienced people run at the work that rewards taste and accountability.',
} as const;

export const aboutIntro = {
  statement: {
    lead: 'A studio is',
    mark: 'a set of standards',
    tail: ', and someone who keeps them.',
  },
  lead: 'Hello Machine is an independent, founder-led studio. It exists because the interesting problem in digital work has moved: production is no longer the bottleneck, and judgment is.',
  note: 'Working note / 01 — founder-led is a commitment, not a stage. The person you scope with is the person accountable for what ships.',
} as const;

export const position = {
  title: 'What we believe',
  body: [
    'Anyone can generate a website now. That is genuinely new, and pretending otherwise is a poor foundation for a studio. What has not changed is that somebody has to decide what the thing should say, whether it is any good, and what to do when it is wrong.',
    'So we built the studio around that division. AI runs at the parts of the work that reward speed: drafts, variants, migrations, audits, the hundredth version of a layout. Experienced people run at the parts that reward taste and accountability: what the site argues, how it looks, what ships, and what happens after launch.',
    'The claim is not "AI instead of experts". It is that experts with this much leverage can do better work than either could alone — and that you should be able to see exactly where the line sits.',
  ],
} as const;

export const principles = [
  {
    index: '01',
    title: 'Judgment is the product.',
    description:
      'Speed is a commodity now. What you are buying is a set of decisions made by someone who has made them before and will stand behind them.',
  },
  {
    index: '02',
    title: 'Say the true version.',
    description:
      'No invented metrics, no borrowed credibility, no scope we cannot staff. If the honest answer is smaller than the pitch, the honest answer goes in the proposal.',
  },
  {
    index: '03',
    title: 'Build it so it can be left.',
    description:
      'Documented, standards-based, and yours. A studio that makes itself hard to leave is managing risk in the wrong direction.',
  },
  {
    index: '04',
    title: 'Craft is not decoration.',
    description:
      'Typography, semantics, contrast, focus order and load time are the work, not the finish applied to it.',
  },
];

export const founder = {
  name: 'David Calle',
  role: 'Founder',
  /** Structural facts and responsibilities only — see the note at the top. */
  summary: [
    'Hello Machine is led by David Calle. Engagements are run by the founder rather than handed to a junior team, which is the reason the studio takes on a deliberate number of them at a time.',
    'The practical version: the person who scopes your project is the person who makes the design decisions, reviews the implementation, signs off the launch and answers the email when something needs attention afterwards.',
  ],
  responsibilities: [
    'Strategy and positioning',
    'Art direction and design',
    'Implementation review and quality',
    'Client relationship and accountability',
  ],
  /** Additional specialists are engaged per project. Stated plainly so the
   *  founder-led framing is not mistaken for "one person does everything". */
  collaborators:
    'Specialist collaborators are brought in per engagement — and named to you when they are, so you always know who is doing the work.',
} as const;

export const studioFacts = [
  { label: 'Structure', value: 'Independent studio' },
  { label: 'Delivery', value: 'Founder-led' },
  { label: 'Languages', value: 'English / Español' },
  { label: 'Engagements', value: 'Subscription, ownership, intervention' },
] as const;
