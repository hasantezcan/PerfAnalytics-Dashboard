import { render } from '@testing-library/react'
import LineChartWidget from '.'

describe('LineChartWidget specs', () => {
  it('Should render', () => {
    const { container } = render(<LineChartWidget />)

    expect(container.getElementsByClassName('ant-typography').length).toBe(1)
  })
})
