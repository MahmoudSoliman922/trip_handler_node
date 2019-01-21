module.exports = app => {
  app.use("/api/trips", require("../components/trips/v1").Router);
};
