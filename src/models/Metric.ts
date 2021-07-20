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
  Entries: Entry[]
  createdAt: Date
  _id: string
}

interface TimeValue {
  value: number
  time: Date
}
interface MetricByURL {
  URL: string
  TTFB: TimeValue[]
  FCP: TimeValue[]
  DomLoad: TimeValue[]
  WindowLoad: TimeValue[]
}

interface TimeStampValue {
  value: number
  time: number
}

interface ChartMetric {
  url: string
  data: TimeStampValue[]
}

export interface Entry {
  name: string
  initiatorType: string
  responseEnd: number
  transferSize: number
}

export type {
  Metric,
  MetricByURL,
  TimeValue,
  MetricType,
  ChartMetric,
  TimeStampValue
}
