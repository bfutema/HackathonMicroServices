const express = require('express');
const request = require('request');

const router = express.Router();

/* GET Login page */
router.get('/', function (req, res) {
    res.render('pages/login', { title: 'Login' });
});

router.post('/login/auth', function (req, res) {

    var resposta = 'Bearer ';

    var tok = request.post('http://localhost:9000/auth/authenticate', { form: req.body }, function (error, response, body) {
        var jsonRetorno = JSON.parse(body);
        return jsonRetorno.token;
    });

    console.log(tok);

    if (resposta != null) {
        //var token = resposta;
        //res.setHeader('Authorization', '');
        //res.redirect('../');
    } else  {
        res.redirect('login');
    }
});

module.exports = router;