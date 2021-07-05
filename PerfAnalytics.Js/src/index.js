// Measure FCP in JavaScript from https://web.dev/
const getFCP = () => {
  return new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntriesByName("first-contentful-paint")) {
      console.log("FCP candidate:", entry.startTime, entry);
    }
  }).observe({ type: "paint", buffered: true });
};

// Measure LCP in JavaScript from https://web.dev/
const getLCP = () => {
  return new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log("LCP candidate:", entry.startTime, entry);
    }
  }).observe({ type: "largest-contentful-paint", buffered: true });
};

// Measure TTFP in JavaScript
const getTTFB = (perf) => {
  const ttfb = perf.responseStart - perf.requestStart;
  console.log("TTFB value:", ttfb, "ms");
};

// Measure DOM Load in JavaScript
const getDOMLoad = (perf) => {
  // TODO decided the performance measure approach

  // const domLoad =
  //   perf.domContentLoadedEventEnd - performance.timing.navigationStart;

  // const domLoad = perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart;

  // const domLoad =
  //   performance.timing.domContentLoadedEventEnd -
  //   performance.timing.navigationStart;

  const domLoad = perf.domComplete;
  console.log("DOM Load value:", domLoad, "ms");
};

// Measure Window Load Load in JavaScript
const getWindowLoad = (perf) => {
  // TODO Find performance API v2 equal

  const windowLoad = new Date().valueOf() - performance.timing.navigationStart;
  console.log("Window Load value:", windowLoad, "ms");
};

// Network timings for
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

async function init() {
  const perfEntries = await performance.getEntriesByType("navigation");
  const [perf] = await perfEntries;

  // console.log(`perfEntries`, perf);

  getTTFB(perf);
  getDOMLoad(perf);
  getWindowLoad(perf);
  getFCP();
  getLCP();

  const entries = getEntries();
  console.log(`Entries :`, entries);
  console.log(`Scripts(entries) :`, getScripts(entries));
  console.log(`Images(entries) :`, getImages(entries));
  console.log(`Styles(entries) :`, getStyles(entries));
}

window.addEventListener
  ? window.addEventListener("load", init, false)
  : window.attachEvent && window.attachEvent("onload", init);
