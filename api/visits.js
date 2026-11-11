const key = 'portfolio:prince-miguel:visits'

export default async function visits(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ available: false })
  }

  const endpoint = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '')
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!endpoint || !token) return res.status(503).json({ available: false })

  const command = req.method === 'POST' ? 'incr' : 'get'
  try {
    const response = await fetch(`${endpoint}/${command}/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!response.ok) return res.status(502).json({ available: false })
    const payload = await response.json()
    const count = Number(payload.result)
    if (!Number.isSafeInteger(count) || count < 0) return res.status(502).json({ available: false })
    return res.status(200).json({ available: true, count })
  } catch {
    return res.status(502).json({ available: false })
  }
}
