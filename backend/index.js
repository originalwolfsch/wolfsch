// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');


// Connect to database Mongo
mongoose.connect('mongodb://localhost/wolfsch')
    .then( () => console.log('la db esta conectada') );


// Middlewares
app.use( morgan('dev') );


// Settings
app.set('port', process.env.PORT || 3000);
app.use( express.json() );
app.use( express.static(path.join(__dirname, '../dist')) );


// Routes
app.use('/api/user', require('./routes/user'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});


// Listen server
const server = app.listen(app.get('port'), () => console.log('Server ON'));
