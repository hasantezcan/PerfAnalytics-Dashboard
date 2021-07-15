module.exports = {
  apps: [
    {
      name: "perf-analytics-api",
      script: "yarn start",
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
