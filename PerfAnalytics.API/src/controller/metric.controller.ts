import { Request, Response } from "express";
import moment from "moment";
import log from "../utils/logger";

import { createMetric, findMetrics } from "../service/metric.service";

async function createMetricHandler(req: Request, res: Response) {
  console.log("-----------------------------");
  console.log("REQUEST BODY   :", req.body);
  console.log("REQUEST HEADER :", req.header);
  console.log("-----------------------------");

  try {
    const metric = await createMetric(req.body);
    return res.send(metric.toJSON());
  } catch (error) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

async function getMetricsHandler(req: Request, res: Response) {
  const start = req?.query.start
    ? moment(parseInt(req?.query.end as any)).toDate()
    : moment().subtract(1, "hours").toDate();

  const end = req?.query.end
    ? moment(parseInt(req?.query.end as any)).toDate()
    : moment().toDate();

  const createdAt = { $gte: start, $lt: end } as any;

  console.log("-----------------------------");
  console.log(`QUERY :`, createdAt);
  console.log("-----------------------------");

  try {
    log.info("Metrics are searching ...");
    const metrics = await findMetrics({ createdAt });
    console.log(`METRICS RESULT :`, metrics);

    if (!metrics) {
      return res.sendStatus(404);
    }
    return res.send(metrics);
  } catch (error) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

export { createMetricHandler, getMetricsHandler };
