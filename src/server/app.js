'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let Session = require('express-session');
let ejs = require('ejs');
let join = require('path').join;

class App {
    constructor() {
        this.app = express();
        this.root = process.env.ROOT;
        this.config();
        this.routes();
        this.api();
    }

    loadTemplates() {
        this.app.set('views', join(this.root, 'views'));
        this.app.engine('html', ejs.renderFile);
        this.app.set('view engine', 'html');

        this.app.use(function(req, res, next) {

            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            next();
        });
    }

    config() {
        this.loadTemplates();
        this.app.use(express.static(join(this.root, 'dist')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(Session({
            name: '__mysession',
            secret: '1234AbCdEf',
            resave: false,
            saveUninitialized: true
        }));
    }

    routes() {
        let router = require('./router');
        this.app.use(router);
    }

    api() {
        let router = require('./api');
        this.app.use('/api', router);
    }
}

module.exports = new App().app;
