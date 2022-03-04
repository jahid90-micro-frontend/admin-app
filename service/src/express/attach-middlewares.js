const primeRequestContext = require('./prime-request-context');

const attachMiddlewares = ({ app, env, config }) => {
    app.use(primeRequestContext);
};

module.exports = attachMiddlewares;
