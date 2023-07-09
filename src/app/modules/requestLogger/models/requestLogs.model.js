const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    user_id:{type:String},
    username:{type: String},
    platform: {type: String, enum:["web", "ios", "android", "admin-web"]},
    microservice:{type: String, enum:["Auth", "Users", "Posts", "Research", "Notifications", "Sockets-Consumers", "Payments", "Subscription"]},
    request_type: {type: String, enum:["POST", "GET", "DELETE", "PUT", "UPDATE", "PATCH"]},
    os: {type: String},
    other_device_info:{type:Object},
    endpoint: {type: String},
    request_payload: {type: Object},
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('RequestLogger', schema);
