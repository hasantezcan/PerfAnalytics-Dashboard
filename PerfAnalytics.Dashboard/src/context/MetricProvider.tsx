import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'

import { Metric, MetricbyURL } from '~/models/Metric'
import { fetchMetricByURL } from '~/service'

interface MetricContextModel {
  metrics: Metric[]
  setMetrics: Dispatch<SetStateAction<Metric[]>>
  urls: string[]
  setUrls: Dispatch<SetStateAction<string[]>>
}

const MetricContext = createContext<MetricContextModel>(
  {} as MetricContextModel
)
function MetricProvider({ children }: PropsWithChildren<any>) {
  // date.now
  const [timeRange, setTimeRange] = useState('')
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [urlMetrics, setUrlMetrics] = useState<MetricbyURL[]>([])
  const [urls, setUrls] = useState<string[]>([])

  useEffect(() => {
    // setUrlMetrics((()=>fetchMetricByURL()))
  }, [timeRange])

  const context: MetricContextModel = {
    metrics,
    setMetrics,
    urls,
    setUrls
  }

  return (
    <MetricContext.Provider value={context}>{children}</MetricContext.Provider>
  )
}

const useMetricContext = () => useContext(MetricContext)

export { MetricContext, MetricProvider, useMetricContext }
