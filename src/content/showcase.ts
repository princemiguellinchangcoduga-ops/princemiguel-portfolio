import type { Faq, Image, ProductFilm, ProductTab } from './schema'
import { externalLinks } from './site'

/** The address shown in the browser-window bars around the film and the room screens. */
export const showcaseHost = 'nisumainsupremestudentcouncil.page.gd'

export const showcasePage = {
  eyebrow: 'Showcase',
  titleThin: 'Campus Media Hub,',
  titleBold: 'crafted for student life.',
  lede: 'The unified publication and media system for Northern Iloilo State University’s Supreme Student Council, centralizing official announcements, festival identities, and event visual assets.',
  footnote: 'Directed and produced by Prince Miguel Duga as SSC Creative & IT Lead.',
  cta: { label: 'Visit Live Information Hub', href: externalLinks.company, external: true },
  roomsTitle: 'The five creative facets',
}

/** A room capture (1600 wide) with 800 / 1200 copies: the rooms show at 343-970px (scripts/make-image-variants.py). */
const room = (file: string, alt: string, height: number): Image => ({
  src: `/images/showcase/${file}.webp`,
  alt,
  width: 1600,
  height,
  srcSet: `/images/showcase/800/${file}.webp 800w, /images/showcase/1200/${file}.webp 1200w, /images/showcase/${file}.webp 1600w`,
})

/** The product film: a short muted loop, no audio. Keep it small (a couple of MB). */
export const showcaseFilm: ProductFilm = {
  src: '/media/showcase-film.mp4',
  poster: { src: '/images/showcase/film-poster.webp', alt: 'NISU Creative Media Tour', width: 1280, height: 720 },
  pagePosters: { phone: '/images/showcase/film-poster-640.webp', wide: '/images/showcase/film-poster-960.webp' },
  name: 'NISU Student Council: Creative Media Tour',
  description: 'A curated walkthrough of the publication materials, college spirit mascots, and video features crafted for campus leadership.',
  duration: '1:15',
  // The date the film was first published (YYYY-MM-DD), used in the page's structured data.
  published: '2026-01-15',
}

/** Number + unit. Use only figures you can state as fact. */
export const showcaseStats: [string, string][] = [
  ['10K+', 'students reached across campuses'],
  ['50+', 'official publication materials'],
  ['6', 'college mascot identities'],
  ['1', 'unified information portal'],
]

/** The five rooms of the product, each with a caption and a screen. */
export const productTabs: ProductTab[] = [
  {
    id: 'room-1',
    label: 'Campus Announcements',
    body: 'High-impact promotional graphics and official updates designed to deliver urgent information clearly across student body channels.',
    image: room('room-1', 'SSC Official Updates and Announcements', 1000),
  },
  {
    id: 'room-2',
    label: 'College Spirit Banners',
    body: 'Complete set of six vertical banners establishing distinct mascot identities for Phoenix, Falcons, Lions, Wolves, Flamingos, and Cheetahs.',
    image: room('room-2', 'College Spirit Mascot Banners Series', 1000),
  },
  {
    id: 'room-3',
    label: 'Festival & Event Posters',
    body: 'Dynamic multi-event visuals crafted for annual celebrations including Feb-higugmaanay, Street Nisunian Fighter, and campus activities.',
    image: room('room-3', 'University Celebration and Event Posters', 1000),
  },
  {
    id: 'room-4',
    label: 'Leadership Memory Books',
    body: 'Comprehensive memory book collages preserving milestone events, governance proceedings, and student council election platforms.',
    image: room('room-4', 'Student Council Leadership Memory Book', 1000),
  },
  {
    id: 'room-5',
    label: 'Film Festival Graphics',
    body: 'Official publication posters for Sine sa NISU short film competition, honoring guest judges and student cinematic talent.',
    image: room('room-5', 'Sine sa NISU Film Festival Judge Showcase', 1000),
  },
]

/** Three questions people ask about the product, answered the way the product itself answers them. */
export const showcaseFaq: Faq[] = [
  {
    question: 'What is Prince’s role in the Supreme Student Council?',
    answer: 'Prince serves as Lead Graphic Designer and IT Specialist, responsible for visual branding, LED wall stage visuals, promotional video production, and digital information management.',
  },
  {
    question: 'What tools power this publication suite?',
    answer: 'The visual suite is crafted primarily in Canva and Adobe Creative Suite, while video edits are produced in Adobe Premiere Pro and CapCut with AI-assisted creative workflows.',
  },
  {
    question: 'How do students access the portal?',
    answer: 'The Information Hub is hosted live as a responsive web platform accessible from any device at nisumainsupremestudentcouncil.page.gd.',
  },
]
