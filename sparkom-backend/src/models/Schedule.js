const mongoose = require('mongoose');
let Schema = mongoose.Schema
const ScheduleSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  User_id: {
    type: String,
  },
  job_id:{
  type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
}
});


module.exports = Company = mongoose.model('schedule', ScheduleSchema);