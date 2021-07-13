import { PropsWithChildren } from 'react'
import { Layout, Row, Col } from 'antd'

const { Header, Footer, Content } = Layout

interface BaseLayoutProps {}

function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Layout>
      <Header>Header</Header>
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
