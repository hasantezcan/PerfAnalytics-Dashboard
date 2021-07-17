// Helper functions
const convertToSec = (milliseconds) => {
  return milliseconds / 1000;
};

// Measure performance metrics
const getFCP = () => {
  if (window) {
    const fcp = window.performance
      .getEntriesByType("paint")
      .find((elem) => elem.name === "first-contentful-paint");
    if (fcp.startTime) {
      return convertToSec(fcp.startTime);
    }
  }
};

const getTTFB = (perf) => {
  const TTFB = perf.responseStart - perf.requestStart;
  return convertToSec(TTFB);
};

const getDOMLoad = (perf) => {
  const DOMLoad = perf.domComplete;
  return convertToSec(DOMLoad);
};

const getWindowLoad = (perf) => {
  const windowLoad = perf.loadEventStart - perf.loadEventEnd;
  return convertToSec(windowLoad);
};

const getEntries = () => {
  const entries = performance.getEntriesByType("resource");

  return entries.map((entry) => {
    return {
      name: entry.name,
      initiatorType: entry.initiatorType,
      responseEnd: convertToSec(entry.responseEnd),
      transferSize: entry.transferSize,
    };
  });
};

// ----------------------------------------

async function logMetrics() {
  const metrics = await collectMetrics();
  const metricsFiles = metrics.Entries;
  await delete metrics.Entries;

  console.table(metrics);
  console.table(metricsFiles);
}

async function init() {
  const metrics = await collectMetrics();

  fetch("http://localhost:6060/api/metrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metrics),
  }).then(console.log);
}

async function collectMetrics() {
  const perf = performance.getEntriesByType("navigation")[0];

  return {
    UserAgent: navigator.userAgent,
    URL: window.location.href,
    TTFB: await getTTFB(perf),
    DomLoad: await getDOMLoad(perf),
    WindowLoad: await getWindowLoad(perf),
    FCP: await getFCP(),
    Entries: await getEntries(),
  };
}

fetch("http://localhost:6060/api/healthcheck", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then(console.log);

window.addEventListener
  ? window.addEventListener(
      "load",
      () => {
        init(), logMetrics();
      },
      false
    )
  : window.attachEvent && window.attachEvent("onload", init);
