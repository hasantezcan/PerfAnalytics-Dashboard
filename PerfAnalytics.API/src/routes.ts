import { Express, Request, Response } from "express";
import { createMetricHandler } from "./controller/metric.controller";
import validateRequest from "./middleware/validateRequest";
import { createMetricSchema } from "./schema/metric.schema";

export default function (app: Express) {

  // Health check
  app.get("/api/healthcheck", (req: Request, res: Response) =>res.sendStatus(200));

  // Create metric
  app.post("/api/metrics", validateRequest(createMetricSchema), createMetricHandler)
}
