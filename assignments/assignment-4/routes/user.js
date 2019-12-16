
const express = require('express');
const path = require('path');
const router = express.Router();


const users = [];

router.get('/', (req, res, next) => {
    console.log('/ route hit');
    res.render( 'addUser',{
        pageTitle: 'Home page'
    });
});


router.get('/users', (req, res, next) => {
    console.log('/user route hit');
    res.render('user', {
        pageTitle: 'List of users',
        users: users
    });
});

router.post('/create-user', (req, res, next) => {
    console.log('/create-user route hit');
    console.log(req.body);
    users.push({name: req.body.username});
    res.redirect('/users');
});

module.exports = {
    routes: router,
    users: users
}