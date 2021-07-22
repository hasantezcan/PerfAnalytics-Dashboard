import faker from 'faker'
import { MetricByURL } from '~/models/Metric'

const {
  datatype: { number },
  lorem: { word },
  date: { past }
} = faker

function urlMetricFactory(times: number = 1): MetricByURL[] {
  return Array.from({ length: times }, (index: number) => {
    return {
      URL: word(),
      TTFB: Array.from({ length: times }, () => {
        return {
          value: number(),
          time: new Date(past())
        }
      }),
      FCP: Array.from({ length: times }, () => {
        return {
          value: number(),
          time: new Date(past())
        }
      }),
      DomLoad: Array.from({ length: times }, () => {
        return {
          value: number(),
          time: new Date(past())
        }
      }),
      WindowLoad: Array.from({ length: times }, () => {
        return {
          value: number(),
          time: new Date(past())
        }
      })
    }
  })
}

export { urlMetricFactory }
