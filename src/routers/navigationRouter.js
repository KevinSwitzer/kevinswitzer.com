const express = require('express');
const navigation = require('../data/navigation.json');
const navRouter = express.Router();

navRouter.route('/')
    .get((req, res) => {
        res.render('index', {
            navigation
        });
    });

    navRouter.route('/:page')
    .get((req, res) => {
        const page = req.params.page;

        res.render(page, {
            navigation,
            page
        });
    });

module.exports = navRouter;