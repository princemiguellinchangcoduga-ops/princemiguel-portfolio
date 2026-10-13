import type { ClientAccount, Quote, VideoTestimonial } from './schema'

export const proofPage = {
  eyebrow: 'Proof & Experience',
  titleThin: 'Work trusted by',
  titleBold: 'campus leaders & clients.',
  bands: { videos: 'Video features', quotes: 'Feedback & reviews', clients: 'Organizations & partners' },
  lede: 'Explore featured video edits, feedback from university leaders and clients, and organizations I have collaborated with.',
}

/** Client names stay anonymised or named: the label is shown, the role and the work say what you do for them. */
export const clientAccounts: ClientAccount[] = [
  {
    label: 'NISU Supreme Student Council',
    role: 'Lead Graphic Designer & IT Specialist',
    work: 'Designed campus publication materials, campaign memory books, announcements, and LED wall stage visuals for university-wide events.',
    tags: ['Graphic Design', 'LED Stage Visuals', 'Canva'],
    logo: { src: '/images/clients/64/client-1.webp', alt: 'NISU Supreme Student Council logo', width: 64, height: 64 },
  },
  {
    label: 'Filamer Christian University',
    role: 'Promotional Video Editor',
    work: 'Cut and produced high-energy admissions and outreach promotional videos showcasing university facilities and campus programs.',
    tags: ['Video Editing', 'CapCut', 'Premiere Pro'],
    logo: { src: '/images/clients/64/client-2.webp', alt: 'Filamer Christian University logo', width: 64, height: 64 },
  },
  {
    label: 'Camille & Julius Wedding',
    role: 'Frontend Web Developer',
    work: 'Developed and deployed an interactive wedding invitation platform with custom RSVP workflow, schedules, and photo gallery.',
    tags: ['Next.js', 'Vercel', 'Responsive UI'],
  },
  {
    label: 'NISU College of Information & Computing',
    role: 'BSCS Magna Cum Laude Researcher',
    work: 'Built a machine learning computer vision classifier for pen shell freshness and developed automated sensor-driven parking systems.',
    tags: ['Machine Learning', 'IoT Sensors', 'Python'],
  },
]

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'client-clip-1',
    src: '/media/clip-1.mp4',
    poster: '/media/clip-1-poster.jpg',
    width: 640,
    height: 360,
    duration: '1:30',
    label: 'Filamer Christian University Promo',
    published: '2025-08-15',
  },
  {
    id: 'client-clip-2',
    src: '/media/clip-2.mp4',
    poster: '/media/clip-2-poster.jpg',
    width: 464,
    height: 832,
    duration: '2:15',
    label: 'Street Nisunian Fighter Dance Feature',
    published: '2025-10-20',
  },
]

/** Written feedback. Only named, dated quotes are used. */
export const communityQuotes: Quote[] = [
  {
    name: 'Emmanuel Lerona',
    context: 'Filmmaker & Professor, Sine sa NISU',
    date: 'Feb 15, 2026',
    text: 'Prince brings exceptional attention to visual rhythm and cinematic pacing. His creative work for Sine sa NISU reflected both artistic maturity and high technical capability.',
  },
  {
    name: 'Supreme Student Council Executive Board',
    context: 'Northern Iloilo State University',
    date: 'Jan 28, 2026',
    text: 'Prince transformed our student government publication materials into professional, polished visual assets. His LED wall graphics and event posters elevated our entire campus experience.',
  },
  {
    name: 'Camille & Julius',
    context: 'Wedding Website Clients',
    date: 'Nov 12, 2025',
    text: 'The digital invitation Prince built for our wedding was breathtaking, sleek, and effortless for our guests to use. Everything worked seamlessly on every mobile device.',
  },
  {
    name: 'CICS Faculty & Thesis Advisory Committee',
    context: 'College of Information and Computing Studies, NISU',
    date: 'Mar 10, 2026',
    text: 'Graduating Magna Cum Laude, Prince combined creative media leadership with rigorous computer science problem-solving in computer vision and embedded sensor systems.',
  },
]
