declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type TrackEvent =
  | 'cta_click'
  | 'whatsapp_click'
  | 'product_view'
  | 'quote_start'
  | 'quote_submit'
  | 'form_error'
  | 'case_view'
  | 'video_start'
  | 'video_complete';

export function track(event: TrackEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') {return;}
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
