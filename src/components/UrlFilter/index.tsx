import { Checkbox, Typography, Form } from 'antd'
import { getClippedText } from '~/util/text.utils'

const { Title } = Typography
const CheckboxGroup = Checkbox.Group

interface UrlFilterProps {
  urls: string[]
  onSelect: (urls: string[]) => void
  selectedUrls: string[]
}

function UrlFilter({ urls, onSelect, selectedUrls }: UrlFilterProps) {
  const onChange = (list: any) => {
    onSelect(list)
  }

  const onCheckAllChange = (e: any) => {
    onSelect(e.target.checked ? urls : [])
  }

  const urlOptions = urls.map((url) => ({
    label: getClippedText(url, 40),
    value: url
  }))

  return (
    <Form>
      <Title level={3}>Select URL</Title>

      <Form.Item labelCol={{ span: 6, offset: 6 }}>
        <Checkbox
          indeterminate={
            selectedUrls.length > 0 && selectedUrls.length !== urls.length
          }
          onChange={onCheckAllChange}
          checked={selectedUrls.length > 0}
        >
          Check all
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <CheckboxGroup
          options={urlOptions}
          value={selectedUrls}
          onChange={onChange}
        />
      </Form.Item>
    </Form>
  )
}

export default UrlFilter
