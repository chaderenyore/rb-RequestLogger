const Repository = require("../../../Repository");
const RequestModel  = require("../models/requestLogs.model");

class RequestLoggerRepository extends Repository {
    constructor() {
        super(RequestModel);
    };
}

module.exports = new RequestLoggerRepository();