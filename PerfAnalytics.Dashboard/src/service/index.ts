import axios from './axios'

import { Metric } from '~/models/Metric'

async function fetchMetricByTimeRange(start?: Date, end?: Date) {
  const { data } = await axios.get('/api/metrics', {
    params: {
      start,
      end
    }
  })

  return data as Metric[]
}

export { fetchMetricByTimeRange }
