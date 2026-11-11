import type { Image, Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Video editing, AI ads, design, and media.',
  lede: 'From creator-focused video edits and AI-assisted ads to campus graphics, event visuals, and technical projects.',
}

const cover = (id: string, label: string): Image => ({
  src: `/images/covers/${id}.webp`,
  alt: `${label} preview`,
  width: 1800,
  height: 1125,
  srcSet: [480, 640, 960].map((w) => `/images/covers/${w}/${id}.webp ${w}w`).join(', ') + `, /images/covers/${id}.webp 1800w`,
})

/**
 * The Home Services section: a stack of cards dealt onto a pile as the page scrolls. The display line
 * is the thin + bold pair below.
 */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Pick one',
  titleBold: 'or combine them.',
  explore: 'Explore',
  /** The Work chapter each card opens, by service id (a chapter id from home.ts). */
  work: {
    'service-1': 'screens',
    'service-2': 'case-studies',
    'service-3': 'websites',
    'service-4': 'screens',
    'service-5': 'apps',
  } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Graphic Design & Publication',
    summary: 'High-impact publication materials, event visuals, and mascot identity suites designed for student councils and organizations.',
    outcome: 'Standout Visuals',
    bullets: [
      'Official campus announcements & posters',
      'College mascot branding & identity systems',
      'Campaign memory books & donation drives',
    ],
    tools: [tools.toolA, tools.toolB, tools.toolC],
    thumbnail: cover('screen-9', '5th Commencement Exercises — Software Elites'),
  },
  {
    id: 'service-2',
    title: 'Video Editing & AI Production',
    summary: 'High-retention social edits, commercial ads, kinetic typography, client trailers, and generative AI video production.',
    outcome: 'High Retention',
    bullets: [
      'Short & long-form retention pacing (Reels, TikTok, YouTube)',
      'AI video workflows (Higgsfield, Kling, Runway, Google Veo)',
      'Kinetic typography, motion accents & sound design',
    ],
    tools: [tools.toolC, tools.toolB, tools.toolD],
    thumbnail: { src: '/images/covers/ai-motion-north-yard.svg', alt: 'AI motion graphics preview', width: 1600, height: 1000 },
  },
  {
    id: 'service-3',
    title: 'Web Design & Development',
    summary: 'Clean digital wedding invitations, student portals, and modern interactive web experiences built with Next.js.',
    outcome: 'Modern Web',
    bullets: [
      'Digital invitations with RSVP & timelines',
      'Student council portals & resource hubs',
      'Fast responsive interfaces on Vercel',
    ],
    tools: [tools.toolL, tools.toolG, tools.toolA],
    thumbnail: cover('site-1', 'Camille & Julius Wedding Platform'),
  },
  {
    id: 'service-4',
    title: 'LED Wall & Event Visuals',
    summary: 'Custom LED wall stage backdrops, commencement banners, and motion graphics for large-scale university celebrations.',
    outcome: 'Immersive Staging',
    bullets: [
      'Stage LED wall motion graphics & loops',
      'Commencement & academic assembly banners',
      'Live event visual asset coordination',
    ],
    tools: [tools.toolA, tools.toolB, tools.toolC],
    thumbnail: cover('led-wall-event', 'University Stage LED Wall Motion Graphics & Backdrop'),
  },
  {
    id: 'service-5',
    title: 'IT Support & Tech Prototyping',
    summary: 'Computer hardware troubleshooting, system maintenance, and Computer Science prototypes in machine learning and IoT.',
    outcome: 'Technical Solutions',
    bullets: [
      'Hardware diagnostics & system maintenance',
      'IoT smart parking & sensor integration',
      'Computer vision ML classification prototypes',
    ],
    tools: [tools.toolG, tools.toolK, tools.toolL],
    // Clean text-only for IT as requested: no interface mockup
  },
]
