const bodyParser = require('body-parser');
const express = require('express');

const attachMiddlewares = require('./attach-middlewares');
const mountRoutes = require('./mount-routes');

const createApp = ({ env, config }) => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    attachMiddlewares({ app, env, config });
    mountRoutes({ app, env, config });

    return app;
};

module.exports = createApp;
