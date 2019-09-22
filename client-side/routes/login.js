const express = require('express');
const request = require('request');

const router = express.Router();

/* GET Login page */
router.get('/', function (req, res) {
    res.render('pages/login', { title: 'Login' });
});

router.post('/auth', function (req, res) {
    var resposta = 'Bearer ';

    var options = {
        url: 'http://localhost:9000/auth/authenticate',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        json: req.body
    };

    request(options, function (error, response, body) {
        req.session.token = body.token;
        req.session.User = body.user;
        if (body.token != null) {
            res.redirect('/');
        } else  {
            res.redirect('login');
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.token = null;
    res.redirect('/login');
});

module.exports = router;