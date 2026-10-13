import type { MethodStep } from './schema'

/** Your method: the three jobs your service does for a client, in order. It names the steps of the Home automation diagram. */
export const method = {
  eyebrow: 'Production Process',
  title: 'Concept. Create. Deliver.',
  summary: 'A streamlined creative workflow from initial vision to polished, high-impact deliverables.',
  steps: [
    {
      name: 'Concept',
      body: 'Understanding the project objectives, gathering media assets, and establishing visual tone.',
      inputs: ['Project Brief', 'Moodboard', 'Brand Assets', 'Asset Review'],
    },
    {
      name: 'Create',
      body: 'Crafting balanced layouts, cutting video sequences, and refining color grading.',
      inputs: ['Canva Composition', 'Premiere Assembly', 'Pacing & Sound'],
    },
    {
      name: 'Deliver',
      body: 'Exporting optimized deliverables formatted for LED walls, social platforms, and digital portals.',
      inputs: ['High-Res Formats', 'LED Wall Presets', 'Web Deployment'],
    },
  ] satisfies MethodStep[],
}
