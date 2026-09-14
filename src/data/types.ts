/**
 * Shared content types.
 *
 * Content rule for this site: every string in `src/data` must be defensible
 * from PROJECT-BRIEF.md, DISCOVERY-PACKET.md or OFFER-AND-POSITIONING.md.
 * No client names, metrics, testimonials, awards or outcomes until real ones
 * are supplied and approved. Anything still waiting on David is flagged with
 * a `ContentStatus` so it is visible in the data rather than buried in copy.
 */

/** Tracks the approval state of a piece of real-world content. */
export type ContentStatus =
  /** Written from approved positioning; safe to publish. */
  | 'approved'
  /** Structure is real, the specifics are waiting on David. */
  | 'awaiting-input'
  /** Real work exists but public reference needs client permission. */
  | 'awaiting-permission';

export interface PageMeta {
  title: string;
  description: string;
}

export interface Engagement {
  id: string;
  index: string;
  name: string;
  /** One-line promise, used in the index rows. */
  line: string;
  summary: string;
  bestFor: string;
  includes: string[];
  /** Honest scoping note: what this is not. */
  boundary: string;
  action: { label: string; href: string };
}

export interface Practice {
  slug: string;
  index: string;
  name: string;
  /** Short label for navigation and catalogue rows. */
  shortName: string;
  summary: string;
  /** Masthead statement, split so one phrase can carry the serif mark. */
  statement: { lead: string; mark: string; tail?: string };
  lead: string;
  meta: PageMeta;
  definition: string[];
  deliverables: { name: string; description: string }[];
  signals: string[];
  boundaries: string[];
  division: {
    human: string[];
    machine: string[];
  };
  engagementNote: string;
  engagementIds: string[];
  status: ContentStatus;
}

export interface ProcessStep {
  index: string;
  name: string;
  intent: string;
  description: string;
  outputs: string[];
  owner: string;
}

export interface Faq {
  question: string;
  answer: string;
}
