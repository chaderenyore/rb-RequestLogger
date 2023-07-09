const { HTTP } = require("../../../../_constants/http");
const { RESPONSE } = require("../../../../_constants/response");
const createError = require("../../../../_helpers/createError");
const { createResponse } = require("../../../../_helpers/createResponse");
const RequestLogsService = require("../../requestLogger/services/requestLogs.services");
const logger = require("../../../../../logger.conf");

exports.fetchAllRequetsLogs = async (req, res, next) => {
  try {
    const requestLogs = await new RequestLogsService().GetAllRecords(
      req.query.limit,
      req.query.page
    );
    if(requestLogs.data.length === 0){
      return next(
        createError(HTTP.OK, [
          {
            status: RESPONSE.SUCCESS,
            message:`No Logs Yet`,
            statusCode: HTTP.OK,
            data: {},
            code: HTTP.OK,
          },
        ])
      );
    } else {
      return createResponse("ALl Request Logs Fetched", requestLogs)(
        res,
        HTTP.OK
      );
    }

  } catch (err) {
    logger.error(err);

    return next(createError.InternalServerError(err));
  }
};
