const express = require('express');
const router = express.Router();
const Country = require('../Country/model')

router.get('/countries/mostSmoking', (req, res, next) => {
    Country
    .find().limit(10).sort({ cigarette_consumption: -1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/leastSmoking', (req, res, next) => {
    Country
    .find({ cigarette_consumption: { $gt: 0 }})
    .limit(10).sort({ cigarette_consumption: 1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/mostSmokingEurope', (req, res, next) => {
    Country
    .find({ continent: { $eq: 'Europe' }})
    .limit(10).sort({ cigarette_consumption: -1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/leastSmokingEurope', (req, res, next) => {
    Country
    .find({ cigarette_consumption: { $gt: 0 }, continent: { $eq: 'Europe' }})
    .limit(10).sort({ cigarette_consumption: 1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/mostMedication', (req, res, next) => {
    Country
    .find().limit(5).sort({ antidepressant_consumption: -1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/leastMedication', (req, res, next) => {
    Country
    .find({ antidepressant_consumption: { $gt: 0 }})
    .limit(5).sort({ antidepressant_consumption: 1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/mostMedicationEurope', (req, res, next) => {
    Country
    .find({ continent: { $eq: 'Europe' }})
    .limit(5).sort({ antidepressant_consumption: -1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})

router.get('/countries/leastMedicationEurope', (req, res, next) => {
    Country
    .find({ antidepressant_consumption: { $gt: 0 }, continent: { $eq: 'Europe' }})
    .limit(5).sort({ antidepressant_consumption: 1 })
    .then(countries => res.send({ countries: countries }))
    .catch(next)
})
  
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