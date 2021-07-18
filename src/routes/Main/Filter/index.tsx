import { useEffect } from 'react'
import { Row, Col, Card } from 'antd'

import TimeRangeFilter from '@components/TimeRangeFilter/index'
import UrlFilter from '~/components/UrlFilter'
import { fetchMetricByTimeRange, fetchMetricByURL } from '~/service'
import { useMetricContext } from '~/context/MetricProvider'

function Filter() {
  const {
    setUrlMetrics,
    setMetrics,
    urlMetrics,
    setSelectedUrls,
    selectedUrls
  } = useMetricContext()

  const urls = urlMetrics.map((url) => url.URL)

  const setTimeRange = async (start: any, end: any) => {
    const metricUrl = await fetchMetricByURL(start, end)
    const metricByTimeRange = await fetchMetricByTimeRange(start, end)
    setUrlMetrics(metricUrl)
    setMetrics(metricByTimeRange)
  }

  useEffect(() => {
    setSelectedUrls(urls)
    // eslint-disable-next-line
  }, [urlMetrics])

  return (
    <Card>
      <Row gutter={16}>
        <Col md={12}>
          <TimeRangeFilter setTimeRange={setTimeRange} />
        </Col>
        <Col md={12}>
          <UrlFilter
            urls={urls}
            onSelect={setSelectedUrls}
            selectedUrls={selectedUrls}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default Filter
