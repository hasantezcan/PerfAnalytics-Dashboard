import { Row, Col, Card } from 'antd'

import TimeRangeFilter from '@components/TimeRangeFilter/index'
import UrlFilter from '~/components/UrlFilter'

function Filter() {
  const urls = () => {}

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <UrlFilter />
        </Col>
        <Col span={16}>
          <TimeRangeFilter />
        </Col>
      </Row>
    </Card>
  )
}

export default Filter
