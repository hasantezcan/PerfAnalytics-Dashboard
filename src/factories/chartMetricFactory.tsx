import faker from 'faker'
import { ChartMetric } from '~/models/Metric'

const {
  datatype: { number },
  lorem: { word },
  date: { past }
} = faker

function chartMetricFactory(times: number = 1): ChartMetric[] {
  return Array.from({ length: times }, (index: number) => {
    return {
      url: word(),
      data: Array.from({ length: times }, () => {
        return {
          value: number(),
          time: new Date(past()).getTime()
        }
      })
    }
  })
}

export { chartMetricFactory }
