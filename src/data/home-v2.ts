export const homeWork = [
  {
    id: 'own-site',
    title: 'Hello Machine',
    type: 'Studio site',
    note: 'A living proof of the method.',
    color: 'blue',
    href: '/work/',
  },
  {
    id: 'web-systems',
    title: 'Web systems',
    type: 'Practice',
    note: 'Structure before surface.',
    color: 'orange',
    href: '/services/websites/',
  },
  {
    id: 'useful-ai',
    title: 'Useful AI',
    type: 'Practice',
    note: 'Capability with a stop button.',
    color: 'lime',
    href: '/services/ai-systems/',
  },
  {
    id: 'quiet-automation',
    title: 'Quiet automation',
    type: 'Practice',
    note: 'Less copy and paste.',
    color: 'red',
    href: '/services/automation/',
  },
] as const;

export const homeSteps = [
  {
    id: 'frame',
    number: '01',
    title: 'Frame',
    text: 'Find the real problem and the sentence the site must make clear.',
  },
  {
    id: 'shape',
    number: '02',
    title: 'Shape',
    text: 'Turn that decision into structure, content and a visual language.',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    text: 'Make the thing fast, accessible and ready for the people using it.',
  },
  {
    id: 'compound',
    number: '04',
    title: 'Compound',
    text: 'Keep learning from the live system instead of starting over.',
  },
] as const;

export const homeOffers = [
  {
    id: 'continuous',
    name: 'Continuous',
    descriptor: 'Keep it moving.',
    bullets: ['Design, build and iterate', 'Hosting and maintenance', 'A standing request queue'],
    color: 'blue',
  },
  {
    id: 'ownership',
    name: 'Ownership',
    descriptor: 'Build to own.',
    bullets: [
      'One complete project',
      'Your accounts and documentation',
      'Optional support afterwards',
    ],
    color: 'orange',
  },
  {
    id: 'intervention',
    name: 'Intervention',
    descriptor: 'Fix one important thing.',
    bullets: ['A defined problem', 'Build, migrate or clean up', 'A clear handover'],
    color: 'red',
  },
] as const;
