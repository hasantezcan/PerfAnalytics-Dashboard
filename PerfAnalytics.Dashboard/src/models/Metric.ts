interface Metric {
  URL: string
  UserAgent: string
  FCP: number
  TTFB: number
  DomLoad: number
  WindowLoad: number
  createdAt: Date
}

export type { Metric }
