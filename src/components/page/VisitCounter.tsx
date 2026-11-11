import { useEffect, useState } from 'react'

/** Counts one visit per browser tab session; only the aggregate total is stored by the API. */
export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    let counted = false
    try {
      counted = sessionStorage.getItem('prince-portfolio-visit-counted') === 'yes'
    } catch {
      // Count this visit if storage is unavailable.
    }

    fetch('/api/visits', { method: counted ? 'GET' : 'POST', cache: 'no-store' })
      .then(async (response) => (response.ok ? (await response.json()) as { available?: boolean; count?: number } : null))
      .then((result) => {
        if (cancelled || !result?.available || typeof result.count !== 'number') return
        setCount(result.count)
        if (!counted) {
          try {
            sessionStorage.setItem('prince-portfolio-visit-counted', 'yes')
          } catch {
            // The count is still valid for this visit even when it cannot be remembered.
          }
        }
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
    }
  }, [])

  if (count === null) return null
  return <span className="site-foot__visits" aria-live="polite">{count.toLocaleString()} site visits</span>
}
