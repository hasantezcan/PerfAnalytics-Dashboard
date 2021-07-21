import { render, fireEvent } from '@testing-library/react'
import TimeRangeFilter from '.'

describe('TimeRangeFilter specs', () => {
  const handleTimeRange = (start: any, end: any) => {
    console.log(`start`, start)
    console.log(`end`, end)
  }

  it('Should render time range control form ', () => {
    const { container } = render(
      <TimeRangeFilter setTimeRange={handleTimeRange} />
    )

    expect(container.getElementsByClassName('ant-form').length).toBe(1)
  })

  // it('Should render date picker when click on it', () => {
  //   const { container } = render(
  //     <TimeRangeFilter setTimeRange={handleTimeRange} />
  //   )

  //   const datePicker = container.getElementsByClassName('ant-picker-input')[0]

  //   fireEvent.click(datePicker)

  //   expect(container.getElementsByClassName('ant-picker-dropdown').length).toBe(
  //     1
  //   )
  // })

  // it('Should render time picker when click on it', () => {
  //   const { container } = render(
  //     <TimeRangeFilter setTimeRange={handleTimeRange} />
  //   )

  //   const timePicker = container.getElementsByClassName('ant-picker-range')[0]
  //   fireEvent.click(timePicker)

  //   expect(
  //     container.getElementsByClassName('ant-picker-panel-container').length
  //   ).toBe(1)
  // })
})
