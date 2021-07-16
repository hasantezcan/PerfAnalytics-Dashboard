import { Row, Col, Typography } from 'antd'

import BaseLayout from '~/layouts/BaseLayout'
import PerfCharts from './PerfCharts'
import Filter from './Filter'

function Main() {
  const { Title } = Typography

  return (
    <BaseLayout>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title>PerfAnalytics Dashboard</Title>
        </Col>

        <Col span={24}>
          <Filter />
        </Col>

        <Col span={24}>
          <PerfCharts />
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default Main
