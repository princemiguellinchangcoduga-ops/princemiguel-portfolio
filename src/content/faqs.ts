import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What kinds of projects do you take on?',
    answer: 'I specialize in graphic design (publication materials, event posters, identity suites), video editing (university promos, event features, short films), and IT solutions including web development and technical support.',
  },
  startSpeed: {
    question: 'How fast can you start on a project?',
    answer: 'For fast-turnaround event graphics or quick video edits, I can usually begin within 24 to 48 hours. Larger multi-asset campaigns and websites are planned with clear milestones.',
  },
  needStack: {
    question: 'What software and formats do you deliver in?',
    answer: 'I deliver in standard high-res formats (PNG, SVG, PDF), video exports (1080p / 4K MP4 for social and LED stage displays), and modern web platforms (Next.js, React on Vercel).',
  },
  pricing: {
    question: 'How do you charge for your services?',
    answer: 'Pricing is scoped per deliverable (individual graphics, video edits) or as a bundled package for multi-day events, campaigns, and full web development projects.',
  },
  afterWrite: {
    question: 'What happens after I get in touch?',
    answer: 'I will reply within 24 hours to confirm your project requirements, delivery timeline, and provide a clear quote and kickoff schedule.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
