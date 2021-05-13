const mongoose = require('mongoose');
let Schema = mongoose.Schema
const PostedOnSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: 'job',
    required: true
 }
});

module.exports = Company = mongoose.model('postedOn', PostedOnSchema);