(
    function() {
        'use strict';

        const express = require('express');
        const router = express.Router();
        const packageInfo = require('../package.json');

        router.get('/', (req, res) => {
            const response = {
                name: packageInfo.name,
                version: packageInfo.version,
                description: packageInfo.description
            };
            res.status(200).json(response);
        });

        router.use('/nav-items', require('../modules/nav-items/router'));

        module.exports = router;
    }
)()