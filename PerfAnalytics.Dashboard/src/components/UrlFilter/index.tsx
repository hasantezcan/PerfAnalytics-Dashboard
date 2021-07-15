import { useState, useEffect } from 'react'
import { Checkbox, Typography, Form } from 'antd'

const { Title } = Typography
const CheckboxGroup = Checkbox.Group
const defaultCheckedList = ['https://hasantezcan.dev', 'Orange']

interface UrlFilterProps {
  urls: string[]
  setSelectedUrls: (e: string[]) => void
}

function UrlFilter({ urls, setSelectedUrls }: UrlFilterProps) {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkAll, setCheckAll] = useState(false)

  const onChange = (list: any) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < urls.length)
    setCheckAll(list.length === urls.length)
  }

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? urls : ['Apple'])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  useEffect(() => {
    setSelectedUrls(checkedList)
  }, [checkedList])

  return (
    <Form>
      <Title level={3}>Select URL</Title>

      <Form.Item labelCol={{ span: 6, offset: 6 }}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <CheckboxGroup options={urls} value={checkedList} onChange={onChange} />
      </Form.Item>
    </Form>
  )
}

export default UrlFilter
