// Dependencies
const express = require('express');
const router = express.Router();

// Require model User
const User = require('../models/User');


router.get('/', (req, res) => {
    User.find()
        .then( response => {
            res.json(response);
        });
});



// Export routes
module.exports = router;
