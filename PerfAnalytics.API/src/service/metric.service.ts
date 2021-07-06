import { DocumentDefinition } from "mongoose";
import Metric, { MetricDocument } from "../model/metric.model";

async function createMetric(input: DocumentDefinition<MetricDocument>) {
  try {
    return await Metric.create(input)
  } catch (error) {
    throw new Error(error)
  }
}

export { createMetric };
