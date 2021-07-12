import { Button, Typography } from 'antd'

// import { useMetricContext } from '~/context/MetricProvider'

import BaseLayout from '~/layouts/BaseLayout'
import { fetchMetricByTimeRange } from '~/service'
import PerfCharts from './PerfCharts/index'

function Main() {
  // const {} = useMetricContext()

  const { Title } = Typography

  return (
    <BaseLayout>
      <Title>PerfAnalytics.Dashboard</Title>
      <PerfCharts />
      <Button onClick={() => fetchMetricByTimeRange()}>getMetrics</Button>
    </BaseLayout>
  )
}

export default Main
