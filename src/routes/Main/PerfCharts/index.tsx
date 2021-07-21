import { Row } from 'antd'

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
      <LineChartWidget
        data={mapMetrics('TTFB')}
        title="TTFB"
        selectedUrls={selectedUrls}
      />

      <LineChartWidget
        data={mapMetrics('FCP')}
        title="FCP"
        selectedUrls={selectedUrls}
      />

      <LineChartWidget
        data={mapMetrics('DomLoad')}
        title="DomLoad"
        selectedUrls={selectedUrls}
      />

      <LineChartWidget
        data={mapMetrics('WindowLoad')}
        title="WindowLoad"
        selectedUrls={selectedUrls}
      />
    </Row>
  )
}

export default PerfCharts
