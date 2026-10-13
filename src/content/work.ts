import type { AppBuild, Demo, Image, LinkRef, WorkItem } from './schema'

export const workPage = {
  eyebrow: 'Work',
  title: 'Real designs & builds you can open.',
  lede: 'Explore graphic design publications, video production edits, live websites, and computer science systems.',
}

/* ---------- Image Helper Functions ---------- */

const cover = (id: string, label: string, noun = 'cover'): Image => ({
  src: `/images/covers/${id}.webp`,
  alt: `${label} ${noun}`,
  width: 1800,
  height: 1125,
  srcSet: [480, 640, 960].map((w) => `/images/covers/${w}/${id}.webp ${w}w`).join(', ') + `, /images/covers/${id}.webp 1800w`,
})

const screen = (id: string, alt: string, width = 1600, height = 900): Image => ({
  src: `/images/screens/${id}.webp`,
  alt,
  width,
  height,
  srcSet: [480, 640, 960].map((w) => `/images/screens/${w}/${id}.webp ${w}w`).join(', ') + `, /images/screens/${id}.webp ${width}w`,
})

const banner = (id: string, alt: string): Image => ({
  src: `/images/work/${id}.webp`,
  alt,
  width: 1600,
  height: 900,
  srcSet: [480, 640, 960].map((w) => `/images/work/${w}/${id}.webp ${w}w`).join(', ') + `, /images/work/${id}.webp 1600w`,
})

/* ---------- Featured Project: Award-Winning Video Edit ---------- */

export const featuredProject = {
  kicker: 'Award-Winning Video Edit',
  title: 'ASEAN Creators: Digital Storytelling',
  summary: 'Bagged 3rd Place in the Commission on Higher Education (CHED) Regional Office VI ASEAN Creators Digital Storytelling Competition. Produced and edited Entry #5 for Filamer Christian University.',
  link: { label: 'Watch 3rd Place Video on Facebook', href: 'https://www.facebook.com/share/v/1C4XBRYJrx/', external: true } satisfies LinkRef,
  lead: cover('video-asean', 'ASEAN Creators Digital Storytelling — 3rd Place Winner', 'video thumbnail'),
}

export const aseanVideo: WorkItem = {
  id: 'video-asean',
  name: 'ASEAN Creators: Digital Storytelling',
  kicker: '3rd Place Winner',
  group: 'Award-Winning Video Edit',
  summary: 'Bagged 3rd Place in the Commission on Higher Education (CHED) Regional Office VI ASEAN Creators Digital Storytelling Competition. Produced and edited Entry #5 for Filamer Christian University.',
  stack: 'Premiere Pro · CapCut · Documentary Pacing',
  image: cover('video-asean', 'ASEAN Creators Digital Storytelling', 'video thumbnail'),
  href: 'https://www.facebook.com/share/v/1C4XBRYJrx/',
}

/* ---------- AI Video Production Variations ---------- */

export const aiVideoProjects: WorkItem[] = [
  {
    id: 'video-drive-2',
    name: 'AI Commercial & Ad Production',
    kicker: 'AI Commercial Spot',
    group: 'Generative AI Commercials',
    summary: 'Modern vertical commercial spot combining generative AI video scenes, synthetic voiceover, dynamic picture-in-picture talking-head avatar, and crisp sales copy.',
    stack: 'Higgsfield · Kling · Runway · ElevenLabs · CapCut',
    image: cover('video-drive-2', 'AI Commercial & Ad Production', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1QwhfMAo6E3WIo5MQ2C8d8KwJmj_Snd-J/view?usp=sharing',
  },
  {
    id: 'video-drive-3',
    name: 'AI Horror Cinematic Short',
    kicker: 'AI Cinematic Short',
    group: 'Generative AI Cinema',
    summary: 'Atmospheric cinematic horror short crafted using generative AI visual prompting, eerie audio soundscapes, and tension-building pacing.',
    stack: 'Runway · Kling · ElevenLabs · CapCut',
    image: cover('video-drive-3', 'AI Horror Cinematic Short', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1aAJe1ytk00-KU_U2OAD3cp8tlujAZ4kz/view?usp=sharing',
  },
]

/* ---------- Commercial & Creator Edits Variations ---------- */

export const commercialEdits: WorkItem[] = [
  {
    id: 'video-drive-5',
    name: 'Cinematic Client Trailer',
    kicker: 'High-Impact Trailer',
    group: 'Client Trailers & Promos',
    summary: 'High-intensity teaser trailer cut for client promotion with dramatic audio hits, seamless speed ramps, and energetic pacing.',
    stack: 'Premiere Pro · CapCut · Sound Design',
    image: cover('video-drive-5', 'Cinematic Client Trailer', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1udbOxCuU64eFRABNrFfIrDdlntEsvY6u/view?usp=sharing',
  },
  {
    id: 'video-drive-1',
    name: 'Talking-Head Retention Test Edit',
    kicker: 'Retention Pacing',
    group: 'Short-Form Retention Edits',
    summary: 'High-retention talking-head test edit featuring dynamic punch-ins, sound effects, B-roll insertions, and pacing designed for maximum viewer retention.',
    stack: 'CapCut · Premiere Pro · Sound Design',
    image: cover('video-drive-1', 'Talking-Head Retention Test Edit', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1amrZzgXRiXQRu4Rv9bQByRGNnu7jJ64W/view?usp=sharing',
  },
  {
    id: 'video-drive-4',
    name: 'Kinetic Typography & Motion Edit',
    kicker: 'Kinetic Typography',
    group: 'Motion & Typography Reels',
    summary: 'Modern kinetic typography reel with rhythmic word-by-word text reveals, kinetic pop animations, and synchronized audio accents.',
    stack: 'CapCut · Canva · Motion Design',
    image: cover('video-drive-4', 'Kinetic Typography & Motion Edit', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1Ju_H3jRWk8wOgVy5_LHKeP7LZUIAD-o5/view?usp=sharing',
  },
]

/* ---------- YouTube Long-Form Edits Variations ---------- */

export const youtubeEdits: WorkItem[] = [
  {
    id: 'video-drive-6',
    name: 'Retro VHS Long-Form YouTube Edit',
    kicker: 'Retro VHS Aesthetic',
    group: 'Long-Form YouTube Production',
    summary: 'Stylized retro VHS video treatment for long-form discussion and documentary content, incorporating authentic scanlines, retro subtitles, and archival atmosphere.',
    stack: 'Premiere Pro · CapCut · VHS Aesthetics',
    image: cover('video-drive-6', 'Retro VHS Long-Form YouTube Edit', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1isVcphaYfTpcyZWJnbFFpsteWo-p-uCH/view?usp=sharing',
  },
  {
    id: 'video-drive-7',
    name: 'Clean YouTube Long-Form Interview Edit',
    kicker: 'Clean Multi-Cam Cuts',
    group: 'Long-Form YouTube Production',
    summary: 'Polished interview and talking-head YouTube edit featuring clean multicam cuts, noise removal, professional color correction, and smooth narrative pacing.',
    stack: 'Premiere Pro · CapCut · Clean Cuts',
    image: cover('video-drive-7', 'Clean YouTube Long-Form Interview Edit', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1SrDVIjBL_M14QfO-4GiaI1ocRox7YA3Y/view?usp=sharing',
  },
]

/* ---------- Campus & Event Video Features Variations ---------- */

export const campusVideos: WorkItem[] = [
  {
    id: 'video-1',
    name: 'Filamer Christian University Promo',
    kicker: 'Promotional Video',
    group: 'Campus & Event Media',
    summary: 'University promotional outreach and admissions video highlighting campus programs, aerial drone captures, and student life.',
    stack: 'CapCut · Grok · Gemini',
    image: cover('video-1', 'Filamer Christian University Promo', 'video thumbnail'),
    href: 'https://www.facebook.com/share/v/1HVMi3iXhY/',
  },
  {
    id: 'video-2',
    name: 'Street Nisunian Fighter — Dance Feature I',
    kicker: 'Dance Feature',
    group: 'Campus & Event Media',
    summary: 'Dynamic dance video filmed and edited during the university street dance competition.',
    stack: 'CapCut · Premiere Pro · Canva',
    image: cover('video-2', 'Street Nisunian Fighter Dance Feature', 'video thumbnail'),
    href: 'https://www.facebook.com/share/v/18862JkgwN/',
  },
  {
    id: 'video-3',
    name: 'Street Nisunian Fighter — Teaser',
    kicker: 'Event Teaser',
    group: 'Campus & Event Media',
    summary: 'High-energy teaser cut built to promote the street dance showcase ahead of the festival.',
    stack: 'CapCut · Grok · Gemini',
    image: cover('video-3', 'Street Nisunian Fighter Teaser', 'video thumbnail'),
    href: 'https://www.facebook.com/share/v/1Crr9e4kkG/',
  },
  {
    id: 'video-4',
    name: 'Campus Tour Guide Walkthrough',
    kicker: 'Campus Tour',
    group: 'Campus & Event Media',
    summary: 'Walkthrough video introducing university campus facilities and student spaces.',
    stack: 'CapCut · Premiere Pro · Canva',
    image: cover('video-4', 'Campus Tour Guide Walkthrough', 'video thumbnail'),
    href: 'https://www.facebook.com/share/v/194U3FgNAj/',
  },
  {
    id: 'video-5',
    name: 'Street Nisunian Fighter — Dance Feature II',
    kicker: 'Dance Feature',
    group: 'Campus & Event Media',
    summary: 'Extended dance feature spotlighting team performances and festival energy.',
    stack: 'CapCut · Canva',
    image: cover('video-5', 'Street Nisunian Fighter Dance Feature II', 'video thumbnail'),
    href: 'https://www.facebook.com/share/v/1HQXaWT4xT/',
  },
  {
    id: 'video-6',
    name: 'Unsettled — Best Short Film Award Winner',
    kicker: 'Award-Winning Short Film',
    group: 'Campus & Narrative Films',
    summary: 'Award-winning narrative short film directed and edited for cinematic storytelling, featuring dynamic aerial drone cinematography, color grading, and dramatic sound design.',
    stack: 'Premiere Pro · Drone Cinematography · Sound Design',
    image: cover('video-6', 'Unsettled Best Short Film Award Winner', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1H6PJWXFj2ffYv-vPqkE6CF_bQ9QjcqpB/view',
  },
  {
    id: 'video-led-wall',
    name: 'University Stage LED Wall — Motion Graphics & Visuals',
    kicker: 'Stage LED Visuals',
    group: 'Campus & Event Media',
    summary: 'High-impact golden laser stage visual loops and dynamic motion backdrops engineered for university convocations and celebrations.',
    stack: 'Premiere Pro · Motion Loops · Event Staging',
    image: cover('led-wall-event', 'University Stage LED Wall Motion Graphics', 'video thumbnail'),
    href: 'https://drive.google.com/file/d/1xzxFLg-xob-9L7x0hhQLTP3XLukvJx1_/view?usp=sharing',
  },
]

/* Combined video projects array */
export const videoProjects: WorkItem[] = [
  aseanVideo,
  ...aiVideoProjects,
  ...commercialEdits,
  ...youtubeEdits,
  ...campusVideos,
]

/* ---------- All-in-One Graphic Design Collection (18 Items) ---------- */

export const graphicDesigns: WorkItem[] = [
  /* Featured Highlight & Front Page */
  {
    id: 'event-grad',
    name: '5th Commencement Exercises — Software Elites',
    kicker: 'Graduation Tribute & Stage Visuals',
    group: 'Featured Highlight',
    summary: 'Commemorative class tribute and stage backdrop celebrating the graduating BS Computer Science Class of 2024 at Northern Iloilo State University.',
    image: screen('screen-9', '5th Commencement Exercises Software Elites', 1600, 900),
    href: 'https://www.facebook.com/PrinceMiguelDuga',
  },
  {
    id: 'led-wall-event',
    name: 'University Stage LED Wall — Motion Graphics & Visuals',
    kicker: 'Stage LED Visuals',
    group: 'Featured Highlight',
    summary: 'High-impact golden laser stage visual loops and dynamic motion backdrops engineered for university convocations and celebrations.',
    image: cover('led-wall-event', 'University Stage LED Wall Motion Graphics', 'thumbnail'),
    href: 'https://drive.google.com/file/d/1xzxFLg-xob-9L7x0hhQLTP3XLukvJx1_/view?usp=sharing',
  },

  /* Group 1: College Spirit Mascot Banners */
  {
    id: 'banner-phoenix',
    name: 'Phoenix — College of Arts & Sciences Spirit Banner',
    kicker: 'College Mascot Banner',
    group: 'College Spirit Mascot Banners',
    summary: 'Vibrant golden-flame mascot banner designed for the CAS Phoenix during university-wide sports fest and spirit events.',
    image: banner('gallery-6', 'Phoenix — College of Arts & Sciences Spirit Banner'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'banner-falcons',
    name: 'Falcons — College of Information & Computing Studies',
    kicker: 'College Mascot Banner',
    group: 'College Spirit Mascot Banners',
    summary: 'Sleek tech-infused cyan and navy falcon mascot banner representing CICS computing and IT students.',
    image: banner('gallery-1', 'Falcons — College of Information & Computing Studies Spirit Banner'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'banner-lions',
    name: 'Lions — College of Education Spirit Banner',
    kicker: 'College Mascot Banner',
    group: 'College Spirit Mascot Banners',
    summary: 'Regal golden lion banner with royal blue mane symbolizing dignity, passion, and educational leadership for the College of Education.',
    image: banner('gallery-2', 'Lions — College of Education Spirit Banner'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'banner-wolves',
    name: 'Wolves — College of Engineering Spirit Banner',
    kicker: 'College Mascot Banner',
    group: 'College Spirit Mascot Banners',
    summary: 'Steely metallic wolf emblem and dynamic geometric line art engineered for the College of Engineering.',
    image: banner('gallery-3', 'Wolves — College of Engineering Spirit Banner'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'banner-flamingos',
    name: 'Flamingos — College of Hospitality & Tourism',
    kicker: 'College Mascot Banner',
    group: 'College Spirit Mascot Banners',
    summary: 'Tropical coral and flamingo mascot banner radiating hospitality, service excellence, and vibrant campus spirit.',
    image: banner('gallery-4', 'Flamingos — College of Hospitality & Tourism Spirit Banner'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'banner-cheetahs',
    name: 'Cheetahs — College of Management Spirit Banner',
    kicker: 'College Mascot Banner',
    group: 'College Spirit Mascot Banners',
    summary: 'High-velocity cheetah mascot design channeling agility, strategic speed, and business acumen for the College of Management.',
    image: banner('gallery-5', 'Cheetahs — College of Management Spirit Banner'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },

  /* Group 2: Campus Initiatives & Publications */
  {
    id: 'initiative-ssc',
    name: 'NISU SSC Official Publication Suite',
    kicker: 'Campus Media',
    group: 'Campus Initiatives & Publications',
    summary: 'Official student council media suite: press releases, campus updates, and executive announcements reaching thousands of university students.',
    image: cover('case-study-1', 'NISU Supreme Student Council Publication Suite', 'cover'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'initiative-drive',
    name: 'Writing Their Future — Annual Donation Drive',
    kicker: 'Community Advocacy',
    group: 'Campus Initiatives & Publications',
    summary: 'Heartwarming social outreach campaign and collage poster raising school supplies and art materials for local schoolchildren.',
    image: cover('case-study-2', 'Writing Their Future Annual Donation Drive', 'cover'),
    href: 'https://www.facebook.com/PrinceMiguelDuga',
  },
  {
    id: 'initiative-updates',
    name: 'SSC Official Updates & Announcements',
    kicker: 'Council Public Info',
    group: 'Campus Initiatives & Publications',
    summary: 'Promotional bulletin graphics and public advisories for the Supreme Student Council at NISU Concepcion Campus.',
    image: screen('screen-1', 'SSC Official Updates & Announcements', 1600, 900),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'initiative-recruitment',
    name: 'SSC Membership & Volunteer Recruitment Drive',
    kicker: 'Council Recruitment',
    group: 'Campus Initiatives & Publications',
    summary: 'Digital recruitment poster and onboarding campaign welcoming student leaders into council committees.',
    image: screen('screen-7', 'SSC Membership & Recruitment Drive', 1600, 900),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },

  /* Group 3: Council Memory & Campaign Books */
  {
    id: 'book-secgen',
    name: 'SSC Memory & Campaign Book 1 — Secretary General',
    kicker: 'Campaign Memory Book',
    group: 'Council Memory & Campaign Books',
    summary: 'Comprehensive commemorative visual book celebrating student governance milestones, executive assemblies, and campus impact.',
    image: cover('process-doc', 'SSC Memory & Campaign Book 1 — Secretary General', 'cover'),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'book-finance',
    name: 'SSC Memory & Campaign Book 2 — Finance Secretary',
    kicker: 'Campaign Memory Book',
    group: 'Council Memory & Campaign Books',
    summary: 'Transparent visual portfolio chronicling financial stewardship, council budgets, and milestone student activities.',
    image: screen('screen-3', 'SSC Memory & Campaign Book 2 — Finance Secretary', 1600, 900),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },

  /* Group 4: Event & Festival Posters */
  {
    id: 'event-feb',
    name: 'Feb-higugmaanay sa NISU Valentine Festival',
    kicker: 'University Festival',
    group: 'Event & Festival Posters',
    summary: 'Multi-activity campus Valentine festival poster featuring Charot Tarot booths, live podcast sessions, and acoustic jams.',
    image: screen('screen-5', 'Feb-higugmaanay sa NISU Valentine Festival', 1600, 900),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
  {
    id: 'event-spotlight',
    name: 'University Student Leaders Spotlight',
    kicker: 'Leadership Feature',
    group: 'Event & Festival Posters',
    summary: 'Spotlight poster series honoring executive officers and college student council representatives.',
    image: screen('screen-10', 'University Student Leaders Spotlight', 1600, 900),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },

  /* Group 5: Esports & Visual Identity */
  {
    id: 'brand-esports',
    name: 'Sawarabinoman & EAJ 1Aspera Esports Posters',
    kicker: 'Esports Graphics',
    group: 'Esports & Visual Identity',
    summary: 'Cyberpunk-inspired tournament roster posters created for Mobile Legends competitive teams.',
    image: screen('screen-6', 'Sawarabinoman & EAJ 1Aspera Esports Posters', 1600, 900),
    href: 'https://www.facebook.com/PrinceMiguelDuga',
  },
  {
    id: 'brand-phoenix',
    name: 'Phoenix Mascot & Spirit Identity Launch',
    kicker: 'Visual Identity',
    group: 'Esports & Visual Identity',
    summary: 'Official branding launch graphic for the College of Arts and Sciences spirit identity system.',
    image: screen('screen-11', 'Phoenix Mascot & Spirit Identity Launch', 1600, 900),
    href: 'https://nisumainsupremestudentcouncil.page.gd/',
  },
]

export const screens = graphicDesigns

/* Legacy exports preserved for compatibility */
export const caseStudies = [
  {
    id: 'case-study-1',
    title: 'NISU Supreme Student Council Publication Suite',
    summary: 'High-impact publication materials and official press visuals created for university-wide announcements and campus events.',
    link: { label: 'Visit Student Council Hub', href: 'https://nisumainsupremestudentcouncil.page.gd/', external: true } satisfies LinkRef,
  },
  {
    id: 'case-study-2',
    title: 'Writing Their Future — Annual Donation Drive',
    summary: 'Heartwarming collage poster and social campaign supporting local children with educational and art materials.',
    link: { label: 'View Campaign on Facebook', href: 'https://www.facebook.com/PrinceMiguelDuga', external: true } satisfies LinkRef,
  },
]

export const processDoc = {
  title: 'Supreme Student Council Memory & Campaign Books',
  summary: 'Dynamic photo collage series celebrating student council leadership, election platforms, and university milestones.',
  link: { label: 'Open Publication Overview', href: 'https://nisumainsupremestudentcouncil.page.gd/', external: true } satisfies LinkRef,
}

/* ---------- Websites ---------- */

const demo = (dir: string, file: string, label: string, tag: string, summary: string, href?: string): Demo => ({
  id: file,
  label,
  tag,
  summary,
  href: href ?? `/demos/${dir}/${file}.html`,
})

export const sampleSites: Demo[] = [
  demo(
    'sites',
    'site-1',
    'Camille & Julius Wedding',
    'Next.js & Vercel',
    'Elegant digital wedding invitation featuring online RSVP, event schedule, and photo gallery.',
    'https://wedding-camille-blanckton.vercel.app/',
  ),
  demo(
    'sites',
    'site-2',
    'NISU Main SSC Information Hub',
    'Web Portal',
    'Official digital portal for the Supreme Student Council with announcements, officer directory, and student resources.',
    'https://nisumainsupremestudentcouncil.page.gd/',
  ),
  demo(
    'sites',
    'site-3',
    'Digital Record Logbook',
    'Next.js & Vercel',
    'Digital record management logbook engineered for the NISU Office of the Registrar to track document releases, receipts, and live database storage.',
    'https://logbook-blanckton.vercel.app/',
  ),
]

export const funnelPages: Demo[] = []
export const bookingPages: Demo[] = []

/* ---------- Apps (IT Systems & ML) — Pure text descriptions only, NO UI mockups ---------- */

export const apps: AppBuild[] = [
  {
    id: 'app-1',
    name: 'TingaFresh ML',
    kind: 'Machine Learning & Computer Vision',
    tagline: 'Computer vision pen shell freshness classification.',
    summary: 'BS Computer Science thesis research applying convolutional neural network classification and computer vision algorithms to evaluate the freshness levels of pen shells (Atrina pectinata / tinga) directly from camera images.',
    stack: 'Python · OpenCV · TensorFlow · Mobile ML',
    status: 'Live',
  },
  {
    id: 'app-2',
    name: 'SmartPark IoT',
    kind: 'IoT & Embedded Systems',
    tagline: 'Automated sensor-based campus parking management.',
    summary: 'Applied hardware engineering system utilizing ultrasonic distance sensors, microcontroller circuitry, and real-time display logic to monitor parking slot availability and guide campus motorists automatically.',
    stack: 'ESP32 / Arduino · Ultrasonic Sensors · C++ · IoT Dashboard',
    status: 'Live',
  },
  {
    id: 'app-3',
    name: 'FaceLog Attendance',
    kind: 'Computer Vision & Biometrics',
    tagline: 'Contactless automated facial recognition attendance.',
    summary: 'Automated attendance logging system powered by facial detection and identification algorithms to record student attendance logs reliably without physical touchpoints.',
    stack: 'Python · OpenCV · FaceNet · SQLite',
    status: 'Beta',
  },
]

export const experiments = [
  {
    title: 'Campus Video Features',
    summary: 'University promotional videos, street dance features, and faith-centered edits.',
    builds: campusVideos.map((v) => ({ name: v.name, summary: v.summary, stack: v.stack ?? '', status: 'Live' as const })),
  },
]

export const sideProjects = [
  {
    title: 'Commercial & Creator Edits',
    summary: 'High-retention client trailers, talking-head edits, and kinetic typography reels.',
    builds: commercialEdits.map((v) => ({ name: v.name, summary: v.summary, stack: v.stack ?? '', status: 'Live' as const })),
  },
]

/** Number of builds across every Work chapter, shown as the sidebar badge. Derived, never typed in. */
export const workCount =
  1 + // Featured Video Edit (ASEAN Creators)
  aiVideoProjects.length + // 2 AI videos
  commercialEdits.length + // 3 Commercial edits
  youtubeEdits.length + // 2 YouTube edits
  campusVideos.length + // 6 Campus videos
  sampleSites.length + // 3 Web portals
  apps.length + // 3 IT systems
  graphicDesigns.length // 18 Graphic designs
