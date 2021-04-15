const mongoose = require('mongoose');
let Schema = mongoose.Schema
const CompanySchema = new Schema({
  company_name: {
    type: String,
    required: true
  },
  company_details: {
   type: String
  }
});


module.exports = Company = mongoose.model('company', CompanySchema);