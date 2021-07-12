import mongoose from "mongoose";

export interface MetricDocument extends mongoose.Document {
  URL: string;
  UserAgent: string;
  FCP: number;
  TTFB: number;
  DomLoad: number;
  WindowLoad: number;
  createdAt: Date;
  updatedAt: Date;
}

const MetricSchema = new mongoose.Schema(
  {
    URL: { type: String, required: true },
    UserAgent: { type: String, required: true },
    FCP: { type: Number, required: true },
    TTFB: { type: Number, required: true },
    DomLoad: { type: Number, required: true },
    WindowLoad: { type: Number, required: true },
    // TODO Add Document, Image, Font, JS, CSS
  },
  {
    timestamps: true,
  }
);

const Metric = mongoose.model<MetricDocument>("Metric", MetricSchema);

export default Metric;
