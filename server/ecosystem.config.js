module.exports = {
  apps: [
    {
      name: "perf-analytics-api",
      script: "node ./build/src/app.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
