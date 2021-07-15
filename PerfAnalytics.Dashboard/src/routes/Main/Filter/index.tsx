import { Row, Col, Card } from 'antd'

import TimeRangeFilter from '@components/TimeRangeFilter/index'
import UrlFilter from '~/components/UrlFilter'
import { fetchMetricByTimeRange, fetchMetricByURL } from '~/service'
import { useMetricContext } from '~/context/MetricProvider'
import { useEffect } from 'react'

function Filter() {
  const { setUrlMetrics, setMetrics, urlMetrics, setSelectedUrls } =
    useMetricContext()

  const setTimeRange = async (start: any, end: any) => {
    setUrlMetrics(await fetchMetricByURL(start, end))
    setMetrics(await fetchMetricByTimeRange(start, end))
  }

  const urls = () => {
    return urlMetrics.map((url) => {
      return url.URL
    })
  }

  useEffect(() => {
    const initialUrls = async () => {
      const initialUrls = await urls()
      console.log(`initialUrls`, initialUrls)
      setSelectedUrls(initialUrls)
    }

    initialUrls().then()
  }, [urlMetrics])

  return (
    <Card>
      <Row gutter={16}>
        <Col md={12}>
          <TimeRangeFilter setTimeRange={setTimeRange} />
        </Col>
        <Col md={12}>
          <UrlFilter urls={urls()} setSelectedUrls={setSelectedUrls} />
        </Col>
      </Row>
    </Card>
  )
}

export default Filter
