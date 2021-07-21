import { render, fireEvent, waitFor } from '@testing-library/react'
import sinon, { SinonSpy } from 'sinon'
import TimeRangeFilter from '.'

const sandbox = sinon.createSandbox()

describe('TimeRangeFilter specs', () => {
  const handleTimeRange = (start: any, end: any) => {
    console.log(`start`, start)
    console.log(`end`, end)
  }

  let handleTimeRangeSpy: SinonSpy

  beforeEach(() => {
    handleTimeRangeSpy = sandbox.spy(handleTimeRange)
  })

  afterEach(() => {
    sandbox.verifyAndRestore()
  })

  it('Should render time range control form ', () => {
    const { container } = render(
      <TimeRangeFilter setTimeRange={handleTimeRange} />
    )

    expect(container.getElementsByClassName('ant-form').length).toBe(1)
  })

  it('Should render date picker when click on it', () => {
    const { container } = render(
      <TimeRangeFilter setTimeRange={handleTimeRange} />
    )

    const datePicker = container.getElementsByClassName('ant-picker-input')[0]

    fireEvent.click(datePicker)
    waitFor(() => {
      expect(
        container.getElementsByClassName('ant-picker-dropdown').length
      ).toBe(1)
    })
  })

  it('Should render time picker when click on it', () => {
    const { container } = render(
      <TimeRangeFilter setTimeRange={handleTimeRange} />
    )

    const timePicker = container.getElementsByClassName('ant-picker-range')[0]
    fireEvent.click(timePicker)

    waitFor(() => {
      expect(
        container.getElementsByClassName('ant-picker-panel-container').length
      ).toBe(1)
    })
  })

  it('Should call handleTimeRange function', () => {
    const { container } = render(
      <TimeRangeFilter setTimeRange={handleTimeRange} />
    )

    const button = container.getElementsByClassName('ant-btn')[0]
    fireEvent.click(button)

    waitFor(() => {
      expect(handleTimeRangeSpy.calledOnce).toBe(true)
    })
  })
})
