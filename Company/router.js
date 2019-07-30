const express = require('express');
const router = express.Router();
const Company = require('../Company/model')

router.get('/companies', (req, res) => {
    Company.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  
router.post('/companies', (req, res) => {
    const { id, update } = req.body;
    Company.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
  
router.post('/newCompany', (req, res) => {
    const company = new Company();

    const { name,image_url,stress_level,intention_to_leave } = req.body;

    if (!name) {
        return res.json({
        success: false,
        error: 'INVALID INPUTS',
        });
    }
    company.name = name
    company.image_url = image_url
    company.stress_level = stress_level
    company.intention_to_leave = intention_to_leave
    company.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, company: company });
    });
});

module.exports = router