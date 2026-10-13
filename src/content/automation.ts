import { method } from './method'

/**
 * The live automation diagram on Home: a client's
 * journey through a creative production pipeline, drawn stage by stage as the page scrolls.
 *
 * Coordinates are in the diagram's own 1200 x 600 units: the main path is the top row, the call's
 * outcomes the bottom row. `plane` is who moves it: `lead` = the client / you, `auto` = the system sends
 * it. `step` is the method step (0, 1 or 2: the three steps in method.ts). Nodes are listed in build order.
 */
export type FlowPlane = 'lead' | 'auto'
export type FlowIcon = 'form' | 'email' | 'booked' | 'reminder' | 'alarm' | 'call' | 'proposal' | 'won' | 'later' | 'nurture' | 'lost'

export type FlowNode = {
  id: string
  title: string
  tag: string
  plane: FlowPlane
  icon: FlowIcon
  x: number
  y: number
  w: number
  h: number
  step: number
  /** One line for the inspector. */
  about: string
}

/** `solid` links are the lead path (arrows a packet runs); `dashed` links reroute it: a reschedule loops back, the call branches out. */
export type FlowLink = { from: string; to: string; style: 'solid' | 'dashed'; label?: string }

const ROWS = [64, 376]
const box = (col: number, row: number) => ({ x: 24 + col * 200, y: ROWS[row]!, w: 156, h: 136 })

export const liveAutomation = {
  eyebrow: 'Production Pipeline',
  titleThin: 'Concept. Create.',
  titleBold: 'Deliver.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'Brief to', rest: 'Final Release' },
  legend: { auto: 'Workflow', lead: 'Client journey' },
  zones: { booking: 'Inquiry', pipeline: 'Production' },
  connected: 'Pipeline active',
  hint: { hover: 'Hover a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    { id: 'form', title: 'Initial Brief', tag: 'Project inquiry', plane: 'lead', icon: 'form', ...box(0, 0), step: 0, about: 'Client reaches out with event goals, assets, and delivery deadline.' },
    { id: 'email', title: 'Scope Review', tag: 'Clarify specs', plane: 'auto', icon: 'email', ...box(1, 0), step: 1, about: 'Review dimensions, LED wall specs, video aspect ratios, and timeline.' },
    { id: 'booked', title: 'Scope Locked', tag: 'Terms confirmed', plane: 'lead', icon: 'booked', ...box(2, 0), step: 1, about: 'Creative direction, asset handoff, and milestones agreed upon.' },
    { id: 'day', title: 'First Draft', tag: 'Initial layout', plane: 'auto', icon: 'reminder', ...box(3, 0), step: 1, about: 'First layout preview or rough video cut shared for directional feedback.' },
    { id: 'hour', title: 'Revision Pass', tag: 'Polish & tune', plane: 'auto', icon: 'alarm', ...box(4, 0), step: 1, about: 'Refinements to typography, color balance, transitions, and audio.' },
    { id: 'call', title: 'Final Review', tag: 'Verify output', plane: 'lead', icon: 'call', ...box(5, 0), step: 2, about: 'Final walkthrough to verify against production and event requirements.' },
    { id: 'proposal', title: 'Final Export', tag: 'High-res pack', plane: 'lead', icon: 'proposal', ...box(0, 1), step: 2, about: 'Deliverables rendered in full resolution for display and print.' },
    { id: 'later', title: 'Next Phase', tag: 'Future term', plane: 'lead', icon: 'later', ...box(3, 1), step: 2, about: 'Concept queued for the next event or semester celebration.' },
    { id: 'lost', title: 'Re-scoped', tag: 'Adjusted', plane: 'lead', icon: 'lost', ...box(5, 1), step: 2, about: 'Project adjusted if event requirements or timelines shift.' },
    { id: 'won', title: 'Delivered', tag: 'Live in action', plane: 'lead', icon: 'won', ...box(1, 1), step: 2, about: 'Assets live on campus LED walls, publication feeds, or web.' },
    { id: 'nurture', title: 'Stay Connected', tag: 'Future collaboration', plane: 'auto', icon: 'nurture', ...box(4, 1), step: 2, about: 'Continued partnership for recurring university events and campaigns.' },
  ] satisfies FlowNode[],
  links: [
    { from: 'form', to: 'email', style: 'solid' },
    { from: 'email', to: 'booked', style: 'solid' },
    { from: 'booked', to: 'day', style: 'solid' },
    { from: 'day', to: 'hour', style: 'solid' },
    { from: 'hour', to: 'call', style: 'solid' },
    { from: 'hour', to: 'booked', style: 'dashed', label: 'Milestone adjusted' },
    { from: 'call', to: 'proposal', style: 'dashed' },
    { from: 'call', to: 'later', style: 'dashed' },
    { from: 'call', to: 'lost', style: 'dashed' },
    { from: 'proposal', to: 'won', style: 'solid' },
    { from: 'later', to: 'nurture', style: 'solid' },
  ] satisfies FlowLink[],
}
