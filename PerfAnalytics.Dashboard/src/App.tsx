import { Button } from 'antd'
import ChartCard from '@components/ChartCard'
import './styles/App.less'

function App() {
  return (
    <div className="App">
      <ChartCard />
      <h1>PerfAnalytics Dashboard</h1>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default App
