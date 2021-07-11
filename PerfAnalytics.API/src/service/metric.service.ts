import { DocumentDefinition, FilterQuery } from "mongoose";
import log from "../utils/logger";

import Metric, { MetricDocument } from "../model/metric.model";

function createMetric(input: DocumentDefinition<MetricDocument>) {
  try {
    log.info(`Added metrics to DB comes from "${input.URL}"`);
    return Metric.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

function findMetrics(query: FilterQuery<MetricDocument>) {
  try {
    return Metric.find(query);
  } catch (error) {
    throw new Error(error);
  }
}

export { createMetric, findMetrics };
