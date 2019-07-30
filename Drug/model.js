const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrugSchema = new Schema(
  {
    name: String,
    description: String,
    image_url: String,
    side_effects: String,
    prescriptions: Number
    
  },
  { timestamps: false }
);

module.exports = mongoose.model('Drug', DrugSchema);