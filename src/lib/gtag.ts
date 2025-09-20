// src/lib/gtag.ts

export const GA_TRACKING_ID = 'G-PVNF17B9L6' // ✅ seu ID GA4

// Track de pageview (navegação)
export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Evento de lead
export const generateLead = ({
  value,
  currency,
  lead_source,
}: {
  value: number
  currency: string
  lead_source?: string
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      value,
      currency,
      lead_source,
    })
  }
}
