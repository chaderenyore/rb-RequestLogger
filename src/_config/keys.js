const dotenv = require("dotenv");
dotenv.config();

const KEYS = {
  mongoURI: process.env.MONGODBURI,
  appVersion: process.env.APP_VERSION,
  ADMIN_SERVICE_URI: process.env.ADMIN_SERVICE_URI,
  AMQP_URI: process.env.AMQP_URI,
  REQUEST_LOGGER_QUEUE:process.env.REQUEST_LOGGER_QUEUE,
  IN_APP_NOTIFICATION_QUEUE: process.env.IN_APP_NOTIFICATION_QUEUE

};

module.exports = KEYS;
