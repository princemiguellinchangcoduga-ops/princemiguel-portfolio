import type { ToolMark } from './schema'

const mark = (name: string, file: string, mono?: true): ToolMark => ({ name, logo: `/images/tools/${file}`, mono })

/**
 * Every tool logo the site can show. Pages reference these, never a raw path. The twelve marks are
 * generic placeholders (public/images/tools/tool-01.svg ... tool-12.svg): swap each name and file for a
 * real tool you use. A black one-colour logo takes a third argument, `true`, so it is inverted on dark
 * grounds and never disappears.
 */
export const tools = {
  toolA: mark('Canva', 'tool-canva.svg'),
  toolB: mark('Adobe Premiere Pro', 'tool-premiere.svg'),
  toolC: mark('CapCut', 'tool-capcut.svg'),
  toolD: mark('Runway AI', 'tool-runway.svg'),
  toolE: mark('Kling AI', 'tool-kling.svg'),
  toolF: mark('ElevenLabs', 'tool-elevenlabs.svg'),
  toolG: mark('Python', 'tool-python.svg'),
  toolH: mark('Higgsfield AI', 'tool-higgsfield.svg'),
  toolI: mark('Grok AI', 'tool-grok.svg'),
  toolJ: mark('Google Gemini', 'tool-gemini.svg'),
  toolK: mark('IoT & Sensors', 'tool-iot.svg'),
  toolL: mark('Next.js', 'tool-nextjs.svg'),
} satisfies Record<string, ToolMark>

/** The daily drivers, in the order you want them shown. */
export const dailyTools: ToolMark[] = [
  tools.toolC,
  tools.toolB,
  tools.toolA,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolH,
  tools.toolI,
  tools.toolJ,
  tools.toolG,
  tools.toolL,
  tools.toolK,
]
