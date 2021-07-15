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
interface LineChartCardProps {
  title?: string
  data?: any
}

function LineChartCard({ title = 'TTFB', data }: LineChartCardProps) {
  return (
    <Card title={title}>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          {data.map((url: ChartMetric, index: number) => {
            return (
              <Line
                key={index}
                type="monotone"
                stroke={stringToColor(url.url)}
                dot={false}
                dataKey="value"
                name={url.url}
                data={url.data}
              />
            )
          })}
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis name="Time" dataKey="time" />
          <YAxis type="number" dataKey="value" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default LineChartCard
