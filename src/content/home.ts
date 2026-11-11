import type { Demo, Image, ToolMark, WorkChapter, WorkItem } from './schema'
import { site } from './site'
import { method } from './method'
import { tools } from './tools'
import {
  aiVideoProjects,
  apps,
  aseanVideo,
  campusVideos,
  commercialEdits,
  graphicDesigns,
  sampleSites,
  workCount,
  youtubeEdits,
} from './work'

/**
 * Home page copy. The hero pairs a thin line with a bold one. The bold line is sized in `cqi` in
 * features/home/hero/hero.css so it fills the column: re-measure it when you change the words
 * (see the comment on `.hero__title` there).
 */
export const homeHero = {
  headlineThin: 'Creative Designer &',
  headlineBold: 'Video Editor.',
  subhead: 'Creator-first video edits, AI-assisted commercials, and motion visuals — shaped by a computer science background and two years in campus media leadership.',
  cta: { label: 'View My Work', to: '/#work' },
}

/**
 * The statement under the hero: words light up as the page scrolls, each keyword lands bold and
 * moves the tracker. Replace the words, keep four keywords (the tracker shows them in order).
 * A string is plain words; `{ key }` is a keyword.
 */
export type ManifestoPart = string | { key: string }

export const homeManifesto = {
  eyebrow: method.eyebrow,
  parts: [
    'Designing',
    { key: 'visuals' },
    'and editing',
    { key: 'stories' },
    'that bring campus events, organizations, and digital platforms to',
    { key: 'life' },
    'with clarity and',
    { key: 'impact.' },
  ] satisfies ManifestoPart[],
}

export const homeSections = {
  work: {
    eyebrow: 'Selected work',
    title: 'Video, AI ads, design and digital builds.',
  },
  proof: {
    eyebrow: 'Proof',
    title: 'Trusted by student councils & brands.',
  },
  objections: {
    eyebrow: 'Before you reach out',
    title: 'Three questions people frequently ask.',
  },
}

export const ctaBand = {
  title: "Let's bring your visual project to life.",
  body: 'Looking for creative publication materials, video editing, or IT technical support? Send an inquiry and let’s talk.',
  button: 'Email me your project details',
}

/* ---------- Work section ---------- */

/** Full-size covers, 1800x1125, with 480 / 640 / 960 copies for the Work tiles. */
const cover = (id: string, label: string, noun = 'cover'): Image => ({
  src: `/images/covers/${id}.webp`,
  alt: `${label} ${noun}`,
  width: 1800,
  height: 1125,
  srcSet: [480, 640, 960].map((w) => `/images/covers/${w}/${id}.webp ${w}w`).join(', ') + `, /images/covers/${id}.webp 1800w`,
})

/** A live demo page as a showcase item, with its full-size cover. */
const demoItem =
  (group: string) =>
  (demo: Demo): WorkItem => ({
    id: demo.id,
    name: demo.label,
    kicker: demo.tag,
    group,
    summary: demo.summary,
    image: cover(demo.id, demo.label, 'screenshot'),
    href: demo.href,
  })

/** The site's own mark for the card faces. */
const siteMark: ToolMark = { name: site.brand, logo: site.logo.light }

/** The URL of a chapter's showcase sheet. Real, shareable and in the sitemap. */
export const chapterPath = (id: string) => `/work/${id}`

export const workSection = {
  ...homeSections.work,
  titleThin: 'Builds you can',
  titleBold: 'open right now.',
  all: { label: `See all ${workCount} builds`, to: '/work' },
}

/**
 * The Work chapters, in bento order.
 * Consolidates all graphic designs into one all-in-one collection ('screens'),
 * and highlights video sample edits and their distinct variations across chapters.
 */
export const workChapters: WorkChapter[] = [
  {
    id: 'featured',
    title: 'Featured Video Edit',
    line: 'ASEAN Creators 3rd Place Award Winner.',
    count: 1,
    unit: 'award',
    description: 'Bagged 3rd Place in the CHED Region VI ASEAN Creators Digital Storytelling Competition. Produced and edited Entry #5 for Filamer Christian University.',
    marks: [tools.toolC, tools.toolB, siteMark],
    items: [aseanVideo],
    lead: cover('video-asean', 'ASEAN Creators Digital Storytelling — 3rd Place Winner', 'video thumbnail'),
    link: { label: 'Watch 3rd Place Video on Facebook', href: 'https://www.facebook.com/share/v/1C4XBRYJrx/', external: true },
  },
  {
    id: 'case-studies',
    title: 'AI Ads & Motion',
    line: 'AI-assisted product ads and motion graphics.',
    count: aiVideoProjects.length,
    unit: 'projects',
    description: 'AI-assisted product advertising and motion-led visual experiments, with embedded previews for the North Yard pickleball concept and chew powder product spot.',
    marks: [tools.toolD, tools.toolE, tools.toolF],
    items: aiVideoProjects,
  },
  {
    id: 'side-projects',
    title: 'Commercial & Creator Edits',
    line: 'Client trailers, hook retention & kinetic typography.',
    count: commercialEdits.length,
    unit: 'edits',
    description: 'Retention-optimized creator edits: high-impact client promotional trailers, hook-driven talking-head cuts, and rhythmic kinetic typography reels.',
    marks: [tools.toolC, tools.toolB, tools.toolA],
    items: commercialEdits,
  },
  {
    id: 'process',
    title: 'YouTube & Creator Edits',
    line: '70+ videos edited for YouTube creators.',
    count: youtubeEdits.length,
    unit: 'videos',
    description: 'More than 70 videos edited for YouTube creators, spanning short and long-form storytelling. These samples show a retro VHS treatment and a clean interview edit.',
    marks: [tools.toolB, tools.toolC],
    items: youtubeEdits,
  },
  {
    id: 'experiments',
    title: 'Campus Video Features',
    line: 'University recaps, dance competitions & faith cinema.',
    count: campusVideos.length,
    unit: 'videos',
    description: 'Official campus promotional outreach videos, high-energy street dance competition features, campus tour guides, and faith-centered cinematic cuts.',
    marks: [tools.toolC, tools.toolB, tools.toolA],
    items: campusVideos,
  },
  {
    id: 'screens',
    title: 'Graphic Design',
    line: 'Complete compiled collection of banners, publications & books.',
    count: graphicDesigns.length,
    unit: 'designs',
    description: 'All-in-one graphic design portfolio: 6-mascot college spirit banners, Supreme Student Council publications, annual donation drive campaigns, leadership memory books, festival posters, and esports branding.',
    marks: [tools.toolA, tools.toolB, siteMark],
    tile: cover('screen-9', '5th Commencement Exercises — Software Elites', 'cover'),
    items: graphicDesigns,
  },
  {
    id: 'websites',
    title: 'Web Portals',
    line: 'Wedding invitations, student council hubs & record logbooks.',
    count: sampleSites.length,
    unit: 'sites',
    description: 'Live web applications and administrative portals built with Next.js, modern web tools, and deployed on Vercel.',
    marks: [tools.toolL, tools.toolG, tools.toolA],
    items: sampleSites.map(demoItem('Live Websites')),
  },
  {
    id: 'apps',
    title: 'IT Systems & ML',
    line: 'Machine learning research & IoT prototypes.',
    count: apps.length,
    unit: 'systems',
    description: 'Machine learning pen shell freshness classifier, automated smart parking, and face recognition systems.',
    marks: [tools.toolG, tools.toolH, tools.toolK],
    items: apps.map((app) => ({
      id: app.id,
      name: app.name,
      kicker: app.kind,
      summary: app.summary,
      stack: app.stack,
      status: app.status,
    })),
  },
]

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
