import { Row, Col } from 'antd'

import LineChartCard from '@components/LineChartCard'

function PerfCharts() {
  return (
    <Row gutter={16}>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="TTFB" />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="FCP" />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="DomLoad" />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="WindowLoad" />
      </Col>
    </Row>
  )
}

export default PerfCharts
