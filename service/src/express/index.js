const bodyParser = require('body-parser');
const express = require('express');

const attachMiddlewares = require('./attach-middlewares');
const mountRoutes = require('./mount-routes');

const createApp = ({ env, config }) => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    if (process.env.NODE_ENV === 'development') {
        const cors = require('cors');
        app.use(cors());
    }

    attachMiddlewares({ app, env, config });
    mountRoutes({ app, env, config });

    return app;
};

module.exports = createApp;
