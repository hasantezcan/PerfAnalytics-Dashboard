import { render } from '@testing-library/react'
import UrlFilter from '.'

describe('UrlFilter specs', () => {
  it('Should render when urls is exist', () => {
    let chosenUrls: string[] = ['hasantezcan.dev']

    function setChosenUrls(urls: string[]) {
      chosenUrls = urls
    }

    const urls: string[] = [
      'hasantezcan.dev',
      'github.com/hasantezcan',
      'linkedin/hasantezcan'
    ]

    const { container, getByText } = render(
      <UrlFilter
        urls={urls}
        onSelect={setChosenUrls}
        selectedUrls={chosenUrls}
      />
    )

    expect(container.getElementsByClassName('ant-typography').length).toBe(1)
    expect(getByText('Check all'))
    expect(container.getElementsByClassName('ant-checkbox-group').length).toBe(
      1
    )
  })

  it('Should render when urls is not exist', () => {
    let chosenUrls: string[] = []

    function setChosenUrls(urls: string[]) {
      chosenUrls = urls
    }

    const urls: string[] = []

    const { container, getByText } = render(
      <UrlFilter
        urls={urls}
        onSelect={setChosenUrls}
        selectedUrls={chosenUrls}
      />
    )

    expect(container.getElementsByClassName('ant-typography').length).toBe(1)
    expect(getByText('There is not metric found in this time range'))
    expect(container.getElementsByClassName('ant-empty-footer').length).toBe(1)
  })
})
