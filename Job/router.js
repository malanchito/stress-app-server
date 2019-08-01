const express = require('express');
const router = express.Router();
const Job = require('../Job/model')

router.get('/jobs', (req, res, next) => {
    Job
    .find().sort({ stress: -1 })
    .then(jobs => res.send({ jobs: jobs }))
    .catch(next)
  })
  
router.post('/jobs', (req, res) => {
    const { id, update } = req.body;
    Job.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
  
router.post('/newJob', (req, res) => {
    const job = new Job();
  
    const { name,description,image_url,video_url,salary,stress } = req.body;
  
    if (!name) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    job.name = name
    job.description = description
    job.image_url = image_url
    job.video_url = video_url
    job.salary = salary
    job.stress = stress
    job.save((err) => {
      if (err) return res.status(201).json({ success: false, error: err });
      return res.json({ success: true, job: job });
    });
});

  module.exports = router