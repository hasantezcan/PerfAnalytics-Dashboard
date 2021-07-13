import moment from "moment";

import { Request } from "express";

function calculateTimeRange(req: Request) {
  const start = req?.query.start
    ? moment(parseInt(req?.query.start as any)).toDate()
    : moment().subtract(1, "hours").toDate();

  const end = req?.query.end
    ? moment(parseInt(req?.query.end as any)).toDate()
    : moment().toDate();

  const createdAt = { $gte: start, $lt: end };

  console.log("-----------------------------");
  console.log(`QUERY :`, createdAt);
  console.log("-----------------------------");

  return createdAt;
}

export { calculateTimeRange };
