'use strict';

let express = require('express');
let ejs = require('ejs');

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.run();
    }

    config() {
        this.app.set('views', __dirname + '/views');
        this.app.engine('html', ejs.renderFile);
        this.app.set('view engine', 'html');
        this.app.use(express.static(__dirname + '/dist'));
    }

    run() {
        this.app.listen(3000, () => console.log("App running at 3000"));
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.render('index');
        });
        this.app.get('/dashboard', (req, res) => {
            res.render('dashboard');
        });
    }
}

new App();
