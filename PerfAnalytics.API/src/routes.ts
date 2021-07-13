import { Express, Request, Response } from "express";

import validateRequest from "./middleware/validateRequest";
import { createMetricSchema } from "./schema/metric.schema";
import {
  createMetricHandler,
  getMetricsHandler,
  getMetricsByURLHandler,
} from "./controller/metric.controller";

export default function (app: Express) {
  // Health check
  app.get("/api/healthcheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  // Create a metric
  app.post(
    "/api/metrics",
    validateRequest(createMetricSchema),
    createMetricHandler
  );

  // Get metrics
  app.get("/api/metrics", getMetricsHandler);

  // Get metrics by url
  app.get("/api/metrics-by-url", getMetricsByURLHandler);
}
