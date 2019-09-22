const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const token = req.session.token;

    if (!token)
        return res.redirect('/login');
    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.redirect('/login');

        req.userId = decoded.id;
        return next();
    });
};