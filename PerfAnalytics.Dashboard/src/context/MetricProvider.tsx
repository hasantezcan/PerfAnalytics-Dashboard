import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

import { Metric } from '~/models/Metric'

interface MetricContextModel {
  metrics: Metric[]
  setMetrics: Dispatch<SetStateAction<Metric[]>>
}

const MetricContext = createContext<MetricContextModel>({} as MetricContextModel)
function MetricProvider({ children }: PropsWithChildren<any>) {
  const [metrics, setMetrics] = useState<Metric[]>([])

  const context: MetricContextModel = {
    metrics,
    setMetrics
  }

  return (
    <MetricContext.Provider value={context}>{children}</MetricContext.Provider>
  )
}

const useMetricContext = () => useContext(MetricContext)

export { MetricContext, MetricProvider, useMetricContext }
