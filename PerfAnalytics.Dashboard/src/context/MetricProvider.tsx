import { createContext, useContext, PropsWithChildren, useState } from 'react'

interface MetricContextModel {}

const MetricContext = createContext<MetricContextModel>(
  {} as MetricContextModel
)
function MetricProvider({ children }: PropsWithChildren<any>) {

  
  const context: MetricContextModel = {}

  return (
    <MetricContext.Provider value={context}>{children}</MetricContext.Provider>
  )
}

const useMetricContext = () => useContext(MetricContext)

export { MetricContext, MetricProvider, useMetricContext }
