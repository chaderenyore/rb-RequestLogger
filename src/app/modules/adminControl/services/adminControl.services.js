const AdminControlRepository = require("../repository/adminControl.repository");
// const { message } = require("../../../../_constants/service.message");

class UserSubscriptionService {
  constructor() {
    this.AdminControlRepository = AdminControlRepository;
  }
  
  async createRecord(data) {
    return this.AdminControlRepository.create(data)
  }

  async findARecord(query) {
    this.AdminControlRepository.findOne(query);
  }

  async updateARecord(condition, update) {
    this.AdminControlRepository.update(condition, update)
  }

  async GetAllRecords(limit, page, data, selectedFields) {
   this.AdminControlRepository.all(limit, page, data, selectedFields)

  }

  async findRecordById(id) {
    this.AdminControlRepository.findById(id)
  }

  async deletAll() {
    this.AdminControlRepository.delete({})
  }

  async deletOne (condition) {
    this.AdminControlRepository.delete(condition)
  }
}

module.exports = AdminControlService;
