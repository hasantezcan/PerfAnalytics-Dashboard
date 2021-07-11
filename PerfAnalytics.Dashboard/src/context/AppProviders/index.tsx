import { PropsWithChildren } from 'react'
import { MetricProvider } from '../MetricProvider'

function AppProviders({ children }: PropsWithChildren<any>) {
  return <MetricProvider>{children}</MetricProvider>
}

export default AppProviders
