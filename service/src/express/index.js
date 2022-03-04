const bodyParser = require('body-parser');
const express = require('express');

const createApp = ({ env, config }) => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    return app;
};

module.exports = createApp;
