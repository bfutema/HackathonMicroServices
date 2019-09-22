var express = require('express');
var router = express.Router();
var middlwareAuth = require('../middleware/auth');

/* GET home page. */
router.get('/', middlwareAuth, function(req, res, next) {
  var User = req.session.User;
  res.render('pages/home', { title: 'Express', ativo: 'time', usuario: User });
});

router.get('/jurados', middlwareAuth, function (req, res, next) {
  var User = req.session.User;
  res.render('pages/jurados', { ativo: 'jurados', usuario: User });
});

router.get('/coordenadores', middlwareAuth, function (req, res, next) {
  var User = req.session.User;
  res.render('pages/coordenadores', { ativo: 'coordenadores', usuario: User });
});

router.get('/mentores', middlwareAuth, function (req, res, next) {
  var User = req.session.User;
  res.render('pages/mentores', { ativo: 'mentores', usuario: User });
});

router.get('/time', middlwareAuth, function (req, res, next) {
  var User = req.session.User;
  res.render('pages/time', { ativo: 'time', usuario: User });
});

module.exports = router;
