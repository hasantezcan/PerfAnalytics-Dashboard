import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'

import { Metric, MetricByURL } from '~/models/Metric'
import { fetchMetricByTimeRange, fetchMetricByURL } from '~/service'

interface MetricContextModel {
  metrics: Metric[]
  setMetrics: Dispatch<SetStateAction<Metric[]>>
  urlMetrics: MetricByURL[]
  setUrlMetrics: Dispatch<SetStateAction<MetricByURL[]>>
  selectedUrls: string[]
  setSelectedUrls: Dispatch<SetStateAction<string[]>>
}

const MetricContext = createContext<MetricContextModel>(
  {} as MetricContextModel
)
function MetricProvider({ children }: PropsWithChildren<any>) {
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [urlMetrics, setUrlMetrics] = useState<MetricByURL[]>([])
  const [selectedUrls, setSelectedUrls] = useState<string[]>([])

  useEffect(() => {
    const initializeMetrics = async () => {
      setMetrics(await fetchMetricByTimeRange())
      setUrlMetrics(await fetchMetricByURL())
    }

    initializeMetrics().then()
  }, [])

  const context: MetricContextModel = {
    metrics,
    setMetrics,
    urlMetrics,
    setUrlMetrics,
    selectedUrls,
    setSelectedUrls
  }

  return (
    <MetricContext.Provider value={context}>{children}</MetricContext.Provider>
  )
}

const useMetricContext = () => useContext(MetricContext)

export { MetricContext, MetricProvider, useMetricContext }
