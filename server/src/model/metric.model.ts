import mongoose, { Schema } from "mongoose";

export interface Entry {
  name: string;
  initiatorType: string;
  responseEnd: number;
  transferSize: number;
}

export interface MetricDocument extends mongoose.Document {
  _id: number
  URL: string;
  UserAgent: string;
  FCP: number;
  TTFB: number;
  DomLoad: number;
  WindowLoad: number;
  Entries: Entry[];
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
    Entries: { type: Schema.Types.Mixed, required: true },
  },
  {
    timestamps: true,
  }
);

const Metric = mongoose.model<MetricDocument>("Metric", MetricSchema);

export default Metric;
