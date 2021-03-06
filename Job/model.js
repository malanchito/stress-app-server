const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
    name: String,
    description: String,
    image_url: String,
    video_url: String,
    start_time: Number,
    salary: Number,
    stress: Number
    
  },
  { timestamps: false }
);

module.exports = mongoose.model('Job', JobSchema);