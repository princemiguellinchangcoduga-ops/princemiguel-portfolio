import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What kinds of projects do you take on?',
    answer: 'My main focus is short and long-form video editing, AI-assisted ads, and motion graphics. I also take on social graphics, campus visuals, and select web or technical projects.',
  },
  startSpeed: {
    question: 'How fast can you start on a project?',
    answer: 'Availability depends on the project and current schedule. Send the deliverables and target date, and I will confirm a realistic timeline.',
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
    answer: 'I will review the details you send and reply with next steps, timeline, and scope questions.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
