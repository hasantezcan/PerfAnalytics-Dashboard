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

interface LineChartCardProps {
  title?: string
  data?: []
}

function LineChartCard({ title = 'TTFB', data }: LineChartCardProps) {
  const Chartdata = data ?? [
    { name: '22:05:22', uv: 0.04, pv: 2400, amt: 2400 },
    { name: '22:06:22', uv: 0.06, pv: 2400, amt: 2400 },
    { name: '22:07:22', uv: 0.2, pv: 2400, amt: 2400 },
    { name: '22:08:22', uv: 0.003, pv: 2400, amt: 2400 },
    { name: '22:08:22', uv: 0.054, pv: 2400, amt: 2400 }
  ]

  return (
    <Card title={title}>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={Chartdata}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default LineChartCard
