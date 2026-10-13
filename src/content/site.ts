import type { Credential, SocialLink } from './schema'

/**
 * Who the site is about. START HERE: every page, the sidebar, the SEO tags and the legal pages read
 * these values, so changing them here changes them everywhere.
 */
export const site = {
  name: 'Prince Miguel Duga',
  brand: 'PRINCE.DUGA',
  /** The brand name as the sidebar logo shows it: the second part takes the accent color. */
  brandParts: ['PRINCE', '.DUGA'],
  /** Your logo mark, one file per theme (`light` = for light backgrounds). The 96px copies are the
   *  sidebar header (shown at 32-36px); the full ones are the Work logo faces. */
  logo: {
    light: '/images/brand/mark.webp',
    dark: '/images/brand/mark-light.webp',
    headerLight: '/images/brand/mark-96.webp',
    headerDark: '/images/brand/mark-light-96.webp',
  },
  /** The live address, no trailing slash. Canonical URLs, the sitemap and the JSON-LD use it. */
  url: 'https://princemiguelduga.com',
  role: 'Creative Video Editor & Media Manager',
  email: 'princemiguelinchangcoduga@gmail.com',
  emailSubject: 'Project inquiry',
  replyPromise: 'Reply within 24 hours.',
  location: 'Estancia, Iloilo, Philippines',
  /** Two-letter country code (ISO 3166) for the Person JSON-LD address. */
  countryCode: 'PH',
  /** Your clock, shown live at the top of the sidebar. Any IANA zone, e.g. 'America/New_York'. */
  timeZone: 'Asia/Manila',
  timePlace: 'in Estancia, Iloilo',
  avatar: { src: '/images/profile/avatar.webp', alt: 'Prince Miguel Duga', width: 400, height: 400 },
  /** The sidebar picture (112px, 44px on the rail). */
  avatarSmall: '/images/profile/avatar-224.webp',
  resumeUrl: '/documents/Prince_Miguel_Duga_Resume_Video_Editor.pdf',
  resumeDriveUrl: 'https://drive.google.com/file/d/1-13eBuiIFeQ5iz15dxR2PvJXaLGUOAz5/view?usp=sharing',
} as const

/** A credential shown in About and the sidebar check. Delete the `image` to show it without a badge. */
export const certification: Credential = {
  title: 'B.S. in Computer Science',
  detail: 'Magna Cum Laude · GWA 1.41 · Top 10',
  issuer: 'Northern Iloilo State University',
  href: 'https://drive.google.com/file/d/1-13eBuiIFeQ5iz15dxR2PvJXaLGUOAz5/view?usp=sharing',
  image: { src: '/images/badges/badge.webp', alt: 'NISU Magna Cum Laude Honors', width: 96, height: 96 },
}

/** Up to five fit the sidebar header. `icon` picks the glyph in components/brand/SocialIcon.tsx. */
export const socials: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/PrinceMiguelDuga', external: true, icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/mi_giieeil', external: true, icon: 'instagram' },
  { label: 'Telegram', href: 'https://t.me/09946119427', external: true, icon: 'telegram' },
  { label: 'GitHub', href: 'https://github.com/princemiguelduga', external: true, icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/princemiguelduga', external: true, icon: 'linkedin' },
]

/** Off-site links the pages point at. Replace each `#` with a real URL. */
export const externalLinks = {
  resource: 'https://nisumainsupremestudentcouncil.page.gd/',
  showcase: 'https://wedding-camille-blanckton.vercel.app/',
  company: 'https://nisumainsupremestudentcouncil.page.gd/',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
