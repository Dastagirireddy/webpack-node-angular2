'use strict';

module.exports = function authMiddlerware(req, res, next) {

    let session = req.session;

    if (typeof session == 'object' && typeof session.user == 'object') {
        if (req.url == '/logout') {
            next();
        } else {
            res.render('dashboard');
        }
    } else {
        if (req.url == '/dashboard') {
            res.redirect('/login');
        } else {
            next();
        }
    }
};
