import { Card } from 'antd'
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
import { stringToColor } from '~/util/stringToColor'
import { useMetricContext } from '~/context/MetricProvider'
import moment from 'moment'
interface LineChartCardProps {
  title?: string
  data?: any
}

function LineChartCard({ title = 'TTFB', data }: LineChartCardProps) {
  const { selectedUrls } = useMetricContext()

  console.log(`data:::`, data)

  return (
    <Card title={title}>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          {data.map((url: ChartMetric, index: number) => {
            if (selectedUrls.includes(url.url)) {
              return (
                <Line
                  key={url.url}
                  type="monotone"
                  stroke={stringToColor(url.url)}
                  dot={false}
                  dataKey="value"
                  name={url.url}
                  data={url.data}
                />
              )
            }
          })}
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis
            domain={['auto', 'auto']}
            dataKey="time"
            name="Time"
            type="number"
            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
          />
          <YAxis dataKey="value" type="number" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default LineChartCard
