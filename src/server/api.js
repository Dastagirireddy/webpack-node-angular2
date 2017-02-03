'use strict';
let Router = require('express').Router;
let authMiddlerware = require('./utils/auth.middleware');

class Api {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.post('/login', authMiddlerware, (req, res) => {

            let user = req.body;
            let session = req.session;

            if (user.email == "admin@admin.com" && user.password == "admin") {
                session.user = user;
                res.redirect('/dashboard');
            } else {
                res.statusCode = 401;
                res.end();
            }
        });
    }
}

module.exports = new Api().router;
