import { Button, Typography } from 'antd'

// import { useMetricContext } from '~/context/MetricProvider'

import BaseLayout from '~/layouts/BaseLayout'
import { fetchMetricByTimeRange, fetchMetricByURL } from '~/service'
import PerfCharts from './PerfCharts'
import Filter from './Filter'

function Main() {
  // const {} = useMetricContext()

  const { Title } = Typography

  return (
    <BaseLayout>
      <Title>PerfAnalytics.Dashboard</Title>
      <Filter />
      <PerfCharts />
      <Button onClick={() => fetchMetricByTimeRange()}>getMetrics</Button>
      <Button onClick={() => fetchMetricByURL()}>getURLMetrics</Button>
    </BaseLayout>
  )
}

export default Main
