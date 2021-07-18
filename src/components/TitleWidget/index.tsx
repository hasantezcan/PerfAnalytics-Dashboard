import { Typography } from 'antd'
import classNames from 'classnames/bind'

import styles from './styles.module.scss'

const { Title } = Typography

const cx = classNames.bind(styles)

function TitleWidget() {
  return <Title className={cx('title-widget')}>PerfAnalytics Dashboard</Title>
}

export default TitleWidget
