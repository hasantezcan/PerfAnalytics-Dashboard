import { render, fireEvent } from '@testing-library/react'
import LineChartWidget from '.'
import { ChartMetric } from '~/models/Metric'

import { chartMetricFactory } from '../../factories/chartMetricFactory'

describe('LineChartWidget specs', () => {
  let data: ChartMetric[]

  beforeEach(() => {
    data = chartMetricFactory(2)
  })

  it('Should render', () => {
    const { container } = render(<LineChartWidget />)

    expect(container.getElementsByTagName('ResponsiveContainer')).toHaveLength
  })
})
