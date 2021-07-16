import { Row, Col } from 'antd'
import moment from 'moment'

import LineChartCard from '@components/LineChartCard'
import { useMetricContext } from '~/context/MetricProvider'
import { MetricType, TimeValue } from '~/models/Metric'

function PerfCharts() {
  const { urlMetrics } = useMetricContext()

  const mapMetrics = (type: MetricType) => {
    return urlMetrics.map((url) => {
      return {
        url: url.URL,
        data:
          // @ts-ignore: Unreachable code error
          url[type].map((i: TimeValue) => {
            return { value: i.value, time: new Date(i.time).getTime() }
          })
      }
    })
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="TTFB" data={mapMetrics('TTFB')} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="FCP" data={mapMetrics('FCP')} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="DomLoad" data={mapMetrics('DomLoad')} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <LineChartCard title="WindowLoad" data={mapMetrics('WindowLoad')} />
      </Col>
    </Row>
  )
}

export default PerfCharts
