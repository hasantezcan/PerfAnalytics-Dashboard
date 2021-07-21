import axios from './axios'

import { Metric, MetricByURL } from '~/models/Metric'

async function fetchMetricByTimeRange(start?: Date, end?: Date) {
  const { data } = await axios.get('/api/metrics', {
    params: {
      start,
      end
    }
  })
  return data as Metric[]
}

async function fetchMetricByURL(start?: Date, end?: Date) {
  const { data } = await axios.get('/api/metrics-by-url', {
    params: {
      start,
      end
    }
  })

  return data as MetricByURL[]
}

export { fetchMetricByTimeRange, fetchMetricByURL }
