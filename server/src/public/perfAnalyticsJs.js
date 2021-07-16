// Helper functions
const convertToSec = (milliseconds) => {
  return milliseconds / 1000;
};

const getNavigationPerf = async () => {
  const perfEntries = await performance.getEntriesByType("navigation");
  return perfEntries[0];
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
  // TODO Find performance API v2 equal
  // TODO CHECK HERE AGAIN!
  const windowLoad = new Date().valueOf() - performance.timing.navigationStart;
  return convertToSec(windowLoad);
};

// Network timings for ------------------------------------------------------
const getEntries = () => {
  return performance.getEntriesByType("resource");
};

const getScripts = (entries) =>
  entries.filter((entry) => entry.initiatorType === "script");

const getImages = (entries) =>
  entries.filter((entry) => entry.initiatorType === "img");

const getStyles = (entries) =>
  // TODO "link" contains fonts and stylesheets
  // TODO Handle those value separately
  entries.filter((entry) => entry.initiatorType === "link");

// ---------------------------------------------------------------------------

async function logMetrics() {
  console.table(await collectMetrics());
}

async function init() {
  const test = await collectMetrics();

  // ENTRIES --------------------------------------------------
  // |
  // const entries = getEntries();
  // console.log(`Entries :`, entries);
  // console.log(`Scripts(entries) :`, getScripts(entries));
  // console.log(`Images(entries) :`, getImages(entries));
  // console.log(`Styles(entries) :`, getStyles(entries));

  fetch("http://localhost:6060/api/metrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(test),
  }).then(console.log);
}

async function collectMetrics() {
  const perf = await getNavigationPerf();
  return {
    UserAgent: navigator.userAgent,
    URL: window.location.href,
    TTFB: await getTTFB(perf),
    DomLoad: await getDOMLoad(perf),
    WindowLoad: await getWindowLoad(perf),
    FCP: await getFCP(),
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
