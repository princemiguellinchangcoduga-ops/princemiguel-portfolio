import type { Image, ToolMark } from './schema'
import { certification, externalLinks, site } from './site'
import { tools } from './tools'

/**
 * The Home About section: the portrait stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: "Creative Video Editor & BSCS Magna Cum Laude — crafting retention-driven edits and generative AI media.",
  lead: 'Creative Video Editor & CS Magna Cum Laude graduate crafting high-retention visual stories.',
  leadQuiet: '2+ years directing campus media, AI video workflows, and viral short-form edits.',
  note: {
    company: 'Northern Iloilo State University',
    product: { label: 'Supreme Student Council', href: externalLinks.company },
    rest: 'where I directed campus media publications, stage visual assets, and IT initiatives (Magna Cum Laude, GWA: 1.41).',
  },
  picture: {
    src: '/images/profile/desk.webp',
    srcSet: '/images/profile/800/desk.webp 800w, /images/profile/desk.webp 1200w',
    alt: `Portrait of ${site.name}, Creative Video Editor and Graphic Designer`,
    width: 1200,
    height: 889,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'Video Production & Pacing', tools: [tools.toolC, tools.toolB, tools.toolA] },
  { title: 'Generative AI Video Suite', tools: [tools.toolD, tools.toolE, tools.toolF] },
  { title: 'AI Tooling & Prompting', tools: [tools.toolH, tools.toolI, tools.toolJ] },
  { title: 'Software Engineering & IoT', tools: [tools.toolG, tools.toolL, tools.toolK] },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  /** A dark-theme version of the mark, when the light one would vanish on a dark ground (or the reverse). */
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'cert', title: certification.title, detail: certification.detail, image: { ...certification.image!, alt: '' }, href: site.resumeDriveUrl },
  { id: 'place', title: `Based ${site.timePlace}`, detail: 'Asia/Manila (GMT+8) · Available worldwide' },
  {
    id: 'partner',
    title: 'ASEAN Creators 3rd Place',
    detail: 'CHED Region VI Digital Storytelling Award Winner',
    href: 'https://www.facebook.com/share/v/1C4XBRYJrx/',
    image: { src: '/images/badges/64/partner-light.webp', alt: '', width: 64, height: 64 },
    imageDark: { src: '/images/badges/64/partner.webp', alt: '', width: 64, height: 64 },
  },
  {
    id: 'community',
    title: 'Video Editor Resume',
    detail: 'Official PDF Resume · View & Download',
    href: site.resumeUrl,
    image: { src: '/images/badges/64/community.webp', alt: '', width: 64, height: 64 },
  },
]
