const RequestLogsRepository = require("../repository/requestLogs")

class RequestLogsService {
  constructor() {
    this.RequestLogsRepository = RequestLogsRepository;
  }
  
  async createRecord(data) {
    return this.RequestLogsRepository.create(data)
  }

  async findARecord(query) {
    this.RequestLogsRepository.findOne(query);
  }

  async updateARecord(condition, update) {
    this.RequestLogsRepository.update(condition, update)
  }

  async GetAllRecords(limit, page, data, selectedFields) {
   this.RequestLogsRepository.all(limit, page, data, selectedFields)

  }

  async findRecordById(id) {
    this.RequestLogsRepository.findById(id)
  }

  async deletAll() {
    this.RequestLogsRepository.delete({})
  }

  async deletOne (condition) {
    this.RequestLogsRepository.delete(condition)
  }
}

module.exports = RequestLogsService;
