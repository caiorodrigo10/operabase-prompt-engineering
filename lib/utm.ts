// UTM parameter capture and propagation
const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_placement',
  'utm_device',
] as const

export function appendUtmParams(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl

  const urlParams = new URLSearchParams(window.location.search)
  const url = new URL(baseUrl)

  UTM_PARAMS.forEach(param => {
    const value = urlParams.get(param)
    if (value) {
      url.searchParams.append(param, value)
    }
  })

  return url.toString()
}

export function getUtmParams(): Record<string, string | null> {
  if (typeof window === 'undefined') return {}

  const urlParams = new URLSearchParams(window.location.search)
  const params: Record<string, string | null> = {}

  UTM_PARAMS.forEach(param => {
    params[param] = urlParams.get(param)
  })

  return params
}
