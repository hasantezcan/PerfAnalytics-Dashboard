import { render } from '@testing-library/react'
import TitleWidget from '.'

describe('LineChartWidget specs', () => {
  it('Should render', () => {
    const { container } = render(<TitleWidget />)

    expect(container.getElementsByClassName('ant-typography').length).toBe(1)
  })
})
