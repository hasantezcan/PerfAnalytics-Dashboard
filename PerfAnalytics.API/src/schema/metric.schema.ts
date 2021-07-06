import { object, string, number } from "yup";

const createMetricSchema = object({
  body: object({
    URL: string().required("URL is required"),
    UserAgent: string().required("UserAgent is required"),
    FCP: number().required("FCP value is required"),
    TTFB: number().required("TTFB value is required"),
    DomLoad: number().required("DomLoad value is required"),
    WindowLoad: number().required("WindowLoad value is required"),
  }),
});

export { createMetricSchema };
