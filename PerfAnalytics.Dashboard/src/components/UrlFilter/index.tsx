import { useState } from 'react'
import { Checkbox } from 'antd'
const CheckboxGroup = Checkbox.Group

const plainOptions = [
  'https://hasantezcan.dev',
  'https://hasantezcan.dev/about',
  'https://hasantezcan.dev/blog'
]
const defaultCheckedList = ['Apple', 'Orange']

// interface UrlFilterProps {
//   options?: string[]
// }

function UrlFilter() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkAll, setCheckAll] = useState(false)

  const onChange = (list: any) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : ['Apple'])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>

      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  )
}

export default UrlFilter
