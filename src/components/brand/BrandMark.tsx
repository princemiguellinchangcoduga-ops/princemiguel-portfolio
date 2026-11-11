import { site } from '@/content/site'

/** Pixel portrait logo (content/site.ts), on a transparent background for both themes. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden>
      <img src={site.logo.headerDark} alt="" width={96} height={96} fetchPriority="high" />
    </span>
  )
}
