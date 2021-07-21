import { render, waitFor } from '@testing-library/react'
import LineChartWidget from '.'
import { ChartMetric } from '~/models/Metric'

import { chartMetricFactory } from '../../factories/chartMetricFactory'
import moment from 'moment'

describe('LineChartWidget specs', () => {
  let data: ChartMetric[]

  beforeEach(() => {
    data = chartMetricFactory(2)
  })

  it('Should render', () => {
    const { container } = render(
      <LineChartWidget selectedUrls={[]} title="FCP" />
    )

    expect(container.getElementsByClassName('ant-card').length).toBe(1)
    expect(container.getElementsByClassName('ant-card-head').length).toBe(1)
    expect(container.getElementsByClassName('ant-card-body').length).toBe(1)
  })

  it('Should show empty dummy when data is not exist', () => {
    const { container } = render(<LineChartWidget selectedUrls={[]} />)

    expect(container.getElementsByClassName('ant-empty').length).toBe(1)
  })

  it('Should show line chart when data is exist', () => {
    const { container } = render(<LineChartWidget selectedUrls={['url']} />)

    expect(
      container.getElementsByClassName('recharts-responsive-container').length
    ).toBe(1)
  })

  it('Should show two line chart if selected url count is two ', () => {
    data[0].url = 'url0'
    data[1].url = 'url1'

    const { container } = render(
      <LineChartWidget selectedUrls={['url0, url1']} data={data} />
    )

    waitFor(() => {
      expect(container.getElementsByClassName('recharts-line').length).toBe(2)
    })
  })

  it('Should format date', () => {
    const date = new Date().getTime()
    data[0].data[0].time = date

    const { getByText } = render(
      <LineChartWidget selectedUrls={['url0, url1']} data={data} />
    )

    waitFor(() => {
      expect(getByText(moment(date).format('HH:mm:ss'))).toBe(true)
    })
  })
})
