const primeRequestContext = require('./prime-request-context');

const attachMiddlewares = ({ app, env, config }) => {
    app.use(primeRequestContext);

    console.debug('Attached middlewares');
};

module.exports = attachMiddlewares;
