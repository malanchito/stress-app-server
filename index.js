const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db.js')
const logger = require('morgan');
const drug = require('./Drug/model');
const drugRouter = require('./Drug/router')
const country = require('./Country/model')
const countryRouter = require('./Country/router')
const company = require('./Company/model')
const companyRouter = require('./Company/router')
const job = require('./Job/model')
const jobRouter = require('./Job/router')
const API_PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', drugRouter);
app.use('/api', countryRouter)
app.use('/api', companyRouter)
app.use('/api', jobRouter)
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
