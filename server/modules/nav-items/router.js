(
    function () {
        const express = require('express');
        const navItemsRouter = express.Router();
        const navItemsData = require('./data.json');

        navItemsRouter.get('/', (req, res) => {
            res.status(200).json(navItemsData);
        });

        module.exports = navItemsRouter;
    }
)()