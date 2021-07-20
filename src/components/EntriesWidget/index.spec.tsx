import { render, screen, fireEvent } from '@testing-library/react'
import EntriesWidget from '.'
import { Metric } from '~/models/Metric'

import { metricFactory } from '../../factories/metricfactory'

describe('EntriesWidget specs', () => {
  let metrics: Metric[]

  beforeEach(() => {
    metrics = metricFactory(2)
  })

  it('Should render', () => {
    const { container } = render(<EntriesWidget metrics={metrics} />)

    expect(container.getElementsByTagName('Table')).toHaveLength
    expect(container.getElementsByTagName('Title')).toHaveLength
  })

  it('Should expend and show data', () => {
    const { container, getAllByLabelText } = render(
      <EntriesWidget metrics={metrics} />
    )

    fireEvent.click(getAllByLabelText('Expand row')[0])

    expect(
      container.getElementsByClassName(
        'ant-table-expanded-row ant-table-expanded-row-level-1'
      ).length
    ).toBe(1)
  })

  it('Should sort by URL', () => {
    const { container, debug, getByText } = render(
      <EntriesWidget metrics={metrics} />
    )

    const id0 = '0'
    const id1 = '1'

    metrics[0]._id = id0
    metrics[1]._id = id1

    fireEvent.click(getByText('Url'))

    expect(
      container
        .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
        .getAttribute('data-row-key')
    ).toEqual(id1)
  })
})
