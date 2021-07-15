import { Row, Col, Card } from 'antd'

import TimeRangeFilter from '@components/TimeRangeFilter/index'
import UrlFilter from '~/components/UrlFilter'
import { fetchMetricByTimeRange, fetchMetricByURL } from '~/service'
import { useMetricContext } from '~/context/MetricProvider'

function Filter() {
  const { setUrlMetrics, setMetrics } = useMetricContext()

  const setTimeRange = async (start: any, end: any) => {
    setUrlMetrics(await fetchMetricByURL(start, end))
    setMetrics(await fetchMetricByTimeRange(start, end))
  }

  return (
    <Card>
      <Row gutter={16}>
        <Col md={12}>
          <TimeRangeFilter setTimeRange={setTimeRange} />
        </Col>
        <Col md={12}>
          <UrlFilter />
        </Col>
      </Row>
    </Card>
  )
}

export default Filter
