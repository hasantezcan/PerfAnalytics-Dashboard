import { useMetricContext } from '~/context/MetricProvider'
import ChartCard from '@components/ChartCard'

function Main() {
  const {} = useMetricContext()

  return (
    <>
      <ChartCard />
    </>
  )
}

export default Main
