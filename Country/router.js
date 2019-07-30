const express = require('express');
const router = express.Router();
const Country = require('../Country/model')

router.get('/countries', (req, res) => {
    Country.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });
  
router.post('/countries', (req, res) => {
    const { id, update } = req.body;
    Country.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
  
router.post('/newCountry', (req, res) => {
    const country = new Country();

    const { name,continent,image_url,cigarette_consumption,antidepressant_consumption } = req.body;

    if (!name) {
        return res.json({
        success: false,
        error: 'INVALID INPUTS',
        });
    }
    country.name = name
    country.continent = continent
    country.image_url = image_url
    country.cigarette_consumption = cigarette_consumption
    country.antidepressant_consumption = antidepressant_consumption
    country.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, country: country });
    });
});

module.exports = router