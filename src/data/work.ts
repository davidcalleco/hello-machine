import type { ContentStatus } from './types';

/**
 * Evidence, not a portfolio.
 *
 * CONTENT DEPENDENCY — discovery question 2 ("which Candid Leap projects and
 * client names/assets can be publicly referenced?") is unanswered. Until it
 * is, this page publishes only what is true and checkable today:
 *
 *   - the site you are reading, which is our own work and inspectable;
 *   - the domains the founder has delivered in, described without naming
 *     clients or claiming outcomes;
 *   - an explicit statement that case studies are in preparation.
 *
 * `caseStudies` below holds the reserved slots so the dependency is visible in
 * the data. They are intentionally NOT rendered as placeholder rows: empty
 * cards marked "coming soon" weaken the page more than their absence does.
 * When permission arrives, fill in the real entries and render them here.
 */

export const workMeta = {
  title: 'Work',
  description:
    'What Hello Machine can show you today: this site, the founder’s delivery history, and how relevant past work is walked through on a call. Case studies are in preparation.',
} as const;

export const workIntro = {
  statement: { lead: 'No logo wall.', mark: 'Evidence', tail: ' instead.' },
  lead: 'Hello Machine is a young studio built on experience that is not. Rather than pad this page, here is exactly what we can show you today and what is still being prepared.',
  note: 'Working note — we would rather walk you through relevant work in a call, with context, than publish three vague summaries with the interesting parts removed.',
} as const;

export interface EvidenceItem {
  index: string;
  name: string;
  kind: string;
  description: string;
  detail: string[];
  action?: { label: string; href: string };
}

export const evidence: EvidenceItem[] = [
  {
    index: '01',
    name: 'This website',
    kind: 'Studio work / inspectable',
    description:
      'The clearest available sample is the one you are reading. It was designed and built the way we build client work, and every claim on it had to survive the same editorial standard we apply elsewhere.',
    detail: [
      'Art direction developed as composition studies before any component was written',
      'Component-driven build with a documented token system and semantic colour roles',
      'Keyboard-operable throughout, with visible focus and no meaning carried by motion alone',
      'Static-first: the page is fully legible and usable with JavaScript disabled',
    ],
    action: { label: 'Read how we work', href: '/process/' },
  },
  {
    index: '02',
    name: 'Founder delivery history',
    kind: 'Relevant experience',
    description:
      'Engagements are led by the founder, drawing on professional website strategy, design and implementation work delivered through Candid Leap and earlier practice.',
    detail: [
      'Website strategy, information architecture and content production',
      'Design systems and front-end implementation',
      'Platform migrations and technical clean-up on existing sites',
      'Marketing operations, CRM and workflow automation',
    ],
    action: { label: 'About the studio', href: '/about/' },
  },
  {
    index: '03',
    name: 'How we prove it',
    kind: 'On request',
    description:
      'On a call we walk through relevant past work directly: what the brief was, what we decided, what we would do differently. That conversation is more useful than a case study, and it is available before you commit to anything.',
    detail: [
      'Relevant examples chosen for your situation, not a generic reel',
      'Honest account of constraints, trade-offs and what did not work',
      'A view of the working method, not only the finished screens',
    ],
    action: { label: 'Ask to see relevant work', href: '/contact/?interest=work' },
  },
];

export const preparation = {
  title: 'What is in preparation',
  body: 'Case studies from Candid Leap client work are being written and will be published here as client permissions are confirmed. Until they are, this page does not carry them — and it does not carry invented metrics, stock testimonials or a logo wall in their place.',
  commitment:
    'When we have results we can evidence and permission to publish, they will appear here with the client named and the numbers sourced.',
} as const;

interface CaseStudySlot {
  index: string;
  /** Working label only — never rendered as public content. */
  workingTitle: string;
  status: ContentStatus;
  blockedOn: string;
}

/** Reserved slots. Not rendered. See the note at the top of this file. */
export const caseStudies: CaseStudySlot[] = [
  {
    index: '01',
    workingTitle: 'Candid Leap client project A',
    status: 'awaiting-permission',
    blockedOn: 'Client naming permission, asset rights, approved outcome statements.',
  },
  {
    index: '02',
    workingTitle: 'Candid Leap client project B',
    status: 'awaiting-permission',
    blockedOn: 'Client naming permission, asset rights, approved outcome statements.',
  },
  {
    index: '03',
    workingTitle: 'Candid Leap client project C',
    status: 'awaiting-permission',
    blockedOn: 'Client naming permission, asset rights, approved outcome statements.',
  },
];
