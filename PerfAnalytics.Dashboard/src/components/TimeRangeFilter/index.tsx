import moment from 'moment'
import { useEffect, useState } from 'react'
import { DatePicker, TimePicker, Button, Form, Typography } from 'antd'

const { Title } = Typography

interface TimeRangeFilterProps {
  setTimeRange: (start: any, end: any) => void
}

function TimeRangeFilter({ setTimeRange }: TimeRangeFilterProps) {
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const handleTimeRange = (event: any) => {
    const start = moment(`${date} ${startTime}`).toISOString()
    const end = moment(`${date} ${endTime}`).toISOString()

    console.log('timestap start :', start)
    console.log('timestap end :', end)

    setTimeRange(start, end)
  }

  useEffect(() => {
    console.log(`date: `, date)
    console.log(`startTime: `, startTime)
    console.log(`endTime: `, endTime)
  }, [date, startTime, endTime])

  return (
    <Form>
      <Title level={3}>Select Time Range</Title>
      <Form.Item>
        <DatePicker
          onChange={(value, dateString) => setDate(dateString)}
          defaultValue={moment()}
        />
      </Form.Item>

      <Form.Item>
        <TimePicker.RangePicker
          onChange={(value, dateString) => {
            setStartTime(dateString[0])
            setEndTime(dateString[1])
          }}
          defaultValue={[moment().subtract(30, 'minutes'), moment()]}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleTimeRange}>
          Get Metrics
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TimeRangeFilter
