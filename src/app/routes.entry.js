const { Router } = require("express");
const RequestLogs = require("./modules/adminControl/routes/adminControl.routes");


module.exports = () => {
  
  const router = Router();

  router.use("/", RequestLogs);
  return router;
};
