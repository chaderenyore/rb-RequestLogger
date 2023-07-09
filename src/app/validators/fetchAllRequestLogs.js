const Joi = require("joi");

exports.getAllUsersRequestLogsSchema = Joi.object({
    page: Joi.number().positive().optional(),
    limit: Joi.number().positive().optional(),
  });