const { Router } = require("express");
const adminControlRoute = require('./modules/adminControl/routes/adminControl.routes');
const UserSubscription = require('./modules/UserSubscription/routes/UserSubscription.routes');

module.exports = () => {

    const router = Router();

    router.use("/admin", adminControlRoute);
    router.use("/subscribe", UserSubscription);

    return router;
};
