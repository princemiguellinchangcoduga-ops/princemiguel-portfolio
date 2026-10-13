import { site } from './site'

export type LegalSection = { heading: string; paragraphs: string[] }

export type LegalDoc = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

/** What this site actually stores and loads. Keep in sync with src/lib/storage.ts and src/lib/analytics.ts. */
export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'October 13, 2026',
  intro: `This policy covers ${site.url.replace('https://', '')}, the portfolio of ${site.name} trading as ${site.brand}.`,
  sections: [
    {
      heading: 'What this site collects',
      paragraphs: [
        'This website does not automatically collect personal identifying data. The contact form directly opens your device’s default email client pre-filled with your message; no message content or contact information is stored on our servers.',
        `Any communications sent directly to ${site.email} are treated confidentially and used solely to discuss potential design, video editing, or technical collaborations.`,
      ],
    },
    {
      heading: 'What your browser stores',
      paragraphs: [
        'This site uses browser local storage exclusively for essential user preferences: maintaining your chosen light or dark theme and preserving sidebar navigation state.',
      ],
    },
    {
      heading: 'Analytics',
      paragraphs: [
        'No invasive third-party tracking cookies or personal data profiling tools are employed on this portfolio.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'This static website is hosted on secure web infrastructure. Standard non-identifying server logs (such as request timestamps and HTTP status codes) may be generated for reliability and diagnostic purposes.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        `If you have previously contacted ${site.name} via email and wish to request deletion of your correspondence history, you may do so at any time by contacting ${site.email}.`,
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'Any updates to this privacy policy will be posted on this page with an updated revision date.',
      ],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  updated: 'October 13, 2026',
  intro: `These terms cover your use of this portfolio site, created and operated by ${site.name} (${site.brand}).`,
  sections: [
    {
      heading: 'Using this site',
      paragraphs: [
        'Visitors are welcome to browse the project showcases, design portfolios, video clips, and live demonstrations presented on this website for evaluation purposes.',
      ],
    },
    {
      heading: 'Working together',
      paragraphs: [
        'Information presented on this website does not constitute a binding unilateral contract. Client engagements begin after formal communication, project scope agreement, and mutual confirmation.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        `Original visual designs, video edits, graphics, and written content created by ${site.name} remain protected intellectual property. Third-party trademarks, university logos, and organizational assets belong to their respective copyright holders.`,
      ],
    },
    {
      heading: 'No warranties',
      paragraphs: [
        'This portfolio is provided on an "as is" and "as available" basis without express or implied warranties regarding continuous uptime or error-free access.',
      ],
    },
    {
      heading: 'External links',
      paragraphs: [
        'This site links to external third-party platforms (such as Facebook, Google Drive, Vercel apps, and student council hubs). We do not control and are not responsible for third-party site contents.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms shall be governed by and construed in accordance with the applicable laws of the Republic of the Philippines.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions regarding these terms may be directed to ${site.email}.`],
    },
  ],
}
