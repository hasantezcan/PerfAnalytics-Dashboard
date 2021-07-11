import logger from "pino";
import moment from "moment";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `, "time":"${moment().format("YYYY-MM-DD, HH:mm:ss.SSS")}"`,
});

export default log;
