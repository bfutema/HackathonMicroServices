var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var isAuthenticate = true;

  if (!isAuthenticate) res.redirect('login');

  res.render('pages/home', { title: 'Express' });
});

router.get('/jurados', function (req, res, next) {
  res.render('pages/jurados', { ativo: 'active' });
});

router.get('/coordenadores', function (req, res, next) {
  res.render('pages/coordenadores', { ativo: 'active' });
});

router.get('/mentores', function (req, res, next) {
  res.render('pages/mentores', { ativo: 'active' });
});

router.get('/time', function (req, res, next) {
  res.render('pages/time', { ativo: 'active' });
});

module.exports = router;
