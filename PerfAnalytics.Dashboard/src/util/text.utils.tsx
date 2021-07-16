import { Tooltip } from 'antd'

/* Function to generate the text inside Tooltip with ellipsis when text exceeds given length */
function getClippedText(text: string, maxLength: number) {
  return text.length > maxLength ? (
    <Tooltip title={text}>{text.substr(0, maxLength)}...</Tooltip>
  ) : (
    text
  )
}

export { getClippedText }
