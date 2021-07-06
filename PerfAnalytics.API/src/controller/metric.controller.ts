import { Request, Response } from "express";
import { createMetric } from "../service/metric.service";
import log from '../utils/logger';

async function createMetricHandler(req: Request, res: Response) {
  try {
    const metric = await createMetric(req.body);
    log.info(`Add to db the metrics comes from "${metric.URL}"`, metric.toJSON());
    return res.send(metric.toJSON());
  } catch (error) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

export { createMetricHandler };
