import axios from './axios'
import sinon, { SinonStub } from 'sinon'
import { waitFor } from '@testing-library/react'

import { metricFactory } from '../factories/metricfactory'
import { urlMetricFactory } from '../factories/urlMetricFactory'
import { fetchMetricByTimeRange, fetchMetricByURL } from '.'

const sandbox = sinon.createSandbox()

describe('Service specs', () => {
  let getStub: SinonStub

  beforeEach(() => {
    getStub = sandbox.stub(axios, 'get')
  })

  afterEach(() => {
    sandbox.verifyAndRestore()
  })

  it('Should fetch metrics', () => {
    const data = metricFactory()
    const start = new Date()
    const end = new Date()

    getStub
      .withArgs('/api/metrics', {
        params: {
          start,
          end
        }
      })
      .returns({ data })

    waitFor(() => {
      expect(fetchMetricByTimeRange(start, end)).toBe(data)
    })
  })

  it('Should fetch URLmetrics', () => {
    const data = urlMetricFactory()
    const start = new Date()
    const end = new Date()

    getStub
      .withArgs('/api/metrics-by-url', {
        params: {
          start,
          end
        }
      })
      .returns({ data })

    waitFor(() => {
      expect(fetchMetricByURL(start, end)).toBe(data)
    })
  })
})
