const express = require('express');
const router = express.Router();
const Drug = require('../Drug/model')

router.get('/drugs', (req, res, next) => {
    Drug
    .find().sort({ prescriptions: -1 })
    .then(drugs => res.send({ drugs: drugs }))
    .catch(next)
});
  
router.post('/drugs', (req, res) => {
    const { id, update } = req.body;
    Drug.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
  
router.post('/newDrug', (req, res) => {
    const drug = new Drug();
  
    const { name,description,image_url,side_effects,prescriptions } = req.body;
  
    if (!name) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    drug.name = name
    drug.description = description
    drug.image_url = image_url
    drug.side_effects = side_effects
    drug.prescriptions = prescriptions
    drug.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, drug: drug });
    });
});

  module.exports = router