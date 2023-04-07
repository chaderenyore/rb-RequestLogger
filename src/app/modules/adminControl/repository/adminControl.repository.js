const Repository = require("../../../Repository");
const AdminModel  = require("../models/adminControl.model");

class AdminControlRepository extends Repository {
    constructor() {
        super(AdminModel);
    };
}

module.exports = new AdminControlRepository();