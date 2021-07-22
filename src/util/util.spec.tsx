import { lorem } from 'faker'
import { render } from '@testing-library/react'
import { stringToColor } from './color.utils'
import { getClippedText } from './text.utils'

describe('Color specs', () => {
  it('Should return #000000 for empty input', () => {
    expect(stringToColor('')).toEqual('#000000')
  })

  it('Should return #35E8E6 for hasantezcan.dev ', () => {
    expect(stringToColor('hasantezcan.dev')).toEqual('#35e8e6')
  })
})

describe('Text specs', () => {
  const { words, word } = lorem

  it('Should return Tooltip', () => {
    const input = words(20)
    const maxLength = 40
    const { container } = render(
      getClippedText(input, maxLength) as JSX.Element
    )

    expect(container.getElementsByTagName('span')[0].innerHTML).toEqual(
      `${input.substr(0, maxLength)}...`
    )
  })

  it('Should return string', () => {
    const input = word()

    expect(getClippedText(input, 40)).toEqual(input)
  })
})
