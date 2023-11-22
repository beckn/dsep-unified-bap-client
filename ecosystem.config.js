module.exports = {
  apps: [
    {
      name: "odr-client-layer",
      script: "./dist/index.js",
      watch: true,
      instances: 1,
      exec_mode: "cluster"
    }
  ]
};
