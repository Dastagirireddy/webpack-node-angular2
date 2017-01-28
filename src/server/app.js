'use strict';

let express = require('express');
let ejs = require('ejs');
let join = require('path').join;

class App {
    constructor() {
        this.app = express();
        this.root = process.env.ROOT;
        this.config();
        this.routes();
    }

    loadTemplates() {
        this.app.set('views', join(this.root, 'views'));
        this.app.engine('html', ejs.renderFile);
        this.app.set('view engine', 'html');
    }

    config() {
        this.loadTemplates();
        this.app.use(express.static(join(this.root, 'dist')));
    }

    routes() {
        let router = require('./router');
        this.app.use(router);
    }
}

module.exports = new App().app;
