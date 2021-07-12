import { Row } from 'antd'

import LineChartCard from '@components/LineChartCard'

function PerfCharts() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <LineChartCard title="TTFB" />
        <LineChartCard title="FCP" />
        <LineChartCard title="DomLoad" />
        <LineChartCard title="WindowLoad" />
      </Row>
    </>
  )
}

export default PerfCharts
