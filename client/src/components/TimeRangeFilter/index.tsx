import { useState } from 'react'
import { DatePicker, TimePicker, Button, Form, Typography } from 'antd'
import moment from 'moment'

const { Title } = Typography

interface TimeRangeFilterProps {
  setTimeRange: (start: any, end: any) => void
}

function TimeRangeFilter({ setTimeRange }: TimeRangeFilterProps) {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [startTime, setStartTime] = useState(
    moment().subtract(30, 'minutes').format('HH:mm:ss')
  )
  const [endTime, setEndTime] = useState(moment().format('HH:mm:ss'))

  const handleTimeRange = () => {
    const start = moment(`${date} ${startTime}`).toISOString()
    const end = moment(`${date} ${endTime}`).toISOString()

    setTimeRange(start, end)
  }

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
