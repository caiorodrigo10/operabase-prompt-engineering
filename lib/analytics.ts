// Analytics wrapper — loads only if keys are configured via env vars
// No npm dependencies required — uses script injection

let posthogLoaded = false
let metaPixelLoaded = false

export const initPostHog = () => {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'
  if (!key || typeof window === 'undefined' || posthogLoaded) return

  posthogLoaded = true

  // Inject PostHog via script tag (no npm dependency needed)
  const script = document.createElement('script')
  script.innerHTML = `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('${key}', {
      api_host: '${host}',
      person_profiles: 'identified_only',
      capture_pageview: true,
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true,
    });
  `
  document.head.appendChild(script)
}

export const initMetaPixel = () => {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
  if (!pixelId || typeof window === 'undefined' || metaPixelLoaded) return
  if ((window as any).fbq) return

  metaPixelLoaded = true

  const fbq = function (...args: any[]) {
    if ((fbq as any).callMethod) {
      (fbq as any).callMethod.apply(fbq, args)
    } else {
      (fbq as any).queue.push(args)
    }
  }
  ;(fbq as any).push = fbq
  ;(fbq as any).loaded = true
  ;(fbq as any).version = '2.0'
  ;(fbq as any).queue = []
  ;(window as any).fbq = fbq
  ;(window as any)._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
  ;(window as any).fbq('init', pixelId)
  ;(window as any).fbq('track', 'PageView')
}

export const trackEvent = (name: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return
  try {
    const posthog = (window as any).posthog
    if (posthog && typeof posthog.capture === 'function') {
      posthog.capture(name, properties)
    }
  } catch {
    // Analytics not loaded — silently ignore
  }
}
