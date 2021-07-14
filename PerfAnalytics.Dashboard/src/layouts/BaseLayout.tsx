import { PropsWithChildren } from 'react'
import { Layout, Row, Col, Typography } from 'antd'

const { Header, Footer, Content } = Layout
const { Text } = Typography

interface BaseLayoutProps {}

function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Layout>
      <Header>
        <Text type="danger">PerfAnalytics.Dashboard</Text>
      </Header>
      <Content>
        <Row>
          <Col span={12} offset={6}>
            {children}
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default BaseLayout
