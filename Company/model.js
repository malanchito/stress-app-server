const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {
    name: String,
    image_url: String,
    stress_level: Number,
    intention_to_leave: Number
    
  },
  { timestamps: false }
);

module.exports = mongoose.model('Company', CompanySchema);