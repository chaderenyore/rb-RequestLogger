const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    admin_id: String,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('AdminControl', schema);
