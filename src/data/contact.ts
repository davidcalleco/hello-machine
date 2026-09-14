/**
 * Contact and booking copy, plus the contact form's field definition.
 *
 * HUBSPOT READINESS — field `name` values below deliberately match HubSpot's
 * default contact property names (`firstname`, `lastname`, `email`, `company`,
 * `message`) or are clearly-named custom properties (`interest`, `timeline`).
 * Wiring is then a matter of setting PUBLIC_FORM_ENDPOINT to the HubSpot
 * Forms submission URL and creating the two custom properties — no markup
 * changes. Nothing in the UI claims the integration exists before it does.
 */

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  required: boolean;
  autocomplete?: string;
  /** Rendered as a hint under the label, not as placeholder text. */
  hint?: string;
  options?: { value: string; label: string }[];
  /** Grid span within the two-column form on wide screens. */
  span?: 'half' | 'full';
}

export const contactMeta = {
  title: 'Contact',
  description:
    'Book a call with Hello Machine or send an enquiry. Thirty minutes, no deck — you leave with a recommendation, including “not yet” if that is the honest one.',
} as const;

export const contactIntro = {
  statement: { lead: 'Start with', mark: 'the problem', tail: ', not the brief.' },
  lead: 'Describe what is actually going on. We will tell you which of the three ways to work fits, what it would take, and whether we are the right studio for it.',
  note: 'Working note — if the honest answer is that you do not need us yet, that is the answer you will get.',
} as const;

export const booking = {
  index: '01',
  label: 'Primary route',
  title: 'Book a call',
  lead: 'Thirty minutes, no deck, no pressure. The fastest way to find out whether this is a fit.',
  expectations: [
    'You describe the situation, the constraints and the deadline',
    'We ask the questions that change the recommendation',
    'You leave with a direction — including “not yet” if that is the honest one',
    'A written scope and a number follow if it is a fit',
  ],
  /** Shown when no scheduler URL is configured. Honest about the state of
   *  the integration rather than rendering a dead calendar embed. */
  pendingNote:
    'Online scheduling is being connected. Until it is live, send the form below or email directly and we will come back with times within one working day.',
} as const;

export const contactDetails = {
  index: '02',
  label: 'Direct route',
  title: 'Or just write',
  responseNote: 'We reply to everything within one working day, in English or Spanish.',
} as const;

export const formCopy = {
  index: '03',
  label: 'Enquiry',
  title: 'Tell us what is going on',
  submit: 'Send enquiry',
  consentLabel:
    'I agree that Hello Machine may store and use these details to respond to this enquiry.',
  /** CONTENT DEPENDENCY — replace with the reviewed privacy wording once the
   *  privacy policy is approved. `privacyLink` is the label on /privacy/. */
  privacyNote: 'We use these details to reply to you and for nothing else.',
  privacyLink: 'Read the privacy notice',
  /** Shown while PUBLIC_FORM_ENDPOINT is unset, so the form never pretends to
   *  submit into a system that is not connected. */
  pendingNote:
    'Form delivery is not connected yet. Until the CRM is wired up, use the email address above and your message reaches us immediately.',
  successNote:
    'Thanks — your enquiry is with us. Expect a reply within one working day; if it is urgent, say so and we will move.',
} as const;

export const formFields: FormField[] = [
  {
    name: 'firstname',
    label: 'First name',
    type: 'text',
    required: true,
    autocomplete: 'given-name',
    span: 'half',
  },
  {
    name: 'lastname',
    label: 'Last name',
    type: 'text',
    required: true,
    autocomplete: 'family-name',
    span: 'half',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    autocomplete: 'email',
    span: 'half',
  },
  {
    name: 'company',
    label: 'Company',
    type: 'text',
    required: false,
    autocomplete: 'organization',
    span: 'half',
  },
  {
    name: 'interest',
    label: 'What is this about?',
    type: 'select',
    required: false,
    span: 'half',
    options: [
      { value: '', label: 'Not sure yet' },
      { value: 'subscription', label: 'Continuous — website subscription' },
      { value: 'ownership', label: 'Ownership — a complete build to hand over' },
      { value: 'project', label: 'Intervention — build, migrate or improve' },
      { value: 'ai-systems', label: 'AI systems' },
      { value: 'automation', label: 'Automation' },
      { value: 'work', label: 'Seeing relevant work' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    name: 'timeline',
    label: 'Timing',
    type: 'select',
    required: false,
    span: 'half',
    options: [
      { value: '', label: 'No fixed date' },
      { value: 'urgent', label: 'Urgent — there is a deadline' },
      { value: 'quarter', label: 'This quarter' },
      { value: 'later', label: 'Planning ahead' },
    ],
  },
  {
    name: 'message',
    label: 'What is going on?',
    type: 'textarea',
    required: true,
    span: 'full',
    hint: 'The situation, the constraint, and what would count as this having worked.',
  },
];
