const mountRoutes = ({ app, env, config }) => {
    app.use('/', config.homeApp);
};

module.exports = mountRoutes;
