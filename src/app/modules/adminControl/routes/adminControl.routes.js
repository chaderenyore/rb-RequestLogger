const { Router } = require("express");
const { authorizeAdmin } = require("../../../middlewares/authorizeAdmin");
const validateRequest = require("../../../middlewares/validate");

// validators
const RequestLogsSchema = require("../../../validators/fetchAllRequestLogs");


// controllers
const RequestLogsController = require("../controllers/fetchAllRequestLogs");


const router = Router();

router.get(
  "/request-logs",
  authorizeAdmin([
    "super",
    "admin",
    "moderator",
    "account-view",
    "account-edit",
  ]),
  validateRequest(RequestLogsSchema.getAllUsersRequestLogsSchema, "query"),
  RequestLogsController.fetchAllRequetsLogs
);

module.exports = router;
