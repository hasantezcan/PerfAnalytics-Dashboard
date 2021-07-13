import { DocumentDefinition, FilterQuery } from "mongoose";
import log from "../utils/logger";

import Metric, { MetricDocument } from "../model/metric.model";

function createMetric(input: DocumentDefinition<MetricDocument>) {
  try {
    log.info(`Added metrics to DB comes from "${input.URL}"`);
    return Metric.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

function findMetrics(query: FilterQuery<MetricDocument>) {
  try {
    return Metric.find(query);
  } catch (error) {
    throw new Error(error);
  }
}

async function getUrlList() {
  const rawURL = await Metric.find().select(["URL"]);
  const urlList = rawURL.map((u) => u.URL);
  return [...new Set(urlList)];
}

function getURLwithMetrics(url: string, query: FilterQuery<MetricDocument>) {
  return Metric.find({
    URL: url,
    ...query,
  });
}

interface UrlRelatedMetric {
  url: string;
  metrics: MetricDocument[];
}

async function getUrlRelatedMetrics(query: FilterQuery<MetricDocument>) {
  const URLs = await getUrlList();
  const newArray = URLs.map(async (url: string) => {
    try {
      return {
        url,
        metrics: await getURLwithMetrics(url, query),
      };
    } catch (error) {
      console.log(error);
    }
  });
  return Promise.all(newArray);
}

const getDataByMetricType = (data: any, type: string) =>
  data.map((d: any) => {
    return {
      time: d["createdAt"],
      value: d[type],
    };
  });

async function findURLMetrics(query: FilterQuery<MetricDocument>) {
  try {
    const UrlRelatedMetrics = await getUrlRelatedMetrics(query);
    return UrlRelatedMetrics.map((url) => {
      return {
        URL: url!.url,
        TTFB: getDataByMetricType(url!.metrics, "TTFB"),
        FCP: getDataByMetricType(url!.metrics, "FCP"),
        DomLoad: getDataByMetricType(url!.metrics, "DomLoad"),
        WindowLoad: getDataByMetricType(url!.metrics, "WindowLoad"),
      };
    });
  } catch (error) {
    throw new Error(error);
  }
}

export { createMetric, findMetrics, findURLMetrics };
