'use strict';

let router = require('express').Router;

class Router {
    constructor() {
        this.router = router();
        this.init();
    }

    init() {
        this.router.get('/', (req, res) => {
            res.render('index');
        });
        this.router.get('/dashboard', (req, res) => {
            res.render('dashboard');
        });
        this.router.get('/login', (req, res) => {
            res.render('login');
        })
    }
}

module.exports = new Router().router;
