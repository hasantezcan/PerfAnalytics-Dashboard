import { render } from '@testing-library/react'
import LineChartWidget from '.'
import { ChartMetric } from '~/models/Metric'

import { chartMetricFactory } from '../../factories/chartMetricFactory'

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

  // it('Should show two line chart if selected url count is two ', () => {
  //   data[0].url = 'url0'
  //   data[1].url = 'url1'
  //   console.log(`data`, data[0].data)

  //   const { container, debug } = render(
  //     <LineChartWidget selectedUrls={['url0, url1']} data={data} />
  //   )

  //   console.log(`debug`, debug())

  //   expect(container.getElementsByClassName('recharts-xAxis').length).toBe(1)
  // })
})
