import { render, fireEvent, waitFor } from '@testing-library/react'
import EntriesWidget from '.'
import { Metric } from '~/models/Metric'

import { metricFactory } from '../../factories/metricfactory'

describe('EntriesWidget specs', () => {
  let metrics: Metric[]
  let chosenUrls: string[]

  beforeEach(() => {
    metrics = metricFactory(2)
    chosenUrls = []
  })

  it('Should render', () => {
    const { container, getByText } = render(
      <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
    )

    expect(getByText('Metrics and Entries')).toBeInTheDocument()
    expect(container.getElementsByClassName('ant-table-wrapper').length).toBe(1)
  })

  it('Should show empty data component when data not exist', () => {
    const { container } = render(
      <EntriesWidget metrics={[]} selectedUrls={chosenUrls} />
    )

    expect(container.getElementsByClassName('ant-empty').length).toBe(1)
  })

  it('Should expend and show data', () => {
    chosenUrls = ['hasantezcan.dev']

    metrics[0].URL = 'hasantezcan.dev'
    metrics[1].URL = 'github.com/hasantezcan'

    const { container, getAllByLabelText } = render(
      <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
    )

    fireEvent.click(getAllByLabelText('Expand row')[0])

    expect(
      container.getElementsByClassName(
        'ant-table-expanded-row ant-table-expanded-row-level-1'
      ).length
    ).toBe(1)
  })

  describe('Sort specs', () => {
    it('Should sort by URL', () => {
      chosenUrls = ['hasantezcan.dev', 'github.com/hasantezcan']

      metrics[0].URL = 'github.com/hasantezcan'
      metrics[1].URL = 'hasantezcan.dev'

      const { container, getByText } = render(
        <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
      )

      fireEvent.click(getByText('Url'))

      expect(
        container
          .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
          .getAttribute('data-row-key')
      ).toEqual(metrics[1]._id)
    })

    it('Should sort by FCP', () => {
      chosenUrls = ['hasantezcan.dev', 'github.com/hasantezcan']

      metrics[0].FCP = 500
      metrics[1].FCP = 100

      const { container, getByText } = render(
        <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
      )
      fireEvent.click(getByText('FCP'))

      waitFor(() => {
        expect(
          container
            .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
            .getAttribute('data-row-key')
        ).toEqual(metrics[1]._id)
      })
    })

    it('Should sort by TTFB', () => {
      chosenUrls = ['hasantezcan.dev', 'github.com/hasantezcan']

      metrics[0].TTFB = 500
      metrics[1].TTFB = 100

      const { container, getByText } = render(
        <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
      )
      fireEvent.click(getByText('TTFB'))

      waitFor(() => {
        expect(
          container
            .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
            .getAttribute('data-row-key')
        ).toEqual(metrics[1]._id)
      })
    })

    it('Should sort by DomLoad', () => {
      chosenUrls = ['hasantezcan.dev', 'github.com/hasantezcan']

      metrics[0].DomLoad = 500
      metrics[1].DomLoad = 100

      const { container, getByText } = render(
        <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
      )
      fireEvent.click(getByText('DomLoad'))

      waitFor(() => {
        expect(
          container
            .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
            .getAttribute('data-row-key')
        ).toEqual(metrics[1]._id)
      })
    })

    it('Should sort by WindowLoad', () => {
      chosenUrls = ['hasantezcan.dev', 'github.com/hasantezcan']

      metrics[0].WindowLoad = 500
      metrics[1].WindowLoad = 100

      const { container, getByText } = render(
        <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
      )
      fireEvent.click(getByText('WindowLoad'))

      waitFor(() => {
        expect(
          container
            .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
            .getAttribute('data-row-key')
        ).toEqual(metrics[1]._id)
      })
    })

    it('Should sort by Time', () => {
      chosenUrls = ['hasantezcan.dev', 'github.com/hasantezcan']

      const { container, getByText } = render(
        <EntriesWidget metrics={metrics} selectedUrls={chosenUrls} />
      )
      fireEvent.click(getByText('Time'))
      fireEvent.click(getByText('Time'))

      waitFor(() => {
        expect(
          container
            .getElementsByClassName('ant-table-row ant-table-row-level-0')[0]
            .getAttribute('data-row-key')
        ).toEqual(metrics[1]._id)
      })
    })
  })
})
