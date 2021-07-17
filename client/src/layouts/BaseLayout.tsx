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
        <Row justify={'center'} style={{ paddingTop: 25 }}>
          <Col lg={{ span: 18 }}>{children}</Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default BaseLayout
