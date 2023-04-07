const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    admin_id: String,
    request_type: String,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('RequestLogger', schema);
