import { PropsWithChildren } from 'react'
import { Layout, Row, Col } from 'antd'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const { Footer, Content } = Layout
const cx = classNames.bind(styles)

interface BaseLayoutProps {}

function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Layout className={cx('base-layout')}>
      <Content>
        <Row justify={'center'} style={{ paddingTop: 25 }}>
          <Col lg={{ span: 18 }}>{children}</Col>
        </Row>
      </Content>
      <Footer>
        <Row justify={'center'}>
          <p>
            Made by <a href="https://github.com/hasantezcan">@hasantezcan</a>
          </p>
        </Row>
      </Footer>
    </Layout>
  )
}

export default BaseLayout
