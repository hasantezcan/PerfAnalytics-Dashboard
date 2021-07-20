import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'
import { ChartMetric } from '~/models/Metric'
import { stringToColor } from '../../util/color.utils'
import { useMetricContext } from '../../context/MetricProvider'
import moment from 'moment'
interface LineChartWidgetProps {
  data?: ChartMetric[]
}

function LineChartWidget({ data }: LineChartWidgetProps) {
  const { selectedUrls } = useMetricContext()

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
        {data
          ?.filter((item) => selectedUrls.includes(item.url))
          .map((url) => (
            <Line
              key={url.url}
              type="monotone"
              stroke={stringToColor(url.url)}
              dot={false}
              dataKey="value"
              name={url.url}
              data={url.data}
            />
          ))}
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis
          domain={['auto', 'auto']}
          dataKey="time"
          name="Time"
          type="number"
          tickFormatter={(unixTime) => moment(unixTime).format('HH:mm:ss')}
        />
        <YAxis
          dataKey="value"
          type="number"
          tickFormatter={(value) => `${value} ms`}
        />
        <Tooltip labelFormatter={(name: any) => moment(name).format('HH:mm')} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartWidget
