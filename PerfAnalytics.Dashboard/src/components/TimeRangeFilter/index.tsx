import moment from 'moment'
import { DatePicker, TimePicker, Button, Col } from 'antd'

function TimeRangeFilter() {
  return (
    <Col>
      <DatePicker defaultValue={moment()} />

      <TimePicker.RangePicker
        defaultValue={[moment().subtract(30, 'minutes'), moment()]}
      />

      <Button type="primary">Get Metrics</Button>
    </Col>
  )
}

export default TimeRangeFilter
