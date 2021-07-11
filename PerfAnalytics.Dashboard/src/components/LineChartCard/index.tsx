import { Card, Col, Row } from 'antd'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

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
    <div className="site-card-wrapper">
      <Col span={24}>
        <Card title={title} bordered={false}>
          <LineChart
            width={400}
            height={300}
            data={Chartdata}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Card>
      </Col>
    </div>
  )
}

export default LineChartCard
