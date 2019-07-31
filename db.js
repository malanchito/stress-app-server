const mongoose = require('mongoose');
const dbRoute = 'mongodb+srv://codaisseur:reindavid@cluster0-9wg2e.mongodb.net/stress?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db