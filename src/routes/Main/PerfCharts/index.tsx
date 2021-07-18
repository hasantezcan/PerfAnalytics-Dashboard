import { Row, Col, Card } from 'antd'
import { Empty } from 'antd'

import LineChartWidget from '@components/LineChartWidget'
import { useMetricContext } from '~/context/MetricProvider'
import { ChartMetric, MetricType, TimeStampValue } from '~/models/Metric'

function PerfCharts() {
  const { urlMetrics, selectedUrls } = useMetricContext()

  const mapMetrics = (type: MetricType): ChartMetric[] =>
    urlMetrics.map((url) => ({
      url: url.URL,
      data: url[type].map(
        (i): TimeStampValue => ({
          value: i.value,
          time: new Date(i.time).getTime()
        })
      )
    }))

  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <Card title="TTFB">
          {selectedUrls.length > 0 ? (
            <LineChartWidget data={mapMetrics('TTFB')} />
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <Card title="FCP">
          {selectedUrls.length > 0 ? (
            <LineChartWidget data={mapMetrics('FCP')} />
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <Card title="DomLoad">
          {selectedUrls.length > 0 ? (
            <LineChartWidget data={mapMetrics('DomLoad')} />
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <Card title="WindowLoad">
          {selectedUrls.length > 0 ? (
            <LineChartWidget data={mapMetrics('WindowLoad')} />
          ) : (
            <Empty />
          )}
        </Card>
      </Col>
    </Row>
  )
}

export default PerfCharts
