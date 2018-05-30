const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./appRouter');
const app = express();

//Connection to MongoDB
const mongoUri = config.mongoUri;

mongoose.connect(mongoUri);

mongoose.connection.once('open', (err) => {
    if (err) {
        throw new Error(`unable to connect to database: ${err.message}`);
    }
    console.log('connection to the database is successful');
});

mongoose.connection.on('error', (err) => {
    throw new Error(`unable to connect to database: ${err.message}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// set the port

app.set('port', (process.env.PORT || 3000));

//Configuring routes

app.use('/', routes);

// listen on port

app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'));
});