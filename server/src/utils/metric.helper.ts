import moment from "moment";

import { Request } from "express";

function calculateTimeRange(req: Request) {
  const start = req?.query.start
    ? req?.query.start
    : moment().subtract(1, "hours").toISOString();

  const end = req?.query.end 
    ? req?.query.end 
    : moment().toISOString();

  const createdAt = { $gte: start, $lt: end };

  console.log("-----------------------------");
  console.log(`QUERY :`, createdAt);
  console.log("-----------------------------");

  return createdAt;
}

export { calculateTimeRange };
