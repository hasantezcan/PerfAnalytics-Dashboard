interface Metric {
  URL: string
  UserAgent: string
  TTFB: number
  FCP: number
  DomLoad: number
  WindowLoad: number
  createdAt: Date
}

interface TimeValue {
  time: Date
  value: number
}
interface MetricbyURL {
  URL: string
  TTFB: TimeValue
  FCP: TimeValue
  DomLoad: TimeValue
  WindowLoad: TimeValue
}

export type { Metric, MetricbyURL, TimeValue }
