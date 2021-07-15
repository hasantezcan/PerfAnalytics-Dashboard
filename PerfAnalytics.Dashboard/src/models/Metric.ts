interface MetricTypes {
  TTFB: string
  FCP: string
  DomLoad: string
  WindowLoad: string
}

type MetricType = keyof MetricTypes

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
interface MetricByURL {
  URL: string
  TTFB: TimeValue
  FCP: TimeValue
  DomLoad: TimeValue
  WindowLoad: TimeValue
}

interface ChartMetric {
  url: string
  data: TimeValue[]
}

export type { Metric, MetricByURL, TimeValue, MetricType, ChartMetric }
