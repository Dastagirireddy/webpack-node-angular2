'use strict';

let router = require('express').Router;
let authMiddlerware = require('./utils/auth.middleware');

class Router {
    constructor() {
        this.router = router();
        this.init();
    }

    init() {
        this.router.get('/', authMiddlerware, (req, res) => {
            res.render('index');
        });

        this.router.get('/dashboard', authMiddlerware, (req, res) => {
            res.render('dashboard');
        });

        this.router.get('/login', authMiddlerware, (req, res) => {
            res.render('login');
        });

        this.router.get('/logout', authMiddlerware, (req, res) => {

            req.session.destroy(function() {
                res.redirect('/');
            });
        });
    }
}

module.exports = new Router().router;
