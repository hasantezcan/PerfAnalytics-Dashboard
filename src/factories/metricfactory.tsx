import faker from 'faker'
import { Metric } from '~/models/Metric'

const {
  datatype: { number },
  lorem: { word }
} = faker

function metricFactory(times: number = 1): Metric[] {
  return Array.from({ length: times }, (index: number) => {
    return {
      URL: word(),
      UserAgent: word(),
      TTFB: number(),
      FCP: number(),
      DomLoad: number(),
      WindowLoad: number(),
      Entries: Array.from({ length: times }, () => {
        return {
          name: word(),
          initiatorType: word(),
          responseEnd: number(),
          transferSize: number()
        }
      }),
      _id: word(),
      createdAt: new Date(Date.now() + index * 24)
    }
  })
}

export { metricFactory }
