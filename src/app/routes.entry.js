const { Router } = require('express');
const adminControlRoute = require('./modules/adminControl/routes/adminControl.routes');

module.exports = () => {
  const router = Router();

  // router.use("/admin", adminControlRoute);

  return router;
};
