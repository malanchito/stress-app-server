const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema(
  {
    name: String,
    image_url: String,
    continent: String,
    cigarette_consumption: Number,
    antidepressant_consumption: Number
    
  },
  { timestamps: false }
);

module.exports = mongoose.model('Country', CountrySchema);