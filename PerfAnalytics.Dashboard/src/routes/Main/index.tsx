import { Typography } from 'antd'

import { useMetricContext } from '~/context/MetricProvider'

import BaseLayout from '~/layouts/BaseLayout'
import PerfCharts from './PerfCharts/index'

function Main() {
  const {} = useMetricContext()

  const { Title } = Typography

  return (
    <BaseLayout>
      <Title>PerfAnalytics.Dashboard</Title>
      <PerfCharts />
    </BaseLayout>
  )
}

export default Main
