import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import User from './models/User';

export default app => {

    mongoose.connect('mongodb://localhost/wolfsch')
        .then( () => console.log('la db esta conectada') );

    app.use(express.json());

    app.use( express.static(path.join(__dirname, '../dist')) );


    app.get('/api/user', (req, res) => {
        User.find()
            .then( response => {
                res.json(response);
            });
    });


    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });

}
